import { useContext } from 'react';
import { ThemeContext } from '../../App';

export default function ProjectDetail(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`works__item border ${theme}`} data-aos="fade-up">
      <div className="works__item__body">
        <div className="works__item__title">{props.title}</div>
        <div className="works__item__image">
          <div className="works__item__mask"></div>
          <img src={props.image} alt="Togebetter" />
        </div>
        <div>
          <p>{props.description}</p>
          <p>
            Built with:
            <span className="nes-text is-success ml-8">
              {props.technologies}.
            </span>
          </p>

          <div className="text-right">
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
