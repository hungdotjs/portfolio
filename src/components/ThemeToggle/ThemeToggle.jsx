import { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import DarkModeToggle from 'react-dark-mode-toggle';

import './theme-toggle.scss';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setIsDarkMode((state) => !state);
  };

  return (
    <div className="theme-toggle">
      <DarkModeToggle
        onChange={toggleDarkMode}
        checked={isDarkMode}
        size={60}
      />
    </div>
  );
}
