import { curriculum, porId } from './curriculum';

/**
 * Referências cruzadas no corpo do texto.
 *
 * Os tópicos se apoiam uns nos outros o tempo todo — "a hamiltoniana de 5.4",
 * "o teorema de Noether do módulo 5.7", "como se verá no módulo 13". Escritas
 * como texto simples, essas dezenas de remissões eram becos sem saída: o leitor
 * lia a promessa e não tinha como segui-la sem caçar o item na árvore lateral.
 *
 * Aqui elas viram links. O portal deixa de ser uma pilha de páginas e passa a
 * ser o que um material de estudo precisa ser: um texto navegável, em que a
 * dependência entre assuntos pode ser percorrida nos dois sentidos.
 */

/** Primeiro subtópico de cada módulo, para resolver referências a módulo inteiro. */
const primeiroDoModulo = new Map<string, string>(
  curriculum.map((m) => [m.id, m.subtopics[0]?.id ?? m.id]),
);

/** Resolve "13" para "13.1" e "5.7" para "5.7"; devolve null se não existir. */
export function resolverReferencia(numero: string): string | null {
  if (porId.has(numero)) return numero;
  const id = primeiroDoModulo.get(numero);
  return id && porId.has(id) ? id : null;
}

/**
 * Casa "módulo 13", "tópico 5.7", "módulos 10 a 12", "tópicos 5.6 e 5.7".
 *
 * A exigência de um dígito logo após a palavra é o que impede confundir com o
 * outro sentido de "módulo" em física — o tamanho de um vetor, como em "força
 * de mesmo módulo e sentido oposto", que nunca vem seguido de número.
 */
const REFERENCIA = /\b(m[óo]dulos?|t[óo]picos?)(\s+)(\d+(?:\.\d+)?)((?:\s*(?:,|e|a|at[ée])\s*\d+(?:\.\d+)?)*)/gi;

const NUMERO = /\d+(?:\.\d+)?/g;

/** Protocolo interno reconhecido pelo renderizador de Markdown. */
export const PREFIXO = '#topico:';

/**
 * Converte as referências do texto em links Markdown apontando para
 * `#topico:<id>`, deixando intacto o que não resolve para um tópico existente.
 */
export function linkificar(markdown: string): string {
  return markdown.replace(REFERENCIA, (todo, palavra, espaco, primeiro, resto) => {
    const alvo = resolverReferencia(primeiro);
    if (!alvo) return todo;

    const inicio = `${palavra}${espaco}[${primeiro}](${PREFIXO}${alvo})`;
    if (!resto) return inicio;

    // "10 a 12" e "5.6 e 5.7": cada número do rabicho também vira link.
    const cauda = resto.replace(NUMERO, (n: string) => {
      const destino = resolverReferencia(n);
      return destino ? `[${n}](${PREFIXO}${destino})` : n;
    });
    return inicio + cauda;
  });
}
