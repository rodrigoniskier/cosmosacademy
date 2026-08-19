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
 * Remissão escrita sem a palavra: "a hamiltoniana de 5.4", "como se viu em
 * 4.7", "o teorema de Noether (5.7)".
 *
 * Exigir a palavra antes do número, como faz a regra acima, deixava de fora a
 * forma mais comum de citar no corpo do texto — 87 remissões, mais do que as
 * que a regra pegava. Elas eram exatamente o beco sem saída que este arquivo
 * existe para eliminar: o leitor lê "resultado de 7.5" e não tem como ir lá.
 *
 * Aqui não há palavra para desambiguar, então o critério é outro e mais
 * estrito: só vira link o que tem a forma `N.M` **e** resolve para um
 * subtópico que existe de fato. Um inteiro solto nunca é linkado — "módulo 13"
 * depende da palavra e continua a cargo da regra anterior.
 */
const REFERENCIA_SOLTA = /\b\d{1,2}\.\d{1,2}\b/g;

/**
 * Trechos em que o linkificador não pode encostar: matemática, que iria para o
 * KaTeX com um link Markdown enfiado no meio da fórmula, e links já formados,
 * que seriam processados uma segunda vez.
 */
const INTOCAVEL = /\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\[[^\]]*\]\([^)]*\)/g;

/** Aplica `transformar` apenas aos pedaços de texto que podem ser mexidos. */
function foraDoIntocavel(texto: string, transformar: (t: string) => string): string {
  let saida = '';
  let cursor = 0;
  for (const m of texto.matchAll(INTOCAVEL)) {
    saida += transformar(texto.slice(cursor, m.index)) + m[0];
    cursor = m.index + m[0].length;
  }
  return saida + transformar(texto.slice(cursor));
}

/**
 * Converte as referências do texto em links Markdown apontando para
 * `#topico:<id>`, deixando intacto o que não resolve para um tópico existente.
 *
 * As duas regras rodam em passadas separadas de propósito: a primeira cria
 * links, e a segunda precisa enxergá-los como intocáveis para não reescrever o
 * número que já está dentro deles.
 */
export function linkificar(markdown: string): string {
  const comPalavra = foraDoIntocavel(markdown, (trecho) =>
    trecho.replace(REFERENCIA, (todo, palavra, espaco, primeiro, resto) => {
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
    }),
  );

  return foraDoIntocavel(comPalavra, (trecho) =>
    trecho.replace(REFERENCIA_SOLTA, (n) =>
      porId.has(n) ? `[${n}](${PREFIXO}${n})` : n,
    ),
  );
}
