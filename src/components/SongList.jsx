import React from 'react';
import { Heart } from 'lucide-react';

const SongList = ({ songs, currentSongIndex, isPlaying, onPlaySong }) => {
    if (songs.length === 0) {
        return (
            <div className="flex items-center justify-center p-10 text-gray-500 dark:text-gray-400">
                <p>No songs found for this category.</p>
            </div>
        );
    }

    // Split into mock categories to match the template look ("Top Hits", "Featuring")
    const topHits = songs.slice(0, 2);
    const featuring = songs.slice(2);

    const renderSection = (title, songList, startIndex) => (
        <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h2>
            <div className="flex flex-col gap-2">
                {songList.map((song, localIndex) => {
                    const absoluteIndex = startIndex + localIndex;
                    const isActive = currentSongIndex === absoluteIndex;
                    return (
                        <div
                            key={song.id}
                            className={`flex flex-row flex-nowrap items-center justify-between gap-4 p-3 rounded-xl cursor-pointer transition-colors duration-200 group ${isActive
                                    ? 'bg-purple-100 dark:bg-purple-900/40'
                                    : 'hover:bg-gray-100 dark:hover:bg-white/5'
                                }`}
                            onClick={() => onPlaySong(absoluteIndex)}
                        >
                            <img
                                src={song.cover}
                                alt={song.title}
                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-sm"
                            />

                            <div className="flex flex-col flex-1 gap-1 overflow-hidden pr-4">
                                <h3 className={`text-base font-semibold truncate ${isActive ? 'text-purple-700 dark:text-purple-400' : 'text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors'}`}>
                                    {song.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {Math.floor(Math.random() * 2000000 + 500000).toLocaleString()} plays
                                </p>
                            </div>

                            <button
                                className="p-2 border-none bg-transparent flex items-center justify-center transition-transform hover:scale-110 flex-shrink-0 cursor-pointer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Heart
                                    size={20}
                                    fill={isActive ? "currentColor" : "none"}
                                    className={isActive ? "text-purple-600 dark:text-purple-400" : "text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"}
                                />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="flex flex-col px-10 gap-6">
            {topHits.length > 0 && renderSection("Top Hits", topHits, 0)}
            {featuring.length > 0 && renderSection("Featuring", featuring, topHits.length)}
        </div>
    );
};

export default SongList;
