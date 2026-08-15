import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import type { Module, UserProgress } from '../types';
import { estagio } from '../types';
import { buscar, estatisticas, moduloDe } from '../data/curriculum';

interface SidebarProps {
  curriculum: Module[];
  selectedSubTopicId: string | null;
  onSelectSubTopic: (id: string) => void;
  progress: UserProgress;
}

export default function Sidebar({
  curriculum,
  selectedSubTopicId,
  onSelectSubTopic,
  progress,
}: SidebarProps) {
  const moduloAtual = selectedSubTopicId ? moduloDe.get(selectedSubTopicId)?.id : undefined;
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => ({
    [moduloAtual ?? '1']: true,
  }));
  const [consulta, setConsulta] = useState('');
  const itemAtivoRef = useRef<HTMLButtonElement>(null);

  // Ao trocar de tópico (inclusive vindo da busca ou de um link "leia antes"),
  // o módulo correspondente precisa estar aberto — senão o item selecionado
  // fica invisível e o leitor perde a referência de onde está.
  useEffect(() => {
    if (!moduloAtual) return;
    setOpenModules((s) => (s[moduloAtual] ? s : { ...s, [moduloAtual]: true }));
  }, [moduloAtual]);

  useEffect(() => {
    itemAtivoRef.current?.scrollIntoView({ block: 'nearest' });
  }, [selectedSubTopicId, openModules]);

  const achados = useMemo(() => buscar(consulta), [consulta]);
  const buscando = consulta.trim().length >= 3;

  const isModuleCompleted = (mod: Module) => {
    const escritos = mod.subtopics.filter((s) => estagio(s) === 'completo');
    return escritos.length > 0 && escritos.every((s) => progress[s.id]?.completed);
  };

  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-100">Mapa do Conhecimento</h2>
        <span className="rounded bg-cyan-500/10 px-2 py-1 text-[10px] text-cyan-400">
          {estatisticas.modulos} módulos
        </span>
      </div>

      <div className="relative mb-4">
        <Search
          size={15}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          aria-hidden="true"
        />
        <label htmlFor="busca" className="sr-only">
          Buscar tópico ou tema
        </label>
        <input
          id="busca"
          type="search"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Buscar tema: entropia, derivada…"
          className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 pl-9 pr-3 text-sm
                     text-slate-200 placeholder:text-slate-600 focus:border-cyan-500/50 focus:outline-none
                     focus:ring-1 focus:ring-cyan-500/30"
        />
      </div>

      <nav className="custom-scrollbar flex-grow space-y-3 overflow-y-auto pr-2">
        {buscando && (
          <section className="mb-4 border-b border-slate-800 pb-3">
            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
              {achados.length > 0 ? `Encontrado em ${achados.length} tópico(s)` : 'Nada encontrado'}
            </p>
            {achados.length === 0 ? (
              <p className="px-1 text-xs leading-relaxed text-slate-500">
                Nenhum tópico menciona “{consulta.trim()}”. Boa parte da grade ainda está por
                escrever — pode ser que o tema esteja num módulo pendente.
              </p>
            ) : (
              <ul className="space-y-1">
                {achados.map(({ subtopico, modulo, trecho }) => (
                  <li key={subtopico.id}>
                    <button
                      type="button"
                      onClick={() => onSelectSubTopic(subtopico.id)}
                      className="w-full rounded-lg border-l-2 border-cyan-500/40 px-3 py-2 text-left hover:bg-slate-800/60"
                    >
                      <span className="block text-sm font-medium text-slate-200">
                        {subtopico.title}
                      </span>
                      <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-slate-500">
                        {modulo.title}
                      </span>
                      {trecho && (
                        <span className="mt-1 block text-[11px] leading-snug text-slate-500">
                          {trecho}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {curriculum.map((mod) => {
          const aberto = Boolean(openModules[mod.id]);
          const escritos = mod.subtopics.filter((s) => estagio(s) === 'completo').length;
          return (
            <div
              key={mod.id}
              className="overflow-hidden rounded-xl border border-slate-800/50 bg-slate-800/20"
            >
              <button
                type="button"
                onClick={() => setOpenModules((s) => ({ ...s, [mod.id]: !s[mod.id] }))}
                aria-expanded={aberto}
                className="flex w-full items-center justify-between gap-2 p-3 text-left transition-colors hover:bg-slate-800/50"
              >
                <span
                  className={`text-sm font-bold ${
                    isModuleCompleted(mod) ? 'text-cyan-400' : 'text-slate-200'
                  }`}
                >
                  {mod.title}
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  {escritos > 0 && (
                    <span
                      title={`${escritos} de ${mod.subtopics.length} tópicos escritos`}
                      className="rounded bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-bold text-cyan-400"
                    >
                      {escritos}/{mod.subtopics.length}
                    </span>
                  )}
                  {aberto ? (
                    <ChevronDown size={16} className="text-slate-400" />
                  ) : (
                    <ChevronRight size={16} className="text-slate-400" />
                  )}
                </span>
              </button>

              {aberto && (
                <div className="px-2 pb-2">
                  {mod.subtopics.map((sub) => {
                    const selecionado = selectedSubTopicId === sub.id;
                    const concluido = Boolean(progress[sub.id]?.completed);
                    const escrito = estagio(sub) === 'completo';
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        ref={selecionado ? itemAtivoRef : undefined}
                        onClick={() => onSelectSubTopic(sub.id)}
                        aria-current={selecionado ? 'true' : undefined}
                        className={`mb-1 flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                          selecionado
                            ? 'border border-cyan-500/30 bg-cyan-500/20 font-bold text-cyan-400'
                            : escrito
                              ? 'font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                              : 'text-slate-600 hover:bg-slate-800/50 hover:text-slate-400'
                        }`}
                      >
                        <span className="truncate pr-1">{sub.title}</span>
                        <span className="flex shrink-0 items-center gap-1.5">
                          {concluido && <span className="text-[10px] text-cyan-400">✓</span>}
                          {escrito ? (
                            <span
                              title="Tópico escrito"
                              className="h-1.5 w-1.5 rounded-full bg-cyan-500"
                            />
                          ) : (
                            <span
                              title="Ainda não escrito"
                              className="h-1.5 w-1.5 rounded-full border border-slate-700"
                            />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
