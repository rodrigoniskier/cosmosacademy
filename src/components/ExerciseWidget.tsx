import React, { useState } from 'react';
import { Exercise } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

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
    if (selectedOption === exercise.correctAnswerIndex) {
      onSuccess();
    }
  };

  const reset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 my-6">
      <h3 className="text-lg font-bold text-slate-100 mb-4">{exercise.question}</h3>
      
      <div className="space-y-3">
        {exercise.options.map((option, index) => {
          let btnClass = "w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ";
          
          if (!hasSubmitted) {
            btnClass += selectedOption === index 
              ? "border-cyan-500 bg-cyan-500/10 text-cyan-200 font-medium" 
              : "border-slate-800 bg-slate-900 hover:border-slate-700 text-slate-300";
          } else {
            if (index === exercise.correctAnswerIndex) {
              btnClass += "border-cyan-500 bg-cyan-500/10 text-cyan-200 font-bold";
            } else if (selectedOption === index) {
              btnClass += "border-rose-500 bg-rose-500/10 text-rose-200 font-medium";
            } else {
              btnClass += "border-slate-800 bg-slate-900/50 text-slate-500 opacity-50";
            }
          }

          return (
            <button
              key={index}
              disabled={hasSubmitted}
              onClick={() => setSelectedOption(index)}
              className={btnClass}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {hasSubmitted && index === exercise.correctAnswerIndex && (
                  <CheckCircle2 size={18} className="text-cyan-500" />
                )}
                {hasSubmitted && selectedOption === index && index !== exercise.correctAnswerIndex && (
                  <XCircle size={18} className="text-rose-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 items-center">
        {!hasSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500 text-slate-900 rounded-lg font-bold transition-colors"
          >
            Verificar Resposta
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-lg font-bold transition-colors"
          >
            Tentar Novamente
          </button>
        )}
      </div>

      {hasSubmitted && (
        <div className={`mt-6 p-4 rounded-xl ${isCorrect ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-rose-500/10 border border-rose-500/30'}`}>
          <p className={`font-bold mb-1 ${isCorrect ? 'text-cyan-400' : 'text-rose-400'}`}>
            {isCorrect ? 'Correto!' : 'Incorreto.'}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
