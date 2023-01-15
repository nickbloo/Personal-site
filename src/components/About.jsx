import React from 'react';
import me from '../assets/me.png'

const About = () => {
  
  return (
    <div className='flex flex-wrap h-screen flex-row justify-center items-center pl-3 pt-14 text-white text-left' id="about">
      <img className='rounded-full h-2/6 md:h-4/6' src={me} alt="pic-of-me"/>
      <div className='pl-3 pb-20 md:pb-0'>
        <div className='text-1xl md:text-4xl font-bold'>I am a software developer from Oklahoma.</div> 
        <div className='text-1xl md:text-4xl font-bold'>I enjoy building creative things.</div>
        <div className='text-1xl md:text-4xl font-bold'>I have Front End and Back End experience and</div>
        <div className='text-1xl md:text-4xl font-bold'>I am actively applying for full-time positions :)</div>
      </div>
    </div>
  )
}

export default About;
