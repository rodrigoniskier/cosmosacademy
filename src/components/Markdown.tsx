import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/**
 * Markdown com matemática.
 *
 * Um currículo que vai de aritmética a equações de Einstein não consegue
 * enunciar nada sem notação. Antes daqui, `$\frac{1}{2}mv^2$` chegava à tela
 * como texto cru — quando chegava: em template literal comum, `\f` vira
 * form-feed e a fórmula aparecia mutilada. O KaTeX é renderizado localmente,
 * com as fontes empacotadas no bundle, sem depender de CDN.
 */
export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {children}
    </ReactMarkdown>
  );
}
