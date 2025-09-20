
import React from 'react';
import { Question } from '../types';
import QuestionCard from './QuestionCard';
import { XIcon } from './icons';

interface QuestionDetailSidebarProps {
  question: Question | null;
  onClose: () => void;
}

const QuestionDetailSidebar: React.FC<QuestionDetailSidebarProps> = ({ question, onClose }) => {
  return (
    <>
      <div 
        className={`fixed top-0 right-0 h-full w-[480px] max-w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-30 ${question ? 'translate-x-0' : 'translate-x-full'}`}
        onMouseDown={(e) => e.stopPropagation()} // Prevent map pan
      >
        {question && (
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-lg font-bold text-gray-800">Question Details</h2>
              <button 
                onClick={onClose} 
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                aria-label="Close details"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <QuestionCard question={question} />
            </div>
          </div>
        )}
      </div>
      {/* Overlay */}
      {question && (
        <div 
          className="fixed inset-0 bg-black/30 z-20 cursor-default"
          onClick={onClose}
          onMouseDown={(e) => e.stopPropagation()}
        ></div>
      )}
    </>
  );
};

export default QuestionDetailSidebar;
