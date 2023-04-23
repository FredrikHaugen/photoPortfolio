import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Socials from './components/Socials.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.9;
      const offset = window.pageYOffset;
      const scrollDown = offset > prevScrollY.current;

      // If scrolling down and navbar is currently visible, fade it out
      if (scrollDown && visible) {
        setVisible(false);
      }

      // If scrolling up and navbar is currently hidden, fade it in
      if (!scrollDown && !visible && offset < threshold) {
        setVisible(true);
      }

      prevScrollY.current = offset;
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={HeroSection} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/socials" component={Socials} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <HeroSection />
        <About />
        <Portfolio />
        <Socials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
