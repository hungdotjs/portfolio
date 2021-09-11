import React, { useState, useEffect } from 'react';

import iconUp from '../../assets/svg/up.svg';

import './scroll-to-top.scss';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`nes-btn is-error scroll-to-top ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <img src={iconUp} alt="go-to-top" />
    </button>
  );
}
