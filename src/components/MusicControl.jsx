import { useState, useRef, useEffect } from 'react';
import './MusicControl.css';

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set volume to 40% for background music
      
      // Wait for audio to load, then set starting point to 20 seconds
      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 20;
        }
      };
      
      // Handle loop - restart from 20 seconds when audio ends
      const handleEnded = () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 20;
          if (isPlaying) {
            audioRef.current.play();
          }
        }
      };
      
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('ended', handleEnded);
      
      // If already loaded, set time immediately
      if (audioRef.current.readyState >= 1) {
        audioRef.current.currentTime = 20;
      }
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Ensure we start from 20 seconds when playing
      if (audioRef.current.currentTime < 20) {
        audioRef.current.currentTime = 20;
      }
      audioRef.current.play().catch(err => {
        console.log('Audio play failed:', err);
        alert('Click anywhere on the page first to enable audio!');
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="music-control">
        <button className="music-btn" onClick={toggleMusic} title="Toggle background music">
          <span>{isPlaying ? '🔊' : '🔇'}</span>
        </button>
      </div>
      <audio ref={audioRef}>
        {/* Romantic song: Jab Tak from MS Dhoni movie - starts from 20 seconds */}
        <source src="/music/Jab Tak M.s. Dhoni The Untold Story 128 Kbps.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicControl;
