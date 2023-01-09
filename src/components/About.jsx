import React from 'react';
import me from '../assets/me.png'

const About = () => {
  
  return (
    <div className='flex flex-wrap h-screen flex-row justify-center items-center pl-3 pt-14 text-white sm:text-left' id="about">
      <img className='rounded-full' src={me} alt="pic-of-me"/>
      <div className='pl-3'>
        <div className='flex text-4xl font-bold'>I am a software developer from Oklahoma.</div> 
        <div className='flex text-4xl font-bold'>I enjoy building things where I can utilize my creative energy.</div>
        <div className='flex text-4xl font-bold'>I have Front End and Back End experience and</div>
        <div className='flex text-4xl font-bold'>I am actively applying for full-time positions :)</div>
      </div>
    </div>
  )
}

export default About;
