
import React from 'react';
import { SearchIcon, BellIcon } from './icons';
import { HedgehogIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-[#fff8f0]/80 backdrop-blur-lg sticky top-0 z-10 border-b border-[#e6d8c9]">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full p-1">
             <HedgehogIcon className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-wider text-gray-700" style={{fontFamily: "'M PLUS Rounded 1c', sans-serif"}}>CodeCritters</h1>
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
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-[#e6d8c9] border border-transparent rounded-lg hover:bg-[#d9c8b8]">
            投稿
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;