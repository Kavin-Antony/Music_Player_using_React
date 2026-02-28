import { Bell, User, Sun, Moon } from "lucide-react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-end items-center px-10 py-8 z-[100] bg-transparent">
      <div className="flex-1"></div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 bg-transparent border-none cursor-pointer flex items-center justify-center transition-transform hover:scale-110 text-gray-800 dark:text-white"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="p-2 bg-transparent border-none cursor-pointer flex items-center justify-center transition-transform hover:scale-110 text-gray-800 dark:text-white">
          <Bell size={20} />
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-800 flex items-center justify-center overflow-hidden cursor-pointer shadow-md transition-transform hover:scale-110 hover:shadow-lg dark:shadow-black/50">
          <User size={24} className="text-gray-600 dark:text-white/80" />
        </div>
      </div>
    </div>
  );
};

export default Header;
