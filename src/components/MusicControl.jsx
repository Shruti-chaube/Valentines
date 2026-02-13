import { useState, useRef, useEffect } from 'react';
import './MusicControl.css';

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set volume to 40% for background music
      
      // Check if music was playing before and restore state
      const wasPlaying = sessionStorage.getItem('musicPlaying') === 'true';
      const savedTime = parseFloat(sessionStorage.getItem('musicTime') || '20');
      
      // Wait for audio to load, then set starting point
      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          if (wasPlaying) {
            audioRef.current.currentTime = savedTime;
            setIsPlaying(true);
            // Try to auto-play (may be blocked by browser)
            audioRef.current.play().catch(err => {
              console.log('Auto-play prevented:', err);
              setIsPlaying(false);
            });
          } else {
            audioRef.current.currentTime = 20;
          }
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
        if (wasPlaying) {
          audioRef.current.currentTime = savedTime;
          setIsPlaying(true);
          audioRef.current.play().catch(err => {
            console.log('Auto-play prevented:', err);
            setIsPlaying(false);
          });
        } else {
          audioRef.current.currentTime = 20;
        }
      }
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      sessionStorage.setItem('musicPlaying', 'false');
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
      sessionStorage.setItem('musicPlaying', 'true');
    }
  };

  // Save music time periodically
  useEffect(() => {
    if (!audioRef.current) return;

    const updateMusicTime = () => {
      if (audioRef.current && isPlaying) {
        sessionStorage.setItem('musicTime', audioRef.current.currentTime.toString());
      }
    };

    const interval = setInterval(updateMusicTime, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

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
