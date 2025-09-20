
import React from 'react';
import { Link } from 'react-router-dom';
import { LightbulbIcon } from './icons';

const FaqCtaCard: React.FC = () => {
  return (
    <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-700 mb-4">技術FAQ &gt;</h2>
        <Link to="/faq" className="block">
            <div className="relative bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl p-8 text-white overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative z-10">
                    <LightbulbIcon className="w-12 h-12 mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">技術的な質問がありますか？</h3>
                    <p className="text-teal-50 mb-6">「こんな質問していいのかな？」と心配は不要です。コミュニティがあなたの疑問を解決します。</p>
                    <div className="inline-block bg-white text-teal-600 font-bold py-2 px-6 rounded-lg group-hover:bg-yellow-300 group-hover:text-gray-900 transition-colors duration-300">
                        質問広場へ
                    </div>
                </div>
                <div className="absolute -bottom-8 -right-8 text-teal-300 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <LightbulbIcon className="w-48 h-48" />
                </div>
            </div>
        </Link>
    </section>
  );
};

export default FaqCtaCard;