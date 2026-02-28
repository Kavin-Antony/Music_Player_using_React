import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';

const AudioPlayer = ({ currentSong, isPlaying, togglePlay, nextSong, prevSong }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', nextSong);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', nextSong);
      };
    }
  }, [nextSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Playback prevented", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
    setIsMuted(newVolume === "0");
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!currentSong) return null;

  return (
    <div className="w-full h-[90px] px-6 py-2 flex items-center justify-between text-gray-900 dark:text-white relative">
      <div className="flex items-center gap-4 w-1/4 min-w-[180px]">
        <img src={currentSong.cover} alt="Song Cover" className="w-14 h-14 rounded-md object-cover shadow-md flex-shrink-0" />
        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-sm font-semibold truncate hover:underline cursor-pointer" title={currentSong.title}>{currentSong.title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate hover:underline cursor-pointer">{currentSong.category}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 max-w-[722px] px-6 gap-2">
        <audio ref={audioRef} src={currentSong.file}></audio>

        <div className="flex items-center gap-6">
          <button className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2 flex items-center justify-center">
            <Shuffle size={18} />
          </button>
          <button onClick={prevSong} className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors p-2 flex items-center justify-center">
            <SkipBack size={22} />
          </button>
          <button onClick={togglePlay} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:scale-105 transition-transform">
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>
          <button onClick={nextSong} className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors p-2 flex items-center justify-center">
            <SkipForward size={22} />
          </button>
          <button className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2 flex items-center justify-center">
            <Repeat size={18} />
          </button>
        </div>

        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 min-w-[40px] text-right">{formatTime(currentTime)}</span>
          <div className="flex-1 h-3 flex items-center group">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-300 dark:bg-white/10 rounded-full appearance-none cursor-pointer outline-none overflow-hidden [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0 [&::-webkit-slider-thumb]:bg-transparent group-hover:[&::-webkit-slider-thumb]:w-3 group-hover:[&::-webkit-slider-thumb]:h-3 group-hover:[&::-webkit-slider-thumb]:bg-white group-hover:[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[-400px_0_0_400px_rgba(138,43,226,1)] transition-all"
            />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 min-w-[40px] text-left">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-end w-1/4 min-w-[150px]">
        <button onClick={toggleMute} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 flex items-center justify-center">
          {isMuted || volume === "0" ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <div className="w-24 h-3 flex items-center group">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-300 dark:bg-white/10 rounded-full appearance-none cursor-pointer outline-none overflow-hidden [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0 [&::-webkit-slider-thumb]:bg-transparent group-hover:[&::-webkit-slider-thumb]:w-3 group-hover:[&::-webkit-slider-thumb]:h-3 group-hover:[&::-webkit-slider-thumb]:bg-white group-hover:[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[-100px_0_0_100px_rgba(138,43,226,1)] transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
