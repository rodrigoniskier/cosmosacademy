import React, { useState, useEffect } from 'react';
import { SubTopic } from '../types';
import ExerciseWidget from './ExerciseWidget';
import ReactMarkdown from 'react-markdown';
import { CheckCircle } from 'lucide-react';

interface ContentAreaProps {
  subTopic: SubTopic;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function ContentArea({ subTopic, onComplete, isCompleted }: ContentAreaProps) {
  // Track which exercises are successfully completed
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  // Reset when subtopic changes
  useEffect(() => {
    setCompletedExercises(new Set());
  }, [subTopic.id]);

  const handleExerciseSuccess = (exerciseId: string) => {
    setCompletedExercises(prev => {
      const next = new Set(prev);
      next.add(exerciseId);
      
      // If all exercises are now completed, trigger the global completion
      if (next.size === subTopic.exercises.length) {
        onComplete();
      }
      return next;
    });
  };

  // If there are no exercises, we might just want to show a "Mark as Read" button
  const hasExercises = subTopic.exercises && subTopic.exercises.length > 0;

  return (
    <main className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10 flex items-start justify-between">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
              {subTopic.title}
            </h2>
            {isCompleted && (
              <div className="px-3 py-1 flex items-center gap-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full text-xs font-bold uppercase tracking-widest shrink-0">
                <CheckCircle size={16} />
                <span>Concluído</span>
              </div>
            )}
          </header>

          <div className="prose prose-invert prose-slate prose-lg max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-strong:text-cyan-300 prose-a:text-cyan-400">
            <ReactMarkdown>{subTopic.content}</ReactMarkdown>
          </div>

          {hasExercises ? (
            <div className="mt-16 border-t border-slate-800 pt-10">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Exercícios Práticos</h3>
              <p className="text-slate-400 mb-8 max-w-lg">
                Teste seus conhecimentos resolvendo as questões abaixo.
              </p>
              
              {subTopic.exercises.map((ex, idx) => (
                <div key={ex.id} className="mb-8">
                  <span className="text-[10px] font-bold text-cyan-400 mb-2 block uppercase tracking-widest">
                    Questão {idx + 1}
                  </span>
                <ExerciseWidget 
                  exercise={ex} 
                  onSuccess={() => handleExerciseSuccess(ex.id)} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 border-t border-slate-800 pt-10">
            <p className="text-slate-400 mb-6">
              Este tópico ainda não possui exercícios interativos ou está em desenvolvimento.
            </p>
            {!isCompleted && (
              <button
                onClick={onComplete}
                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg font-bold transition-colors"
              >
                Marcar como Lido
              </button>
            )}
          </div>
        )}
      </div>
      </div>
    </main>
  );
}
