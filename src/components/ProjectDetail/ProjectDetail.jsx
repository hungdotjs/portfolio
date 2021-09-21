import { useContext } from 'react';
import { ThemeContext } from '../../App';
import LazyLoad from 'react-lazyload';

export default function ProjectDetail(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-aos="fade-left">
      <div className={`works__item border ${theme}`}>
        <div className="works__item__image">
          <LazyLoad>
            <img src={props.image} alt="Togebetter" width="100" height="100" />
          </LazyLoad>
        </div>
        <div className="works__item__body">
          <div className="works__item__title">{props.title}</div>
          <p>
            {props.description} <br />
            Built with:
            <span className="nes-text is-success ml-8">
              {props.technologies}.
            </span>
          </p>

          <div>
            <a rel="noreferrer" target="_blank" href={props.repo}>
              <button className="nes-btn mx-8">Source</button>
            </a>
            <a rel="noreferrer" target="_blank" href={props.live}>
              <button className="nes-btn is-primary">Launch</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
