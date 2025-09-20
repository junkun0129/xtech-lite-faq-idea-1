
import React from 'react';
import { Article } from '../types';
import ArticleCard from './ArticleCard';

interface ArticleSectionProps {
  title: string;
  articles: Article[];
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, articles }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title} &gt;</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
