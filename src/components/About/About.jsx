import Skills from '../Skills/Skills';
import Curve from '../Curve/Curve';

import './about.scss';

function About() {
  return (
    <div id="about" className="about">
      <Curve />

      <div className="container">
        <div data-aos="fade-left">
          <p className="title">
            <i class="nes-pokeball"></i> About me
          </p>
          <p>
            I'm a front-end developer with passionate about coding and solving
            problems through code. I'm currently expanding my skills in
            JavaScript, and dabbling in back-end (NodeJS, Express, Mongo).
          </p>
          <p>
            I am excited to work alongside other amazing programmers and learn
            so much more!
          </p>
        </div>
        <div data-aos="fade-right">
          <p className="title text-right">
            Skills <i class="nes-charmander"></i>
          </p>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
