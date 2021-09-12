import Skills from '../Skills/Skills';
import Curve from '../Curve/Curve';
import Character from '../Character/Character';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './about.scss';

function About() {
  return (
    <div id="about" className="about">
      <Curve />

      <div className="container">
        <div data-aos="fade-left" className="py-32">
          <div className="text-right">
            <ThemeToggle />
          </div>

          <div className="title mx-16">
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

        <div data-aos="fade-right" className="pt-32">
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
