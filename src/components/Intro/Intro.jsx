import { useEffect, useRef } from 'react';

import { init } from 'ityped';

import './intro.scss';

const snsData = [
  { id: 'facebook', link: 'https://www.facebook.com/tranngochung.0510/' },
  { id: 'linkedin', link: 'https://www.linkedin.com/in/hung-tran-2280b01b8/' },
  { id: 'github', link: 'https://github.com/hungteddy' },
];

function Intro() {
  const text = useRef();

  useEffect(() => {
    init(text.current, {
      typeSpeed: 130,
      backDelay: 1000,
      loop: true,
      cursorChar: '|',
      strings: ['<Hello, />', '<Welcome to my portfolio />'],
    });
  }, []);

  return (
    <div id="intro" className="intro section">
      <div className="intro__wrapper" data-aos="fade-up">
        <span ref={text} className="intro__welcome"></span>
        <br />
        {'<'}I'm
        <span className="intro__title">
          <span className="nes-text">Hung Tran</span>
        </span>
        , <br />
        <p className="text-right">a front-end developer.{' />'}</p>
        <div className="intro__sns text-center">
          {snsData.map((item) => (
            <a rel="noreferrer" key={item.id} href={item.link} target="_blank">
              <i className={`nes-icon ${item.id}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Intro;
