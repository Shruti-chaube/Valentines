import { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ isOpen, image, caption, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, hasNext, hasPrev, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="lightbox show" onClick={onClose}>
      <span className="lightbox-close" onClick={onClose}>&times;</span>
      <img 
        className="lightbox-image" 
        src={image} 
        alt={caption}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="lightbox-caption">{caption}</div>
      {hasPrev && (
        <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
          ‹
        </button>
      )}
      {hasNext && (
        <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
          ›
        </button>
      )}
    </div>
  );
};

export default Lightbox;
