import './topbar.scss';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <a href="#intro" className="topbar__item">
          Home
        </a>
        <a href="#about" className="topbar__item">
          About
        </a>
        <a href="#works" className="topbar__item">
          Works
        </a>
        <a href="#contact" className="topbar__item">
          Contact
        </a>
      </div>
    </div>
  );
}

export default TopBar;
