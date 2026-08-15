import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

/**
 * Markdown com matemática e tabelas.
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
 */
export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
      {children}
    </ReactMarkdown>
  );
}
