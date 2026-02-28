import React from 'react';
import { Settings } from 'lucide-react';

const Preferences = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] p-10">
            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl p-10 max-w-2xl w-full border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center text-center">
                <Settings size={64} className="text-purple-600 dark:text-purple-400 mb-6" />
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Preferences</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">Customize your listening experience, audio quality, and display settings.</p>
                <div className="w-full max-w-md flex flex-col gap-4 text-left">
                    <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-white/5 rounded-xl">
                        <span className="text-gray-800 dark:text-white font-medium">Audio Quality</span>
                        <select className="bg-transparent text-gray-900 dark:text-white outline-none border border-gray-300 dark:border-gray-600 rounded px-2 py-1"><option>High</option><option>Standard</option><option>Low</option></select>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-white/5 rounded-xl">
                        <span className="text-gray-800 dark:text-white font-medium">Dark Mode Default</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 accent-purple-600" />
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-white/5 rounded-xl">
                        <span className="text-gray-800 dark:text-white font-medium">Data Saver</span>
                        <input type="checkbox" className="w-5 h-5 accent-purple-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preferences;
