
import React from 'react';
import { Question } from '../types';
import { CheckCircleIcon, MessageSquareIcon } from './icons';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const bestAnswer = question.answers.find(a => a.isBestAnswer);

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{question.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {question.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
      <p className="text-gray-600 mb-6">{question.content}</p>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <MessageSquareIcon className="w-5 h-5" />
          <span>{question.answers.length}件の回答</span>
        </h4>
        <div className="space-y-4">
          {bestAnswer && (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl mt-1">{bestAnswer.author.avatar}</div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-green-800">{bestAnswer.author.name}</span>
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <CheckCircleIcon className="w-5 h-5" />
                      <span>ベストアンサー</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {bestAnswer.author.tags.map(tag => (
                       <span key={tag} className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="mt-2 text-gray-700">{bestAnswer.content}</p>
                </div>
              </div>
            </div>
          )}
           {question.answers.filter(a => !a.isBestAnswer).map(answer => (
            <div key={answer.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl mt-1">{answer.author.avatar}</div>
                <div>
                    <span className="font-bold text-gray-800">{answer.author.name}</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {answer.author.tags.map(tag => (
                            <span key={tag} className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <p className="mt-2 text-gray-700">{answer.content}</p>
                </div>
              </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
