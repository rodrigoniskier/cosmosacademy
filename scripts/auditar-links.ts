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
import restritos from '../src/data/dominios-restritos.json' with { type: 'json' };

// Alguns acervos acadêmicos resolvem para IPv6 que os runners não alcançam.
setDefaultResultOrder('ipv4first');

const TIMEOUT_MS = 25_000;
const TENTATIVAS = 3;
const CONCORRENCIA = 6;

/**
 * Domínios que recusam acesso vindo de faixas de IP de nuvem.
 *
 * Da CI é impossível distinguir esse bloqueio de um link morto — nos dois
 * casos a requisição falha. E reprovar por causa disso teria uma consequência
 * ruim e silenciosa: empurraria o portal a trocar as notas de Cambridge e as
 * Feynman Lectures por fontes piores só porque um runner não as alcança.
 *
 * Então eles vão para seção própria do relatório e não reprovam. Continuam
 * sendo testados a cada execução, com menos tentativas e prazo mais curto,
 * para não gastar minutos de CI esperando um bloqueio conhecido — e para que,
 * no dia em que voltarem a responder, isso apareça no relatório.
 *
 * Toda URL fora desta lista que falhe continua quebrando a auditoria.
 */
const DOMINIOS_RESTRITOS = restritos.dominios.map((d) => d.dominio);

function ehRestrito(url: string): boolean {
  try {
    const host = new URL(url).hostname;
    return DOMINIOS_RESTRITOS.some((d) => host === d || host.endsWith(`.${d}`));
  } catch {
    return false;
  }
}

const UA =
  'Mozilla/5.0 (compatible; CosmosAcademyLinkAudit/1.0; +https://github.com/rodrigoniskier/cosmosacademy)';

interface Resultado {
  id: string;
  url: string;
  titulo: string;
  ok: boolean;
  status: number | string;
  metodo: string;
  restrito: boolean;
}

async function tentar(url: string, metodo: 'HEAD' | 'GET', timeout: number): Promise<Response> {
  const controle = new AbortController();
  const timer = setTimeout(() => controle.abort(), timeout);
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
  const restrito = ehRestrito(fonte.url);
  const tentativasMax = restrito ? 1 : TENTATIVAS;

  for (let tentativa = 1; tentativa <= tentativasMax; tentativa++) {
    // Muitos servidores acadêmicos respondem 403 ou 405 a HEAD e servem o GET
    // normalmente; por isso o HEAD é só a primeira tentativa, não o veredito.
    for (const metodo of ['HEAD', 'GET'] as const) {
      try {
        const resposta = await tentar(fonte.url, metodo, restrito ? 10_000 : TIMEOUT_MS);
        if (resposta.ok || resposta.status === 304) {
          return {
            id: fonte.id,
            url: fonte.url,
            titulo: fonte.titulo,
            ok: true,
            status: resposta.status,
            metodo,
            restrito,
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
            restrito,
          };
        }
      } catch (erro) {
        ultimoErro = erro instanceof Error ? erro.message : String(erro);
      }
    }
    if (tentativa < tentativasMax) {
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
    restrito,
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

const comuns = resultados.filter((r) => !r.restrito);
const restringidos = resultados.filter((r) => r.restrito);

for (const r of comuns) {
  console.log(`${r.ok ? '  ok  ' : ' FALHA'} ${String(r.status).padEnd(16)} ${r.url}`);
}
if (restringidos.length > 0) {
  console.log('\nDomínios restritos (não reprovam a auditoria):');
  for (const r of restringidos) {
    console.log(`${r.ok ? '  ok  ' : ' bloq.'} ${String(r.status).padEnd(16)} ${r.url}`);
  }
}

const quebrados = comuns.filter((r) => !r.ok);
const bloqueados = restringidos.filter((r) => !r.ok);
console.log(
  `\n${comuns.length - quebrados.length}/${comuns.length} acessíveis entre as fontes auditáveis` +
    (restringidos.length > 0
      ? `, mais ${restringidos.length} em domínio restrito (${bloqueados.length} bloqueadas nesta execução).`
      : '.'),
);

if (gravarRelatorio) {
  const linha = (r: Resultado) =>
    `| ${r.ok ? 'ok' : '**falha**'} | ${r.status} | ${r.titulo} | <${r.url}> |`;

  const linhas = [
    '# Auditoria de links',
    '',
    `Executada em ${new Date().toISOString()}.`,
    '',
    `- Fontes auditáveis: **${comuns.length}** — acessíveis: **${comuns.length - quebrados.length}**, com falha: **${quebrados.length}**`,
    `- Em domínio restrito: **${restringidos.length}** — bloqueadas nesta execução: **${bloqueados.length}**`,
    '',
    '## Fontes auditáveis',
    '',
    'Qualquer falha aqui reprova a auditoria.',
    '',
    '| Estado | Situação | Fonte | URL |',
    '| --- | --- | --- | --- |',
    ...comuns.map(linha),
    '',
  ];

  if (restringidos.length > 0) {
    linhas.push(
      '## Domínios restritos',
      '',
      'Estes domínios recusam acesso automatizado vindo de faixas de IP de nuvem.',
      'Da CI é impossível distinguir esse bloqueio de um link morto, então eles',
      '**não reprovam** a auditoria — mas continuam sendo testados a cada execução,',
      'para que uma eventual volta apareça aqui. O motivo, a evidência e a data da',
      'última confirmação manual estão em `src/data/dominios-restritos.json`.',
      '',
      '| Estado | Situação | Fonte | URL |',
      '| --- | --- | --- | --- |',
      ...restringidos.map(linha),
      '',
      '### Motivos registrados',
      '',
      ...restritos.dominios.map(
        (d) => `- **${d.dominio}** (confirmado em ${d.confirmadoEm}): ${d.motivo} ${d.evidencia}`,
      ),
      '',
    );
  }

  writeFileSync('relatorio-auditoria.md', linhas.join('\n'));
  console.log('Relatório gravado em relatorio-auditoria.md');
}

if (quebrados.length > 0) {
  console.error(`\n${quebrados.length} link(s) com falha:`);
  for (const r of quebrados) console.error(`  ${r.id}: ${r.url} — ${r.status}`);
  if (!permitirFalhaLocal) process.exit(1);
  console.error('\n(--permitir-falha-local: saindo com sucesso mesmo assim)');
}
