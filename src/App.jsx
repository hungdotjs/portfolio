import React, { useEffect } from 'react';
import aos from 'aos';

import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
// import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// import Character from './components/Character/Character';

import 'nes.css/css/nes.min.css';
import 'aos/dist/aos.css';
import './app.scss';

function App() {
  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        {/* <Background /> */}
        <Intro />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
