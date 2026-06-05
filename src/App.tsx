import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { curriculum } from './data/curriculum';
import { UserProgress } from './types';

export default function App() {
  const [selectedSubTopicId, setSelectedSubTopicId] = useState<string>('1.1');
  const [progress, setProgress] = useState<Record<string, { completed: boolean }>>({});

  // Flatten the curriculum safely to find subtopics quickly
  const findSubTopic = (id: string) => {
    for (const mod of curriculum) {
      for (const sub of mod.subtopics) {
        if (sub.id === id) return sub;
      }
    }
    return null;
  };

  const handleCompleteTopic = () => {
    setProgress(prev => ({
      ...prev,
      [selectedSubTopicId]: { completed: true }
    }));
  };

  const currentSubTopic = findSubTopic(selectedSubTopicId);

  return (
    <div className="h-screen bg-slate-950 font-sans text-slate-50 antialiased selection:bg-cyan-500/30 p-6 flex flex-col overflow-hidden">
      <header className="flex justify-between items-center mb-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-900">Σ</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight uppercase">Cosmos<span className="text-cyan-400">Academy</span></h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="text-cyan-400 border-b-2 border-cyan-400 pb-1">Aprender</a>
          <a href="#" className="text-slate-400 hover:text-white">Laboratório</a>
          <a href="#" className="text-slate-400 hover:text-white">Desafios</a>
          <a href="#" className="text-slate-400 hover:text-white">Comunidade</a>
        </nav>
        <div className="hidden sm:flex items-center gap-4 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
          <div className="text-xs text-right">
            <p className="font-bold uppercase text-slate-400">Nível 14</p>
            <p className="text-cyan-400">Explorador Quântico</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500"></div>
        </div>
      </header>

      <main className="grid grid-cols-12 gap-6 flex-grow min-h-0">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 min-h-0">
          <Sidebar
            curriculum={curriculum}
            selectedSubTopicId={selectedSubTopicId}
            onSelectSubTopic={setSelectedSubTopicId}
            progress={progress}
          />
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 min-h-0">
          {currentSubTopic ? (
            <ContentArea
              key={currentSubTopic.id}
              subTopic={currentSubTopic}
              onComplete={handleCompleteTopic}
              isCompleted={!!progress[selectedSubTopicId]?.completed}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-500 bg-slate-900 border border-slate-800 rounded-3xl h-full">
              Tópico não encontrado
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
