import type { Module, SubTopic } from '../types';
import { estagio } from '../types';
import { matematicaFundamental } from './modulos/01-matematica-fundamental';
import { fisicaIntrodutoria } from './modulos/02-fisica-introdutoria';
import { termodinamica } from './modulos/03-termodinamica';
import { eletromagnetismo } from './modulos/04-eletromagnetismo';
import { mecanicaAnalitica } from './modulos/05-mecanica-analitica';
import { relatividadeEspecial } from './modulos/06-relatividade-especial';
import { fisicaEstatistica } from './modulos/07-fisica-estatistica';
import { mecanicaQuantica } from './modulos/08-mecanica-quantica';
import { teoriaQuanticaDeCampos } from './modulos/09-teoria-quantica-de-campos';
import { modulosPendentes } from './modulos/pendentes';

export const curriculum: Module[] = [
  matematicaFundamental,
  fisicaIntrodutoria,
  termodinamica,
  eletromagnetismo,
  mecanicaAnalitica,
  relatividadeEspecial,
  fisicaEstatistica,
  mecanicaQuantica,
  teoriaQuanticaDeCampos,
  ...modulosPendentes,
];

/** Índice plano por id, para não varrer a árvore a cada clique. */
export const porId = new Map<string, SubTopic>(
  curriculum.flatMap((m) => m.subtopics.map((s) => [s.id, s] as const)),
);

/** Em que módulo vive cada subtópico. */
export const moduloDe = new Map<string, Module>(
  curriculum.flatMap((m) => m.subtopics.map((s) => [s.id, m] as const)),
);

export const todosOsSubtopicos: SubTopic[] = curriculum.flatMap((m) => m.subtopics);

export const escritos: SubTopic[] = todosOsSubtopicos.filter((s) => estagio(s) === 'completo');

/** Primeiro tópico escrito — destino de abertura do portal. */
export const primeiroEscrito: string = escritos[0]?.id ?? todosOsSubtopicos[0].id;

export const estatisticas = {
  modulos: curriculum.length,
  subtopicos: todosOsSubtopicos.length,
  escritos: escritos.length,
  exercicios: todosOsSubtopicos.reduce((n, s) => n + s.exercises.length, 0),
};

function semAcento(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/**
 * Normaliza guardando, para cada posição do texto normalizado, a posição
 * correspondente no texto original.
 *
 * Seria mais curto normalizar a string inteira de uma vez e reaproveitar o
 * índice — e, para o texto que existe hoje, funcionaria: em português cada
 * caractere acentuado decompõe em base + marca e volta a um só caractere. Mas
 * isso é uma coincidência do repertório usado, não uma garantia: `toLowerCase`
 * e a decomposição NFD podem alterar o comprimento. Como o índice é usado para
 * recortar o trecho exibido, um deslocamento silencioso cortaria a frase no
 * lugar errado. O mapa custa uma passada e elimina a suposição.
 */
function normalizarComMapa(s: string): { texto: string; mapa: number[] } {
  let texto = '';
  const mapa: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const pedaco = semAcento(s[i]);
    for (let k = 0; k < pedaco.length; k++) mapa.push(i);
    texto += pedaco;
  }
  return { texto, mapa };
}

export interface Achado {
  subtopico: SubTopic;
  modulo: Module;
  /** Trecho ao redor da primeira ocorrência, para dar contexto ao resultado. */
  trecho?: string;
}

const indiceBusca = todosOsSubtopicos.map((s) => {
  const bruto = [s.title, s.objetivo ?? '', s.content, ...s.exercises.map((e) => e.question)].join(' ');
  const { texto, mapa } = normalizarComMapa(bruto);
  return { subtopico: s, bruto, normalizado: texto, mapa };
});

/**
 * Busca em texto integral.
 *
 * Sem isto, os 28 módulos só eram alcançáveis rolando a árvore inteira — e
 * nada do que está escrito *dentro* dos tópicos era encontrável. Quem procura
 * "entropia" precisa chegar em 3.3 sem saber de antemão que ela mora no
 * módulo 3.
 */
export function buscar(consulta: string, limite = 12): Achado[] {
  const q = semAcento(consulta.trim());
  if (q.length < 3) return [];

  const achados: Achado[] = [];
  for (const { subtopico, bruto, normalizado, mapa } of indiceBusca) {
    const i = normalizado.indexOf(q);
    if (i === -1) continue;

    const encontro = mapa[i] ?? 0;
    const fim = (mapa[i + q.length - 1] ?? bruto.length - 1) + 1;
    const inicio = Math.max(0, encontro - 45);
    const trechoBruto = bruto
      .slice(inicio, fim + 80)
      .replace(/\s+/g, ' ')
      .replace(/[#*`]/g, '')
      .trim();

    achados.push({
      subtopico,
      modulo: moduloDe.get(subtopico.id)!,
      trecho: trechoBruto ? (inicio > 0 ? '…' : '') + trechoBruto + '…' : undefined,
    });
    if (achados.length >= limite) break;
  }
  return achados;
}
