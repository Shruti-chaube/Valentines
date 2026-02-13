import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import './LoveQuote.css';

const loveQuotes = [
  "Sitto, you are my sunshine ☀️",
  "Every moment with you is magical ✨",
  "Sitto, you make my heart skip a beat 💓",
  "I fall for you more every day, Sitto 💕",
  "You are my favorite person, Sitto 🥰",
  "My heart belongs to you, Sitto ❤️",
  "Sitto, you are my everything 💖",
  "Forever and always, Sitto 💘",
  "Sitto, you light up my world 🌟",
  "With you, Sitto, every day is special 💝",
  "You spike my heart, Sitto 🏐💕",
  "You're a perfect match, Sitto 🏐",
  "You serve love like no one else, Sitto 🏐💖"
];

const LoveQuote = forwardRef((props, ref) => {
  const [quote, setQuote] = useState('');
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showMessage: (message) => {
      setQuote(message);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }));

  useEffect(() => {
    const showRandomQuote = () => {
      const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
      setQuote(randomQuote);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    };

    // Show first quote after 2 seconds
    const firstTimer = setTimeout(showRandomQuote, 2000);
    
    // Show quotes periodically
    const interval = setInterval(showRandomQuote, 8000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  if (!quote) return null;

  return (
    <div className={`love-quote ${show ? 'show' : ''}`}>
      {quote}
    </div>
  );
});

LoveQuote.displayName = 'LoveQuote';

export default LoveQuote;
