
import React from 'react';
import { Article } from '../types';
import { HedgehogIcon } from '../constants';
import { HeartIcon, BookOpenIcon } from './icons';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const isHighlighted = article.id === 1 || article.id === 8;
  return (
    <div className="flex-shrink-0 w-64">
      <div className="bg-white rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-transform duration-200">
        <div className="h-40 bg-gray-200 flex items-center justify-center">
          {article.imageUrl ? (
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          ) : (
            <HedgehogIcon className="w-24 h-24 text-gray-800" />
          )}
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-gray-800 truncate">{article.title}</h4>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
            <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
            <span>{article.author}</span>
            <span>公式</span>
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <div className={`flex items-center gap-1.5 ${isHighlighted ? 'text-red-500' : ''}`}>
              <HeartIcon className={`w-4 h-4 ${isHighlighted ? 'fill-current' : ''}`} />
              <span>{article.likes}</span>
            </div>
            <div className={`flex items-center gap-1.5 ${isHighlighted ? 'text-purple-500' : ''}`}>
              <BookOpenIcon className={`w-4 h-4`} />
              <span>{article.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
