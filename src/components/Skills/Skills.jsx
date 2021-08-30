import './skills.scss';

import htmlImg from '../../assets/images/html.svg';
import cssImg from '../../assets/images/css.svg';
import sassImg from '../../assets/images/sass.svg';
import reactImg from '../../assets/images/react.svg';
import vueImg from '../../assets/images/vue.svg';
import javascriptImg from '../../assets/images/javascript.svg';
import gitImg from '../../assets/images/git.svg';
import firebaseImg from '../../assets/images/firebase.svg';

function Skills() {
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

  return (
    <div className="skills">
      {data.map((item) => (
        <div key={item.name} className="skills__item">
          <div className="border nes-pointer">
            <img src={item.src} alt="css" />
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
