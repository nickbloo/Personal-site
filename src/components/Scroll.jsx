import { useState } from 'react';
import { Link } from 'react-scroll'

const Scroll = ({welcomeVisible, aboutVisible, portfolioVisible, contactVisible}) => {

  const [isActive, setActive] = useState(false);

  function toggleTriangle() {
    setActive(!isActive);
  };
  
  return (
    <nav className='flex z-1 flex-col items-end fixed inset-y-1/2 right-0 pr-8'>
        <Link to="navbar" spy={true} smooth={true} offset={50} duration={500}>
          <div className={welcomeVisible ? 'triangle' : 'square'}></div>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <div className={aboutVisible ? 'triangle' : 'square'}></div>
        </Link>
        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
          <div className={portfolioVisible ? 'triangle' : 'square'}></div>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <div className={contactVisible ? 'triangle' : 'square'}></div>
        </Link>
    </nav>
  )
}

export default Scroll;