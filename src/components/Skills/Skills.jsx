import LazyLoad from 'react-lazyload';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

import './skills.scss';

import htmlImg from '../../assets/svg/html.svg';
import cssImg from '../../assets/svg/css.svg';
import sassImg from '../../assets/svg/sass.svg';
import reactImg from '../../assets/svg/react.svg';
import vueImg from '../../assets/svg/vue.svg';
import javascriptImg from '../../assets/svg/javascript.svg';
import gitImg from '../../assets/svg/git.svg';
import firebaseImg from '../../assets/svg/firebase.svg';

const data = [
  { name: 'CSS', src: cssImg },
  { name: 'HTML', src: htmlImg },
  { name: 'SASS', src: sassImg },
  { name: 'Javascript', src: javascriptImg },
  { name: 'Vue', src: vueImg },
  { name: 'React', src: reactImg },
  { name: 'Git', src: gitImg },
  { name: 'Firebase', src: firebaseImg },
];

function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="skills">
      {data.map((item, index) => (
        <div
          key={item.name}
          className="skills__item"
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay={index * 100}
        >
          <div className={`border nes-pointer ${theme}`}>
            <LazyLoad height="48">
              <img src={item.src} alt="css" />
            </LazyLoad>
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
