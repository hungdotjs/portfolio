import './topbar.scss';

const data = [
  { id: 'intro', name: 'Intro' },
  { id: 'about', name: 'About' },
  { id: 'works', name: 'Works' },
  { id: 'contact', name: 'Contact' },
];

function TopBar() {
  return (
    <div className="topbar" data-aos="fade-down">
      <ul className="topbar__wrapper">
        {data.map((item) => (
          <li className="topbar__item" key={item.id}>
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopBar;
