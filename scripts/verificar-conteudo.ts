/**
 * Verificação estrutural do conteúdo.
 *
 * Compilar não é funcionar. Todos os defeitos encontrados neste repositório
 * passavam pelo TypeScript sem reclamação: a fórmula da energia cinética
 * chegava à tela como `$rac{1}{2}mv^2$` porque `\f`, dentro de um template
 * literal comum, é o caractere de form-feed. O tipo estava certo, o build
 * passava, e o texto estava corrompido.
 *
 * Cada regra aqui existe porque a falha correspondente já aconteceu ou é
 * barata de prevenir. O objetivo é que a próxima só possa entrar por cima de
 * uma checagem que falha.
 */
import katex from 'katex';
import { curriculum, todosOsSubtopicos, porId } from '../src/data/curriculum';
import { FONTES } from '../src/data/fontes';
import { estagio } from '../src/types';
import pacote from '../package.json' with { type: 'json' };

const GFM_LIGADO = 'remark-gfm' in (pacote.dependencies as Record<string, string>);

const problemas: string[] = [];
const avisos: string[] = [];

function erro(onde: string, msg: string) {
  problemas.push(`${onde}: ${msg}`);
}

// ── Integridade da grade ────────────────────────────────────────────────
const vistos = new Set<string>();
for (const sub of todosOsSubtopicos) {
  if (vistos.has(sub.id)) erro(sub.id, 'id de subtópico duplicado');
  vistos.add(sub.id);
}

for (const mod of curriculum) {
  if (mod.subtopics.length === 0) erro(`módulo ${mod.id}`, 'módulo sem subtópicos');
}

// ── Caracteres de controle: a classe de defeito do `\frac` ──────────────
// Nenhum caractere abaixo de U+0020 tem lugar num texto didático, à exceção da
// quebra de linha e do retorno de carro. Quando aparece um, é escape de LaTeX
// que o template literal interpretou: form-feed veio de "\f", tabulação de
// "\theta", retrocesso de "\b". A verificação é feita por código de caractere
// justamente para não precisar escrever esses valores literalmente aqui.
function temControle(texto: string): boolean {
  for (let i = 0; i < texto.length; i++) {
    const c = texto.charCodeAt(i);
    if (c < 32 && c !== 10 && c !== 13) return true;
  }
  return false;
}

for (const sub of todosOsSubtopicos) {
  const alvos: [string, string][] = [
    ['content', sub.content],
    ['title', sub.title],
    ['objetivo', sub.objetivo ?? ''],
    ...sub.exercises.flatMap((e): [string, string][] => [
      [`exercício ${e.id} (pergunta)`, e.question],
      [`exercício ${e.id} (explicação)`, e.explanation],
      ...e.options.map((o, i): [string, string] => [`exercício ${e.id} (opção ${i})`, o]),
    ]),
  ];
  for (const [campo, texto] of alvos) {
    if (temControle(texto)) {
      erro(
        sub.id,
        `${campo} contém caractere de controle — provável escape de LaTeX fora de String.raw`,
      );
    }
  }
}

// ── Exercícios ──────────────────────────────────────────────────────────
for (const sub of todosOsSubtopicos) {
  for (const ex of sub.exercises) {
    if (ex.options.length < 2) erro(ex.id, 'exercício com menos de duas alternativas');
    if (ex.correctAnswerIndex < 0 || ex.correctAnswerIndex >= ex.options.length) {
      erro(ex.id, `correctAnswerIndex ${ex.correctAnswerIndex} fora do intervalo de alternativas`);
    }
    if (!ex.explanation.trim()) erro(ex.id, 'exercício sem explicação');
    if (new Set(ex.options).size !== ex.options.length) {
      erro(ex.id, 'alternativas repetidas');
    }
  }
}

// ── Referências cruzadas ────────────────────────────────────────────────
for (const sub of todosOsSubtopicos) {
  for (const pre of sub.prerequisitos ?? []) {
    if (!porId.has(pre)) erro(sub.id, `pré-requisito inexistente: ${pre}`);
    if (pre === sub.id) erro(sub.id, 'tópico listado como pré-requisito de si mesmo');
  }
  for (const f of sub.fontes ?? []) {
    if (!FONTES[f]) erro(sub.id, `fonte inexistente no registro: ${f}`);
  }
}

/** Blocos `$$` com os delimitadores em linhas próprias — os únicos que o
 *  remark-math trata como display de verdade. */
function formulasEmDisplay(texto: string): string[] {
  return [...texto.matchAll(/^\$\$$([\s\S]*?)^\$\$$/gm)].map((m) => m[1]);
}

/** Matemática inline: `$...$` sem quebra de linha e sem colar em `$$`. */
function formulasInline(texto: string): string[] {
  return [...texto.matchAll(/(?<!\$)\$([^$\n]+)\$(?!\$)/g)].map((m) => m[1]);
}

// ── Exigências de um tópico dado como escrito ───────────────────────────
// A estrutura progressiva é a promessa editorial do portal: partir do
// problema, construir, declarar e só então apontar onde se erra. Se a seção
// não está lá, o texto não cumpre o formato.
const SECOES = ['### O problema', '### A construção', '### A declaração', '### Onde se tropeça'];

for (const sub of todosOsSubtopicos) {
  if (estagio(sub) !== 'completo') continue;

  if (!sub.objetivo?.trim()) erro(sub.id, 'tópico escrito sem objetivo declarado');
  if (!sub.fontes?.length) erro(sub.id, 'tópico escrito sem nenhuma fonte');
  if (sub.exercises.length === 0) avisos.push(`${sub.id}: tópico escrito sem exercícios`);

  for (const secao of SECOES) {
    if (!sub.content.includes(secao)) {
      erro(sub.id, `falta a seção "${secao}" exigida pela estrutura progressiva`);
    }
  }

  // Delimitadores de matemática desbalanceados quebram o KaTeX em silêncio: o
  // resto do parágrafo é engolido como fórmula.
  const cifroes = (sub.content.match(/\$/g) ?? []).length;
  if (cifroes % 2 !== 0) {
    erro(sub.id, `número ímpar de "$" (${cifroes}) — delimitador de matemática desbalanceado`);
  }

  // `$$x$$` numa linha só é aceito pelo remark-math, mas sai renderizado como
  // matemática *inline*: a equação em destaque acaba espremida no meio do
  // parágrafo em vez de centralizada em linha própria. O build passa, o texto
  // fica errado. Só a forma com os delimitadores em linhas separadas produz
  // display de verdade.
  for (const linha of sub.content.split('\n')) {
    if (/^\s*\$\$.+\$\$\s*$/.test(linha)) {
      erro(
        sub.id,
        `equação em display escrita numa linha só ("${linha.trim().slice(0, 40)}…") — ` +
          'renderiza como inline; ponha os "$$" em linhas separadas',
      );
    }
  }

  // Markdown básico não conhece tabelas: sem o remark-gfm ligado, uma tabela
  // vira uma parede de barras verticais na tela, sem erro nem aviso.
  if (/^\s*\|.*\|\s*$/m.test(sub.content) && !GFM_LIGADO) {
    erro(sub.id, 'usa tabela em Markdown, mas o remark-gfm não está nas dependências');
  }

  // Cada fórmula é compilada pelo mesmo KaTeX que roda no navegador.
  //
  // As três regras acima pegam delimitador errado; nenhuma delas pega comando
  // inexistente. E `$\naoexiste{x}$` atravessa o TypeScript, atravessa o build
  // e só falha na hora de desenhar — onde o leitor recebe um bloco vermelho de
  // erro no meio do parágrafo, ou, pior, um trecho silenciosamente mudo. Como o
  // katex já é dependência do portal, compilar aqui custa milissegundos e move
  // a falha do navegador do leitor para a CI.
  for (const [modo, expressoes] of [
    ['display', formulasEmDisplay(sub.content)],
    ['inline', formulasInline(sub.content)],
  ] as const) {
    for (const expressao of expressoes) {
      try {
        katex.renderToString(expressao, {
          displayMode: modo === 'display',
          throwOnError: true,
          strict: 'error',
        });
      } catch (e) {
        const motivo = (e instanceof Error ? e.message : String(e)).split('\n')[0];
        erro(sub.id, `fórmula ${modo} não compila no KaTeX: ${motivo}`);
      }
    }
  }
}

// ── Fontes órfãs ────────────────────────────────────────────────────────
const citadas = new Set(todosOsSubtopicos.flatMap((s) => s.fontes ?? []));
for (const id of Object.keys(FONTES)) {
  if (!citadas.has(id)) {
    avisos.push(`fonte "${id}" está no registro mas não é citada em lugar nenhum`);
  }
}

// ── Relatório ───────────────────────────────────────────────────────────
const escritos = todosOsSubtopicos.filter((s) => estagio(s) === 'completo');
const exercicios = todosOsSubtopicos.reduce((n, s) => n + s.exercises.length, 0);
console.log(
  `${curriculum.length} módulos · ${todosOsSubtopicos.length} subtópicos · ` +
    `${escritos.length} escritos · ${exercicios} exercícios\n`,
);

for (const a of avisos) console.log(`  aviso  ${a}`);
if (avisos.length > 0) console.log('');

if (problemas.length > 0) {
  console.error(`${problemas.length} problema(s) encontrado(s):\n`);
  for (const p of problemas) console.error(`  ERRO  ${p}`);
  process.exit(1);
}

console.log('Conteúdo íntegro.');
