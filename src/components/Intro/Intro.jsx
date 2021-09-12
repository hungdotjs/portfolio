import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import Background from '../Background/Background';

import fbIcon from '../../assets/svg/facebook.svg';
import inIcon from '../../assets/svg/linkedin.svg';
import githubIcon from '../../assets/svg/github.svg';
import arrowDown from '../../assets/svg/down.svg';

import './intro.scss';

const snsData = [
  {
    id: 'facebook',
    link: 'https://www.facebook.com/tranngochung.0510/',
    src: fbIcon,
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/hung-tran-2280b01b8/',
    src: inIcon,
  },
  { id: 'github', link: 'https://github.com/hungteddy', src: githubIcon },
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
    <div
      id="intro"
      className="intro section"
      data-aos="zoom-out"
      data-aos-delay="800"
    >
      <Background />

      <div className="intro__wrapper" data-aos="fade-up" data-aos-delay="1000">
        <span ref={text} className="intro__welcome"></span>
        <br />
        {'<'}I'm
        <span className="intro__title nes-text">HungTran</span>
        , <br />
        <p className="text-right" data-aos="fade-up" data-aos-delay="1500">
          a front-end developer.{' />'}
        </p>
        <div className="intro__sns text-center">
          {snsData.map((item, index) => (
            <a rel="noreferrer" key={item.id} href={item.link} target="_blank">
              <img
                src={item.src}
                alt={item.id}
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay={1800 + index * 300}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="intro__down">
        <a href="#about">
          <img src={arrowDown} alt="down" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
