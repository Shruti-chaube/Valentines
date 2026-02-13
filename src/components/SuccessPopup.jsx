import { useEffect } from 'react';
import './SuccessPopup.css';

const SuccessPopup = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      createConfetti();
    }
  }, [show]);

  const createConfetti = () => {
    const confettiContainer = document.getElementById('confettiContainer');
    if (!confettiContainer) return;

    const colors = ['#ff6b9d', '#ffb3d1', '#ff4081', '#ff1744', '#ffcccc'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.animationDuration = (Math.random() * 1 + 2) + 's';
      confettiContainer.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };

  if (!show) return null;

  return (
    <div className="popup show">
      <div className="popup-content">
        <div className="popup-heart">💕</div>
        <h2>Yayyyy Sitto!!!</h2>
        <p>You just made me the happiest person 💕🥰</p>
        <div className="confetti-container" id="confettiContainer"></div>
      </div>
    </div>
  );
};

export default SuccessPopup;
