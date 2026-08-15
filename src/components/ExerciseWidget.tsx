import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { Exercise } from '../types';
import Markdown from './Markdown';

interface ExerciseWidgetProps {
  exercise: Exercise;
  onSuccess: () => void;
}

export default function ExerciseWidget({ exercise, onSuccess }: ExerciseWidgetProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isCorrect = selectedOption === exercise.correctAnswerIndex;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setHasSubmitted(true);
    if (selectedOption === exercise.correctAnswerIndex) onSuccess();
  };

  const reset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  return (
    <div className="my-6 rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <div className="prose prose-invert prose-slate mb-4 max-w-none text-lg font-bold prose-p:my-0 prose-p:text-slate-100">
        <Markdown>{exercise.question}</Markdown>
      </div>

      <div className="space-y-3">
        {exercise.options.map((option, index) => {
          let btnClass = 'w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ';

          if (!hasSubmitted) {
            btnClass +=
              selectedOption === index
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-200 font-medium'
                : 'border-slate-800 bg-slate-900 hover:border-slate-700 text-slate-300';
          } else if (index === exercise.correctAnswerIndex) {
            btnClass += 'border-cyan-500 bg-cyan-500/10 text-cyan-200 font-bold';
          } else if (selectedOption === index) {
            btnClass += 'border-rose-500 bg-rose-500/10 text-rose-200 font-medium';
          } else {
            btnClass += 'border-slate-800 bg-slate-900/50 text-slate-500 opacity-50';
          }

          return (
            <button
              key={index}
              type="button"
              disabled={hasSubmitted}
              aria-pressed={selectedOption === index}
              onClick={() => setSelectedOption(index)}
              className={btnClass}
            >
              <div className="flex items-center justify-between gap-3">
                <span>{option}</span>
                {hasSubmitted && index === exercise.correctAnswerIndex && (
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-500" aria-hidden="true" />
                )}
                {hasSubmitted && selectedOption === index && index !== exercise.correctAnswerIndex && (
                  <XCircle size={18} className="shrink-0 text-rose-500" aria-hidden="true" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {!hasSubmitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="rounded-lg bg-cyan-500 px-6 py-2.5 font-bold text-slate-900 transition-colors hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500"
          >
            Verificar resposta
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-2.5 font-bold text-slate-100 transition-colors hover:bg-slate-700"
          >
            Tentar novamente
          </button>
        )}
      </div>

      {hasSubmitted && (
        <div
          role="status"
          className={`mt-6 rounded-xl p-4 ${
            isCorrect
              ? 'border border-cyan-500/30 bg-cyan-500/10'
              : 'border border-rose-500/30 bg-rose-500/10'
          }`}
        >
          <p className={`mb-1 font-bold ${isCorrect ? 'text-cyan-400' : 'text-rose-400'}`}>
            {isCorrect ? 'Correto.' : 'Ainda não.'}
          </p>
          <div className="prose prose-invert prose-slate max-w-none text-sm prose-p:my-0 prose-p:leading-relaxed prose-p:text-slate-300">
            <Markdown>{exercise.explanation}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
