
import React from 'react';
// FIX: The `Badge` type should be imported from `../types`, not `../constants`.
import { RANKED_USERS } from '../constants';
import { Badge as BadgeType } from '../types';
import { XIcon } from './icons';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Badge: React.FC<{ badge: BadgeType }> = ({ badge }) => (
  <div className="relative group">
    <span className={`text-xl ${badge.color}`}>{badge.icon}</span>
    <div className="absolute bottom-full mb-2 w-max max-w-xs -translate-x-1/2 left-1/2 bg-gray-800 text-white text-xs rounded-md py-1.5 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-gray-700">
      <p className="font-bold">{badge.name}</p>
      <p>{badge.description}</p>
    </div>
  </div>
);


const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-40 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white/80 backdrop-blur-xl border border-gray-300/50 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl animate-fade-in" 
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in 0.3s ease-out forwards' }}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200/50 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800 tracking-wide">トップ貢献者</h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full text-gray-500 hover:bg-gray-200/50 transition-colors"
            aria-label="Close Leaderboard"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <ul className="space-y-3">
            {RANKED_USERS.map((user, index) => (
              <li 
                key={user.id} 
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-100/50 border border-gray-200/50 transition-all duration-200 hover:bg-gray-200/60 hover:border-cyan-500/50"
              >
                <div className={`font-bold text-3xl w-10 text-center flex-shrink-0 ${index < 3 ? 'text-yellow-400' : 'text-gray-400'}`}>
                  {index + 1}
                </div>
                <div className="text-4xl flex-shrink-0">{user.avatar}</div>
                <div className="flex-grow">
                  <p className="font-bold text-lg text-gray-800">{user.name}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                    <span><strong className="text-gray-700">{user.bestAnswers}</strong> ベストアンサー</span>
                    <span><strong className="text-gray-700">{user.solved}</strong> 解決済み</span>
                    <span><strong className="text-gray-700">{user.answers}</strong> 回答</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {user.badges.map(badge => (
                    <Badge key={badge.id} badge={badge} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LeaderboardModal;