import React from 'react';

import './topbar.scss';

const data = [
  { id: 'intro', name: 'Intro' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

function TopBar() {
  return (
    <div className={`topbar`}>
      <ul className="topbar__wrapper">
        {data.map((item, index) => (
          <li
            className="topbar__item"
            key={item.id}
            data-aos="fade-down"
            data-aos-delay={1200 + index * 300}
          >
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopBar;
