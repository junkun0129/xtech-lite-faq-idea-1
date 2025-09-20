import React from 'react';
import { MapQuestion } from '../types';
import { MessageSquareIcon } from './icons';

interface QuestionMapCardProps {
  question: MapQuestion;
  onClick: (question: MapQuestion) => void;
  isHighlighted: boolean;
  isSearchActive: boolean;
}

const QuestionMapCard: React.FC<QuestionMapCardProps> = ({ question, onClick, isHighlighted, isSearchActive }) => {
  const randomDelay = React.useMemo(() => -(Math.random() * 6), []);

  const highlightClass = isSearchActive && isHighlighted 
    ? 'shadow-[0_0_12px_theme(colors.cyan.500/50)]'
    : '';

  const visibilityClass = !isHighlighted
    ? 'opacity-20 pointer-events-none'
    : 'opacity-100';

  return (
    <div
      className={`absolute bg-slate-800/60 backdrop-blur-lg border border-slate-600/50 rounded-lg p-4 shadow-md w-72 h-40 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:!scale-105 hover:!opacity-100 hover:shadow-cyan-500/20 hover:border-slate-500/80 animate-float ${visibilityClass} ${highlightClass}`}
      style={{ 
        left: question.position.x, 
        top: question.position.y,
        animationDelay: `${randomDelay}s`
      }}
    >
      <div>
        <h3 className="font-bold text-slate-200 line-clamp-2">{question.title}</h3>
        <div className="flex flex-wrap gap-1 mt-2">
          {question.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-slate-700 text-slate-300 text-xs font-medium px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-slate-400">
        <div className="flex items-center gap-1">
          <MessageSquareIcon className="w-4 h-4" />
          <span>{question.answers.length} Answers</span>
        </div>
        <button 
          className="text-cyan-400 font-semibold hover:underline hover:text-cyan-300"
          onClick={(e) => {
              e.stopPropagation();
              onClick(question);
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          View &rarr;
        </button>
      </div>
    </div>
  );
};

export default QuestionMapCard;