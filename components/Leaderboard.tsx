
import React from 'react';
import { RANKED_USERS } from '../constants';

const Leaderboard: React.FC = () => {
  return (
    <div className="w-full lg:w-80 flex-shrink-0">
        <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-24">
            <h3 className="font-bold text-lg mb-4 text-gray-800">回答者ランキング</h3>
            <ul className="space-y-3">
                {RANKED_USERS.map((user, index) => (
                    <li key={user.id} className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100">
                        <span className={`font-bold text-lg w-6 text-center ${index < 3 ? 'text-yellow-500' : 'text-gray-400'}`}>{index + 1}</span>
                        <div className="text-3xl">{user.avatar}</div>
                        <div>
                            <p className="font-semibold text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">
                                ベストアンサー: {user.bestAnswers} | 解決済み: {user.solved}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Leaderboard;
