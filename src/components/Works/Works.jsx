import Curve from '../Curve/Curve';
import Character from '../Character/Character';

import './works.scss';

import togebetter from '../../assets/images/togebetter.png';

function Works() {
  return (
    <div id="works" className="works section">
      <div className="container mb-32" data-aos="fade-left">
        <div className="title">
          <Character index="0" scale="4" />
          <span className="mx-32">Works</span>
        </div>
        <div className="works__item">
          <div className="works__item__body">
            <div className="works__item__title">
              1. Togebetter{' '}
              <span className="nes-text is-small">- Personal project</span>
            </div>
            <img
              src={togebetter}
              className="works__item__image border"
              alt="Togebetter"
            />
            <div>
              <p>
                A web app for language learning.
                <br />
                Technologies Used:
                <span className="nes-text is-success ml-8">
                  Vue, Firebase, ElementUI
                </span>
              </p>

              <ul className="nes-list is-circle light">
                <li>
                  User can post, react, save, share questions or answers (data
                  stored in Firebase).
                </li>
                <li>Users can search for the questions (with Algolia API).</li>
              </ul>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://togebetter.netlify.app/"
              >
                Live
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/hungteddy/togebetter"
                className="ml-16"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <Curve color="#092d6d" flip />
    </div>
  );
}

export default Works;
