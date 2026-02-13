import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`}>
      <div className="heart-loader">💖</div>
      <p>Loading love...</p>
    </div>
  );
};

export default Loader;
