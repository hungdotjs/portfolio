import Skills from '../Skills/Skills';

import './about.scss';

function About() {
  return (
    <div id="about" className="section about">
      <div className="container">
        <p className="title">About me</p>
        <p>
          I'm a front-end developer with passionate about coding and solving
          problems through code. I'm currently expanding my skills in
          JavaScript, and dabbling in back-end (NodeJS, Express, Mongo).
        </p>
        <p>
          I am excited to work alongside other amazing programmers and learn so
          much more!
        </p>
        <p className="title">Skills</p>
        <Skills />
      </div>
    </div>
  );
}

export default About;
