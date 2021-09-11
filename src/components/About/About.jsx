import Skills from '../Skills/Skills';
import Curve from '../Curve/Curve';
import Character from '../Character/Character';

import './about.scss';

function About() {
  return (
    <div id="about" className="about">
      <Curve />

      <div className="container">
        <div data-aos="fade-left" className="mb-32">
          <div className="title about__title">
            <Character index="3" scale="4" />
            <span className="mx-32">About me</span>
          </div>
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
          <div className="title text-right">
            <Character index="2" scale="4" />
            <span className="mx-32">Skills</span>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
