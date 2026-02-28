import React from 'react';
import { Headphones } from 'lucide-react';

const AdFreeListenting = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] p-10">
            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl p-10 max-w-lg w-full border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/40 mb-6">
                    <Headphones size={64} className="text-purple-600 dark:text-purple-400 drop-shadow-lg" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Unlock Premium</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">Get ad-free listening, offline downloads, and higher quality audio.</p>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-500/30 transition-transform transform hover:scale-[1.05]">Upgrade to Premium</button>
            </div>
        </div>
    );
};

export default AdFreeListenting;
