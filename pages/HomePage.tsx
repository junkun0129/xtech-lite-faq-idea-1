
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ArticleSection from '../components/ArticleSection';
import FaqCtaCard from '../components/FaqCtaCard';
import { RECENT_ARTICLES, MY_ARTICLES, DRAFTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <ArticleSection title="最近投稿" articles={RECENT_ARTICLES} />
          <FaqCtaCard />
          <ArticleSection title="自分の投稿" articles={MY_ARTICLES} />
          <ArticleSection title="下書き" articles={DRAFTS} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
