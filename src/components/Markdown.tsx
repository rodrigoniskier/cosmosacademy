import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { linkificar, PREFIXO } from '../data/referencias';

/**
 * Markdown com matemática, tabelas e referências cruzadas navegáveis.
 *
 * Um currículo que vai de aritmética a equações de Einstein não consegue
 * enunciar nada sem notação. Antes daqui, `$\frac{1}{2}mv^2$` chegava à tela
 * como texto cru — quando chegava: em template literal comum, `\f` vira
 * form-feed e a fórmula aparecia mutilada. O KaTeX é renderizado localmente,
 * com as fontes empacotadas no bundle, sem depender de CDN.
 *
 * `remark-gfm` entrou pelo mesmo motivo: o Markdown básico não conhece
 * tabelas, e o dicionário simetria–conservação do tópico 5.7 apareceria como
 * uma parede de barras verticais. Sem erro, sem aviso, só ilegível.
 *
 * A linkificação resolve um defeito do próprio texto: os tópicos se citam o
 * tempo todo, e cada uma dessas dezenas de remissões era um beco sem saída.
 */
export default function Markdown({
  children,
  aoNavegar,
}: {
  children: string;
  /** Sem isto, referências cruzadas são renderizadas como texto comum. */
  aoNavegar?: (id: string) => void;
}) {
  const texto = useMemo(
    () => (aoNavegar ? linkificar(children) : children),
    [children, aoNavegar],
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={{
        a({ href, children: filhos, ...resto }) {
          if (aoNavegar && href?.startsWith(PREFIXO)) {
            const id = href.slice(PREFIXO.length);
            return (
              <button
                type="button"
                onClick={() => aoNavegar(id)}
                title={`Ir para o tópico ${id}`}
                className="cursor-pointer font-medium text-cyan-400 underline decoration-cyan-500/40
                           decoration-dotted underline-offset-2 hover:decoration-cyan-400"
              >
                {filhos}
              </button>
            );
          }
          return (
            <a href={href} target="_blank" rel="noreferrer" {...resto}>
              {filhos}
            </a>
          );
        },
      }}
    >
      {texto}
    </ReactMarkdown>
  );
}
