import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle, ExternalLink } from 'lucide-react';
import type { SubTopic } from '../types';
import { estagio } from '../types';
import { fontesDe } from '../data/fontes';
import { porId } from '../data/curriculum';
import ExerciseWidget from './ExerciseWidget';
import Markdown from './Markdown';

interface ContentAreaProps {
  subTopic: SubTopic;
  onComplete: () => void;
  isCompleted: boolean;
  onSelectSubTopic: (id: string) => void;
}

const NOME_IDIOMA: Record<string, string> = {
  pt: 'português',
  en: 'inglês',
  es: 'espanhol',
  de: 'alemão',
  fr: 'francês',
};

const NOME_TIPO: Record<string, string> = {
  livro: 'livro',
  'notas-de-aula': 'notas de aula',
  curso: 'curso',
  artigo: 'artigo',
  dados: 'dados',
  verbete: 'verbete',
  video: 'vídeo',
};

export default function ContentArea({
  subTopic,
  onComplete,
  isCompleted,
  onSelectSubTopic,
}: ContentAreaProps) {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  useEffect(() => {
    setCompletedExercises(new Set());
  }, [subTopic.id]);

  /**
   * O disparo de `onComplete()` ficava *dentro* do updater do `setState`.
   * Updaters precisam ser funções puras — o React pode reexecutá-los (em modo
   * estrito, sempre executa duas vezes), e um efeito colateral ali dentro
   * dispara em duplicidade e atualiza outro componente no meio da renderização
   * deste. A conta é feita fora, e o estado só é usado para o que ele é.
   */
  const handleExerciseSuccess = (exerciseId: string) => {
    const proximos = new Set(completedExercises);
    proximos.add(exerciseId);
    setCompletedExercises(proximos);
    if (proximos.size === subTopic.exercises.length) onComplete();
  };

  const fontes = fontesDe(subTopic.fontes);
  const prerequisitos = (subTopic.prerequisitos ?? [])
    .map((id) => porId.get(id))
    .filter((s): s is SubTopic => Boolean(s));
  const temExercicios = subTopic.exercises.length > 0;
  const escrito = estagio(subTopic) === 'completo';

  return (
    <main className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
      <div className="custom-scrollbar flex-1 overflow-y-auto pr-2 sm:pr-4">
        <div className="mx-auto max-w-3xl">
          <header className="mb-9">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl">
                {subTopic.title}
              </h2>
              {isCompleted && (
                <div className="flex shrink-0 items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400">
                  <CheckCircle size={16} />
                  <span>Concluído</span>
                </div>
              )}
            </div>

            {subTopic.objetivo && (
              <div className="mt-5 border-l-2 border-cyan-500/60 pl-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-cyan-400">
                  Objetivo
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{subTopic.objetivo}</p>
              </div>
            )}

            {prerequisitos.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Leia antes
                </span>
                {prerequisitos.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onSelectSubTopic(p.id)}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            )}
          </header>

          {escrito ? (
            <div
              className="prose prose-invert prose-slate prose-lg max-w-none
                         prose-headings:text-slate-100 prose-h3:mt-10 prose-h3:text-xl
                         prose-p:text-slate-300 prose-strong:text-cyan-300 prose-a:text-cyan-400
                         prose-li:text-slate-300"
            >
              <Markdown>{subTopic.content}</Markdown>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-6">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                Ainda não escrito
              </p>
              <p className="mt-2 leading-relaxed text-slate-400">
                Este tópico faz parte da grade, mas seu texto ainda não foi redigido. Ele aparece
                aqui de propósito: o mapa completo é o que permite ver onde cada assunto se encaixa
                no caminho até o fim.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                O portal é escrito em ciclos, e os tópicos com o ponto aceso na lista lateral já
                estão prontos.
              </p>
            </div>
          )}

          {fontes.length > 0 && (
            <section className="mt-14 border-t-2 border-cyan-500/30 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-400">
                Onde estudar isto de graça ({fontes.length})
              </h3>
              <p className="mt-1.5 text-xs text-slate-500">
                Só entram obras de domínio público, licença aberta ou edição digital autorizada.
                Todos os links são verificados automaticamente pela auditoria do repositório.
              </p>
              <ul className="mt-5 space-y-4">
                {fontes.map((f) => (
                  <li key={f.id} className="border-l-2 border-slate-800 pl-4">
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-baseline gap-1.5 font-medium text-cyan-400 underline decoration-cyan-500/30 underline-offset-2 hover:decoration-cyan-400"
                    >
                      {f.titulo}
                      <ExternalLink size={12} className="shrink-0" aria-hidden="true" />
                    </a>
                    <p className="mt-0.5 text-sm text-slate-400">
                      {f.autor}
                      {f.ano && ` (${f.ano})`}
                      {f.publicacao && ` · ${f.publicacao}`}
                    </p>
                    <p className="mt-1.5 flex flex-wrap gap-1.5">
                      {[
                        NOME_TIPO[f.tipo] ?? f.tipo,
                        NOME_IDIOMA[f.idioma] ?? f.idioma,
                        f.acesso === 'livre' ? 'acesso livre' : 'cadastro gratuito',
                      ].map((t) => (
                        <span
                          key={t}
                          className="rounded bg-slate-800 px-1.5 py-0.5 text-[0.65rem] uppercase tracking-wide text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </p>
                    {f.nota && (
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.nota}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {temExercicios ? (
            <div className="mt-16 border-t border-slate-800 pt-10">
              <h3 className="mb-2 text-2xl font-bold text-slate-100">Exercícios</h3>
              <p className="mb-8 max-w-lg text-slate-400">
                Cada questão cobra um ponto do texto que costuma ser mal entendido, não a memória
                de uma fórmula.
              </p>

              {subTopic.exercises.map((ex, idx) => (
                <div key={ex.id} className="mb-8">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    Questão {idx + 1} de {subTopic.exercises.length}
                  </span>
                  <ExerciseWidget exercise={ex} onSuccess={() => handleExerciseSuccess(ex.id)} />
                </div>
              ))}
            </div>
          ) : (
            escrito && (
              <div className="mt-16 border-t border-slate-800 pt-10">
                <p className="mb-6 text-slate-400">
                  Este tópico ainda não tem exercícios interativos.
                </p>
                {!isCompleted && (
                  <button
                    type="button"
                    onClick={onComplete}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-2.5 font-bold text-slate-900 transition-colors hover:bg-cyan-400"
                  >
                    Marcar como lido
                    <ArrowUpRight size={16} />
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
