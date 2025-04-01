import React, { useState, useEffect } from 'react';
import './ScrollUp.scss'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="icon-angle-up"></i>
    </button>
  );
};

export default ScrollUp;
