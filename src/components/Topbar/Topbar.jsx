import React, { useState, useEffect, useRef } from 'react';

import './topbar.scss';

const data = [
  { id: 'intro', name: 'Intro' },
  { id: 'about', name: 'About' },
  { id: 'works', name: 'Works' },
  { id: 'contact', name: 'Contact' },
];

function TopBar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const topbar = useRef();

  const toggleTopbar = () => {
    const h = window.innerHeight;

    if (window.pageYOffset > h) {
      setIsFixed(true);
      return;
    }

    setIsFixed(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleTopbar);

    return () => {
      window.removeEventListener('scroll', toggleTopbar);
    };
  });

  return (
    <div ref={topbar} className={`topbar`}>
      <ul className="topbar__wrapper">
        {data.map((item, index) => (
          <li
            className="topbar__item"
            key={item.id}
            data-aos="fade-down"
            data-aos-delay={index * 300}
          >
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopBar;
