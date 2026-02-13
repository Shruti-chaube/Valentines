import { useState } from 'react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/FloatingHearts';
import Lightbox from '../components/Lightbox';
import './GalleryPage.css';

const GalleryPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      src: '/images/WhatsApp Image 2026-02-10 at 1.22.03 PM.jpeg',
      caption: 'Our Beautiful Traditional Moment, Sitto 🎭',
      alt: 'Sitto and partner in traditional Indian attire'
    },
    {
      src: '/images/WhatsApp Image 2026-02-10 at 1.22.03 PM (1).jpeg',
      caption: 'Beautiful Night Together, Sitto 🌙',
      alt: 'Sitto and partner at night in front of building'
    },
    {
      src: '/images/WhatsApp Image 2026-02-10 at 1.22.03 PM (2).jpeg',
      caption: 'Cozy Evening Together, Sitto 🍻',
      alt: 'Sitto and partner at bar and kitchen'
    },
    {
      src: '/images/WhatsApp Image 2026-02-10 at 1.22.03 PM (3).jpeg',
      caption: 'That Cute Mirror Selfie, Sitto 📸',
      alt: 'Mirror selfie of Sitto and partner'
    },
    {
      src: '/images/WhatsApp Image 2026-02-10 at 1.22.03 PM (4).jpeg',
      caption: 'Our Loving Embrace, Sitto 💕',
      alt: 'Sitto and partner embracing at night'
    },
    {
      src: '/images/WhatsApp Image 2026-02-10 at 1.22.03 PM (5).jpeg',
      caption: 'Perfect Day Together, Sitto ☀️',
      alt: 'Sitto and partner outdoors'
    },
    {
      src: '/images/WhatsApp Image 2026-02-10 at 1.24.27 PM.jpeg',
      caption: 'Adventure Together, Sitto 🍃',
      alt: 'Sitto and partner adventure'
    },
    {
      src: '/images/WhatsApp Image 2026-02-14 at 12.07.58 AM.jpeg',
      caption: 'Special Moments with You, Sitto 💖',
      alt: 'Special moment with Sitto'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="memories-page">
      <FloatingHearts />
      
      <div className="memories-container">
        <header className="memories-header">
          <h1 className="memories-title">Our Beautiful Memories, Sitto ❤️</h1>
          <p className="memories-subtitle">Every moment with you is a treasure 💫</p>
        </header>

        <div className="gallery">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x600/ffb3d1/ffffff?text=Sitto+%26+Memories';
                }}
              />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>

        <div className="back-container">
          <Link to="/" className="back-btn">← Back to Proposal</Link>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        image={galleryItems[currentIndex]?.src}
        caption={galleryItems[currentIndex]?.caption}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
        hasNext={galleryItems.length > 1}
        hasPrev={galleryItems.length > 1}
      />
    </div>
  );
};

export default GalleryPage;
