import React, { useState } from 'react';
import { Module } from '../types';
import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react';

interface SidebarProps {
  curriculum: Module[];
  selectedSubTopicId: string | null;
  onSelectSubTopic: (id: string) => void;
  progress: Record<string, { completed: boolean }>;
}

export default function Sidebar({ curriculum, selectedSubTopicId, onSelectSubTopic, progress }: SidebarProps) {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    '1': true // Open the first module by default
  });

  const toggleModule = (id: string) => {
    setOpenModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to check if all subtopics in a module are completed
  const isModuleCompleted = (mod: Module) => {
    if (mod.subtopics.length === 0) return false;
    return mod.subtopics.every(sub => progress[sub.id]?.completed);
  };

  return (
    <aside className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col h-full overflow-hidden">
      <h3 className="text-lg font-bold mb-4 flex items-center justify-between text-slate-100">
        Mapa do Conhecimento
        <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">28 Áreas</span>
      </h3>
      
      <nav className="flex-grow overflow-y-auto space-y-3 custom-scrollbar pr-2">
        {curriculum.map((mod) => (
          <div key={mod.id} className="border border-slate-800/50 rounded-xl overflow-hidden bg-slate-800/20">
            <button
              onClick={() => toggleModule(mod.id)}
              className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-800/50 transition-colors"
            >
              <span className={`text-sm font-bold ${isModuleCompleted(mod) ? 'text-cyan-400' : 'text-slate-200'}`}>
                {mod.title}
              </span>
              {openModules[mod.id] ? (
                <ChevronDown size={16} className="text-slate-400" />
              ) : (
                <ChevronRight size={16} className="text-slate-400" />
              )}
            </button>
            
            {openModules[mod.id] && (
              <div className="px-2 pb-2">
                {mod.subtopics.map((sub) => {
                  const isSelected = selectedSubTopicId === sub.id;
                  const isCompleted = progress[sub.id]?.completed;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => onSelectSubTopic(sub.id)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-xl mb-1 transition-colors flex items-center justify-between ${
                        isSelected 
                          ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-bold' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 font-medium'
                      }`}
                    >
                      <span className="truncate pr-2">{sub.title}</span>
                      {isCompleted && (
                        <span className={`text-[10px] ${isSelected ? 'text-cyan-400' : 'text-cyan-400'}`}>✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
