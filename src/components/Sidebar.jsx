import React from "react";
import { Home, Search, Library, PlusSquare, Heart, Settings, LogOut } from "lucide-react";

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="w-[240px] h-[calc(100vh-90px)] bg-gray-50 dark:bg-[#181818] border-r border-gray-200 dark:border-white/5 flex flex-col py-8 z-10 transition-colors duration-300">
      <div className="flex items-center mb-10 cursor-pointer pl-6" onClick={() => setActivePage('home')}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Audio X</h1>
      </div>

      <div className="flex flex-col gap-1 mb-8">
        <button
          className={`flex flex-row flex-nowrap items-center justify-start gap-4 w-full px-6 py-3 transition-colors duration-200 border-l-4 text-left cursor-pointer ${activePage === 'home'
              ? 'bg-purple-100 dark:bg-white/5 text-purple-700 dark:text-white border-purple-600'
              : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
          onClick={() => setActivePage('home')}
        >
          <Home size={20} />
          <span className="text-sm font-medium">Home</span>
        </button>
        <button
          className={`flex flex-row flex-nowrap items-center justify-start gap-4 w-full px-6 py-3 transition-colors duration-200 border-l-4 text-left cursor-pointer ${activePage === 'search'
              ? 'bg-purple-100 dark:bg-white/5 text-purple-700 dark:text-white border-purple-600'
              : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
          onClick={() => setActivePage('search')}
        >
          <Search size={20} />
          <span className="text-sm font-medium">Search</span>
        </button>
        <button
          className={`flex flex-row flex-nowrap items-center justify-start gap-4 w-full px-6 py-3 transition-colors duration-200 border-l-4 text-left cursor-pointer ${activePage === 'library'
              ? 'bg-purple-100 dark:bg-white/5 text-purple-700 dark:text-white border-purple-600'
              : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
          onClick={() => setActivePage('library')}
        >
          <Library size={20} />
          <span className="text-sm font-medium">My library</span>
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <button className="flex flex-row flex-nowrap items-center justify-start gap-4 w-full px-6 py-3 transition-colors duration-200 border-l-4 border-transparent text-left cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
          <PlusSquare size={20} />
          <span className="text-sm font-medium">New playlist</span>
        </button>
        <button className="flex flex-row flex-nowrap items-center justify-start gap-4 w-full px-6 py-3 transition-colors duration-200 border-l-4 border-transparent text-left cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
          <Heart size={20} />
          <span className="text-sm font-medium">Liked songs</span>
        </button>
      </div>

      <div className="flex flex-col gap-1 mt-auto">
        <button className="flex flex-row flex-nowrap items-center justify-start gap-4 w-full px-6 py-3 transition-colors duration-200 border-l-4 border-transparent text-left cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
          <Settings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className="flex flex-row flex-nowrap items-center justify-start gap-4 w-full px-6 py-3 transition-colors duration-200 border-l-4 border-transparent text-left cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
          <LogOut size={20} />
          <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
