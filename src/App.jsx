import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';

function App() {
  
  return (
    <div className='background'>
      <Navbar />
      <Scroll />
      <Welcome />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
