import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingHearts from '../components/FloatingHearts';
import LoveQuote from '../components/LoveQuote';
import MusicControl from '../components/MusicControl';
import SuccessPopup from '../components/SuccessPopup';
import Loader from '../components/Loader';
import './ProposalPage.css';

const ProposalPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const noBtnRef = useRef(null);
  const loveQuoteRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if Sitto has already said yes
    const saidYes = localStorage.getItem('sittoSaidYes');
    if (saidYes === 'true') {
      setHasSaidYes(true);
    }
  }, []);

  const noMessages = [
    "Are you sure, Sitto? 🥺",
    "Think again, Sitto 😌",
    "Don't break my heart, Sitto 💔",
    "Pleaseeee Sitto 😭",
    "Really, Sitto? 😢",
    "Give it another thought, Sitto 💭",
    "I'll be so sad, Sitto 😞",
    "Pretty please, Sitto? 🥺",
    "You're breaking my heart, Sitto 💔",
    "Just say yes, Sitto! 💕"
  ];

  const handleYesClick = () => {
    // Store that Sitto said yes
    localStorage.setItem('sittoSaidYes', 'true');
    setShowPopup(true);
    setTimeout(() => {
      navigate('/memories');
    }, 2500);
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    const currentCount = noClickCount;
    setNoClickCount(prev => prev + 1);
    moveNoButton();
    
    // Show message via LoveQuote component
    if (loveQuoteRef.current) {
      const message = noMessages[currentCount % noMessages.length];
      loveQuoteRef.current.showMessage(message);
    }
  };

  const moveNoButton = () => {
    if (!noBtnRef.current) return;
    
    const container = noBtnRef.current.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtnRef.current.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtnRef.current.style.position = 'absolute';
    noBtnRef.current.style.left = randomX + 'px';
    noBtnRef.current.style.top = randomY + 'px';
    noBtnRef.current.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
      if (noBtnRef.current) {
        noBtnRef.current.style.transition = '';
      }
    }, 300);
  };

  const handleNoMouseEnter = () => {
    moveNoButton();
  };

  const handleNoTouchStart = (e) => {
    e.preventDefault();
    moveNoButton();
    handleNoClick(e);
  };

  return (
    <div className="proposal-page">
      <Loader />
      <FloatingHearts />
      <LoveQuote ref={loveQuoteRef} />
      
      <div className="container">
        <div className="proposal-card">
          <div className="card-content">
            <div className="neelu-image-container">
              <img 
                src="/images/neelu.jpeg" 
                alt="Sitto" 
                className="neelu-image"
              />
            </div>
            {hasSaidYes ? (
              <>
                <h1 className="main-heading">You Already Said YES! 💕</h1>
                <p className="subtitle">I'm so happy you're my Valentine, Sitto! 🏐💖</p>
                <p className="subtitle" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
                  Let's relive our beautiful memories together 💫
                </p>
                <div className="buttons-container" style={{ marginTop: '2rem' }}>
                  <button className="btn btn-yes" onClick={() => navigate('/memories')}>
                    <span>💖</span> View Our Memories
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="main-heading">Sitto, will you be my Valentine? 💘</h1>
                <p className="subtitle">Sitto, you spike my heart every day 🏐❤️</p>
                
                <div className="buttons-container">
                  <button className="btn btn-yes" onClick={handleYesClick}>
                    <span>💖</span> YES
                  </button>
                  <button 
                    className="btn btn-no" 
                    ref={noBtnRef}
                    onClick={handleNoClick}
                    onMouseEnter={handleNoMouseEnter}
                    onTouchStart={handleNoTouchStart}
                  >
                    <span>😏</span> NO
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <MusicControl />
      <SuccessPopup show={showPopup} />
    </div>
  );
};

export default ProposalPage;
