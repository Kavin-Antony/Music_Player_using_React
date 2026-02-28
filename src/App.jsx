import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioPlayer from './components/AudioPlayer';
import SongList from './components/SongList';
import Preferences from './pages/Preferences';
import AdFree from './pages/AdFree';
import SignIn from './pages/SignIn';
import { songsData } from './data/songsData';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handlePlaySong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songsData.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songsData.length) % songsData.length);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero />
            <div className="pb-[100px]">
              <SongList
                songs={songsData}
                currentSongIndex={currentSongIndex}
                isPlaying={isPlaying}
                onPlaySong={handlePlaySong}
              />
            </div>
          </>
        );
      case 'preferences':
      case 'library':
        return <Preferences />;
      case 'ad-free':
      case 'search':
        return <AdFree />;
      case 'signin':
        return <SignIn />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden text-gray-900 bg-white dark:bg-[#121212] dark:text-white transition-colors duration-300">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col relative overflow-y-auto overflow-x-hidden">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <div className="flex-1 flex flex-col pt-[80px]">
          {renderContent()}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-[#181818] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <AudioPlayer
          currentSong={songsData[currentSongIndex]}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          nextSong={nextSong}
          prevSong={prevSong}
        />
      </div>
    </div>
  );
};

export default App;
