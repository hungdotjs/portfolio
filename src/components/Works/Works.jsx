import './works.scss';

import togebetter from '../../assets/images/togebetter.png';

function Works() {
  return (
    <div id="works" className="works section">
      <div className="container" data-aos="zoom-in">
        <p className="title">My Works</p>
        <div className="works__item">
          <img
            data-aos="fade-up"
            src={togebetter}
            className="works__item__image border"
            alt="Togebetter"
          />
          <div className="works__item__body">
            <div className="works__item__title">1. Togebetter</div>
            <div>
              <span className="nes-text is-disabled">Personal Project</span>
              <p>
                A web app for language learning.
                <br />
                Technologies Used:
                <span className="nes-text is-success ml-8">
                  Vue, Firebase, ElementUI
                </span>
              </p>

              <ul className="nes-list is-circle">
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
    </div>
  );
}

export default Works;
