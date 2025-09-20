
import React from 'react';
import { SearchIcon, BellIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-10 border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM4 8.5L12 13L20 8.5V15.5L12 20L4 15.5V8.5Z"/>
          </svg>
          <h1 className="text-xl font-bold tracking-wider text-gray-800">XTECH LITE</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-800">
            <SearchIcon className="w-6 h-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-800">
            <BellIcon className="w-6 h-6" />
          </button>
          <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden">
            <img src="https://picsum.photos/seed/avatar/40/40" alt="User Avatar" />
          </div>
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            投稿
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
