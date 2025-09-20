
import React from 'react';
import { HomeIcon, AnnouncementIcon, UserGroupIcon } from './icons';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <a href="#" className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 ${active ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`}>
    {icon}
    <span>{label}</span>
  </a>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 px-4">{children}</h3>
);

const CategoryLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="block px-4 py-1.5 text-gray-600 hover:text-gray-900 hover:font-semibold">{children}</a>
);

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen sticky top-0 bg-white border-r border-gray-200 p-4 flex-shrink-0">
      <nav className="flex flex-col gap-1">
        <NavItem icon={<HomeIcon className="w-5 h-5" />} label="ホーム" active />
        <NavItem icon={<AnnouncementIcon className="w-5 h-5" />} label="大事なお知らせ" />
        <NavItem icon={<UserGroupIcon className="w-5 h-5" />} label="フォロー中" />
      </nav>

      <div>
        <SectionTitle>ランキング</SectionTitle>
        <CategoryLink>いいね！</CategoryLink>
        <CategoryLink>コメント</CategoryLink>
        <CategoryLink>閲覧数順</CategoryLink>
      </div>

      <div>
        <SectionTitle>プログラミング言語</SectionTitle>
        <CategoryLink>JavaScript</CategoryLink>
        <CategoryLink>Python</CategoryLink>
        <CategoryLink>Ruby</CategoryLink>
        <CategoryLink>Java</CategoryLink>
        <CategoryLink>Go</CategoryLink>
        <CategoryLink>C#</CategoryLink>
        <CategoryLink>C/C++</CategoryLink>
        <CategoryLink>PHP</CategoryLink>
        <CategoryLink>TypeScript</CategoryLink>
        <CategoryLink>Swift</CategoryLink>
        <CategoryLink>Kotlin</CategoryLink>
      </div>
    </aside>
  );
};

export default Sidebar;
