import React, { useEffect, useState } from 'react';
import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import 'nes.css/css/nes.min.css';
import 'aos/dist/aos.css';
import './app.scss';

import aos from 'aos';

export const ThemeContext = React.createContext({});

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    aos.init({
      duration: 1000,
      // once: true,
      offset: 300,
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Topbar />
        <div className="sections">
          <Intro />
          <About />
          <Works />
          <Contact />
        </div>
        <ScrollToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
