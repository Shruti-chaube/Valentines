import { useEffect } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  useEffect(() => {
    const heartsContainer = document.getElementById('heartsContainer');
    if (!heartsContainer) return;

    const hearts = ['💖', '💕', '💗', '💓', '💝', '❤️', '💞', '💘'];
    
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
      heart.style.animationDelay = Math.random() * 5 + 's';
      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 20000);
    }

    // Create hearts periodically
    const interval = setInterval(createHeart, 2000);
    
    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 400);
    }

    return () => clearInterval(interval);
  }, []);

  return <div className="hearts-container" id="heartsContainer"></div>;
};

export default FloatingHearts;
