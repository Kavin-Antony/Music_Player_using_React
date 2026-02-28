import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative w-full h-[340px] px-10 flex flex-col justify-end pb-6 overflow-hidden bg-gradient-to-b from-purple-900/40 to-transparent dark:from-[#451228] dark:to-transparent">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent dark:from-[#121212] dark:via-[#121212]/80 dark:to-transparent z-0"></div>

            <div className="relative z-10 flex flex-row items-end justify-between w-full h-full pb-4">
                <div className="flex flex-col gap-2 transition-transform hover:scale-[1.02] origin-bottom-left cursor-default">
                    <h1 className="text-7xl font-extrabold text-gray-900 dark:text-white tracking-tighter m-0 drop-shadow-md">John</h1>
                    <p className="text-sm font-medium text-gray-600 dark:text-[#528CA3] m-0 pl-1">3,123,354 monthly listeners</p>
                </div>
                <button className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 cursor-pointer border-none shadow-lg shadow-purple-600/30 transition-transform hover:scale-105 hover:bg-purple-500 mr-4 mb-2">
                    <Play size={28} className="text-white fill-white ml-1" />
                </button>
            </div>
        </div>
    );
};

export default Hero;
