/**
 * Auditoria de links.
 *
 * O portal promete que toda fonte citada existe e está no ar. Isso não se
 * garante por inspeção manual: link morre em silêncio, e um material de estudo
 * apoiado em referências mortas é pior que um sem referência nenhuma.
 *
 * O script importa o registro de fontes que o site realmente usa — não uma
 * lista paralela que poderia sair de sincronia — e verifica cada URL.
 *
 * Roda na CI. O ambiente de desenvolvimento em sandbox só alcança o registry
 * do npm, então localmente todas as URLs falham por bloqueio de egresso, e não
 * por estarem quebradas; use `--permitir-falha-local` para inspecionar o
 * relatório sem reprovar.
 */
import { writeFileSync } from 'node:fs';
import { setDefaultResultOrder } from 'node:dns';
import { TODAS_AS_FONTES } from '../src/data/fontes';

// Alguns acervos acadêmicos resolvem para IPv6 que os runners não alcançam.
setDefaultResultOrder('ipv4first');

const TIMEOUT_MS = 25_000;
const TENTATIVAS = 3;
const CONCORRENCIA = 6;

const UA =
  'Mozilla/5.0 (compatible; CosmosAcademyLinkAudit/1.0; +https://github.com/rodrigoniskier/cosmosacademy)';

interface Resultado {
  id: string;
  url: string;
  titulo: string;
  ok: boolean;
  status: number | string;
  metodo: string;
}

async function tentar(url: string, metodo: 'HEAD' | 'GET'): Promise<Response> {
  const controle = new AbortController();
  const timer = setTimeout(() => controle.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      method: metodo,
      redirect: 'follow',
      signal: controle.signal,
      headers: {
        'user-agent': UA,
        accept: 'text/html,application/xhtml+xml,application/pdf,*/*',
        'accept-language': 'pt-BR,pt;q=0.9,en;q=0.8',
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

async function verificar(fonte: (typeof TODAS_AS_FONTES)[number]): Promise<Resultado> {
  let ultimoErro: unknown;

  for (let tentativa = 1; tentativa <= TENTATIVAS; tentativa++) {
    // Muitos servidores acadêmicos respondem 403 ou 405 a HEAD e servem o GET
    // normalmente; por isso o HEAD é só a primeira tentativa, não o veredito.
    for (const metodo of ['HEAD', 'GET'] as const) {
      try {
        const resposta = await tentar(fonte.url, metodo);
        if (resposta.ok || resposta.status === 304) {
          return {
            id: fonte.id,
            url: fonte.url,
            titulo: fonte.titulo,
            ok: true,
            status: resposta.status,
            metodo,
          };
        }
        // 4xx/5xx com HEAD ainda merece um GET antes de desistir.
        ultimoErro = `HTTP ${resposta.status}`;
        if (metodo === 'GET' && resposta.status !== 429 && resposta.status < 500) {
          return {
            id: fonte.id,
            url: fonte.url,
            titulo: fonte.titulo,
            ok: false,
            status: resposta.status,
            metodo,
          };
        }
      } catch (erro) {
        ultimoErro = erro instanceof Error ? erro.message : String(erro);
      }
    }
    if (tentativa < TENTATIVAS) {
      await new Promise((r) => setTimeout(r, 1000 * 2 ** (tentativa - 1)));
    }
  }

  return {
    id: fonte.id,
    url: fonte.url,
    titulo: fonte.titulo,
    ok: false,
    status: String(ultimoErro ?? 'falha desconhecida'),
    metodo: 'GET',
  };
}

async function emLotes<T, R>(itens: T[], n: number, f: (item: T) => Promise<R>): Promise<R[]> {
  const saida: R[] = [];
  for (let i = 0; i < itens.length; i += n) {
    saida.push(...(await Promise.all(itens.slice(i, i + n).map(f))));
  }
  return saida;
}

const gravarRelatorio = process.argv.includes('--relatorio');
const permitirFalhaLocal = process.argv.includes('--permitir-falha-local');

console.log(`Auditando ${TODAS_AS_FONTES.length} fontes…\n`);

const resultados = await emLotes(TODAS_AS_FONTES, CONCORRENCIA, verificar);
resultados.sort((a, b) => a.id.localeCompare(b.id));

for (const r of resultados) {
  console.log(`${r.ok ? '  ok  ' : ' FALHA'} ${String(r.status).padEnd(10)} ${r.url}`);
}

const quebrados = resultados.filter((r) => !r.ok);
console.log(`\n${resultados.length - quebrados.length}/${resultados.length} acessíveis.`);

if (gravarRelatorio) {
  const linhas = [
    '# Auditoria de links',
    '',
    `Executada em ${new Date().toISOString()}.`,
    '',
    `- Fontes verificadas: **${resultados.length}**`,
    `- Acessíveis: **${resultados.length - quebrados.length}**`,
    `- Com falha: **${quebrados.length}**`,
    '',
    '| Estado | Situação | Fonte | URL |',
    '| --- | --- | --- | --- |',
    ...resultados.map(
      (r) => `| ${r.ok ? 'ok' : '**falha**'} | ${r.status} | ${r.titulo} | <${r.url}> |`,
    ),
    '',
  ];
  writeFileSync('relatorio-auditoria.md', linhas.join('\n'));
  console.log('Relatório gravado em relatorio-auditoria.md');
}

if (quebrados.length > 0) {
  console.error(`\n${quebrados.length} link(s) com falha:`);
  for (const r of quebrados) console.error(`  ${r.id}: ${r.url} — ${r.status}`);
  if (!permitirFalhaLocal) process.exit(1);
  console.error('\n(--permitir-falha-local: saindo com sucesso mesmo assim)');
}
