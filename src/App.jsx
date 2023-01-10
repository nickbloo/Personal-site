import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Carousel, { CarouselItem } from './components/Carousel';

function App() {

  return (
    <div>
      <Carousel>
        <Welcome />
        <About />
        <Portfolio />
        <Contact />
      </Carousel>
    </div>
  )
}

export default App;