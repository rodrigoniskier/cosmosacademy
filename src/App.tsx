import { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { curriculum, estatisticas, porId, primeiroEscrito } from './data/curriculum';
import type { UserProgress } from './types';

const CHAVE_PROGRESSO = 'cosmos:progresso:v1';
const CHAVE_ULTIMO = 'cosmos:ultimo-topico:v1';

/**
 * O progresso vivia só em memória: bastava recarregar a página para o portal
 * esquecer tudo o que o leitor tinha concluído. Num material de estudo longo
 * isso não é um detalhe — é o que decide se dá para voltar amanhã.
 */
function lerProgresso(): UserProgress {
  try {
    const bruto = localStorage.getItem(CHAVE_PROGRESSO);
    if (!bruto) return {};
    const dados: unknown = JSON.parse(bruto);
    if (!dados || typeof dados !== 'object') return {};
    return dados as UserProgress;
  } catch {
    // localStorage pode estar indisponível (modo privado, cota estourada).
    // Perder o histórico é ruim; derrubar o portal por causa disso é pior.
    return {};
  }
}

function lerUltimoTopico(): string {
  try {
    const id = localStorage.getItem(CHAVE_ULTIMO);
    if (id && porId.has(id)) return id;
  } catch {
    /* segue com o padrão */
  }
  return primeiroEscrito;
}

export default function App() {
  const [selectedSubTopicId, setSelectedSubTopicId] = useState<string>(lerUltimoTopico);
  const [progress, setProgress] = useState<UserProgress>(lerProgresso);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(progress));
    } catch {
      /* sem persistência, mas a sessão continua funcionando */
    }
  }, [progress]);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_ULTIMO, selectedSubTopicId);
    } catch {
      /* idem */
    }
  }, [selectedSubTopicId]);

  const currentSubTopic = porId.get(selectedSubTopicId);

  const handleCompleteTopic = useCallback(() => {
    setProgress((prev) =>
      prev[selectedSubTopicId]?.completed
        ? prev
        : { ...prev, [selectedSubTopicId]: { completed: true } },
    );
  }, [selectedSubTopicId]);

  const selecionar = useCallback((id: string) => {
    setSelectedSubTopicId(id);
    setMenuAberto(false);
  }, []);

  const concluidos = useMemo(
    () => Object.values(progress).filter((p) => p?.completed).length,
    [progress],
  );

  return (
    <div className="flex h-dvh flex-col bg-slate-950 p-4 font-sans text-slate-50 antialiased selection:bg-cyan-500/30 sm:p-6">
      <header className="mb-5 flex shrink-0 items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-label={menuAberto ? 'Fechar o mapa do conhecimento' : 'Abrir o mapa do conhecimento'}
            aria-expanded={menuAberto}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 md:hidden"
          >
            {menuAberto ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
            <span className="text-2xl font-bold text-slate-900">Σ</span>
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-black uppercase tracking-tight sm:text-2xl">
              Cosmos<span className="text-cyan-400">Academy</span>
            </h1>
            <p className="hidden text-[0.7rem] text-slate-500 sm:block">
              Matemática e física, do básico à cosmologia — com fonte aberta para tudo.
            </p>
          </div>
        </div>

        <div className="shrink-0 rounded-full border border-slate-800 bg-slate-900 px-3 py-2 text-right text-xs sm:px-4">
          <p className="font-bold uppercase text-slate-400">
            {concluidos}/{estatisticas.subtopicos}
          </p>
          <p className="whitespace-nowrap text-cyan-400">
            {estatisticas.escritos} escritos
          </p>
        </div>
      </header>

      <main className="grid min-h-0 flex-grow grid-cols-12 gap-6">
        <div
          className={`col-span-12 min-h-0 md:col-span-4 lg:col-span-3 ${
            menuAberto ? 'block' : 'hidden md:block'
          }`}
        >
          <Sidebar
            curriculum={curriculum}
            selectedSubTopicId={selectedSubTopicId}
            onSelectSubTopic={selecionar}
            progress={progress}
          />
        </div>
        <div
          className={`col-span-12 min-h-0 md:col-span-8 lg:col-span-9 ${
            menuAberto ? 'hidden md:block' : 'block'
          }`}
        >
          {currentSubTopic ? (
            <ContentArea
              key={currentSubTopic.id}
              subTopic={currentSubTopic}
              onComplete={handleCompleteTopic}
              isCompleted={Boolean(progress[selectedSubTopicId]?.completed)}
              onSelectSubTopic={selecionar}
            />
          ) : (
            <div className="flex h-full items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-slate-500">
              Tópico não encontrado
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
