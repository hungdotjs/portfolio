import ProjectDetail from '../ProjectDetail/ProjectDetail';
import Character from '../Character/Character';
import img1 from '../../assets/images/togebetter.jpeg';
import img2 from '../../assets/images/shibaurl.jpeg';

import './works.scss';

const data = [
  {
    title: 'Togebetter',
    image: img1,
    description: 'A web app for language learning.',
    technologies: 'Vue, Firebase, ElementUI',
    live: 'https://togebetter.netlify.app',
    repo: 'https://github.com/hungteddy/togebetter',
  },
  {
    title: 'ShibaURL',
    image: img2,
    description: 'A minimal URL shortener.',
    technologies: 'React, NodeJS, MongoDB',
    live: 'https://shibaurl.netlify.app',
    repo: 'https://github.com/hungteddy/shiba-url',
  },
];

function Works() {
  return (
    <div id="projects" className="works section">
      <div className="container pb-32">
        <div className="title mx-16" data-aos="fade-left">
          <Character index="0" scale="4" />
          <span className="mx-32">Projects</span>
        </div>
        <div className="works__wrapper">
          {data.map((item) => {
            return (
              <ProjectDetail
                key={item.title}
                title={item.title}
                image={item.image}
                live={item.live}
                repo={item.repo}
                technologies={item.technologies}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Works;
