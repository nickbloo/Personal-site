import { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel, { CarouselItem } from './components/Carousel';

function App() {

  return (
    <div>
      <Navbar />

      <Carousel>
        <Welcome />
        <About />
        <Portfolio />
        <Contact />
      </Carousel>
      <Footer />
    </div>
  )
}

export default App;