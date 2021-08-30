import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Background from './components/Background/Background';
import Footer from './components/Footer';

// import Character from './components/Character/Character';

import 'nes.css/css/nes.min.css';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        {/* <Character /> */}
        <Background />
        <Intro />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
