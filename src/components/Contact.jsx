import React from 'react';
import Footer from './Footer';

const Contact = () => {
  
  return (
    <div className='flex flex-col h-screen justify-center items-center pl-3 pt-24 text-white sm:text-left' id="contact">
      <h1 className='text-8xl sm:text-7xl font-semibold'>Contact me</h1>
      <h2 className='text-7xl sm:text-6xl'>Feel free to <a className='hover:text-slate-300' href="mailto:nickbloo2@gmail.com" target="_blank">email me</a></h2>
      <h2 className='text-7xl sm:text-6xl'>or message me on <a className='hover:text-slate-300' href="https://www.linkedin.com/in/nick-c-hargrove/" target="_blank">Linkedin!</a></h2>

      <footer className='text-center pb-2'>
        <h1 className='absolute inset-x-0 bottom-0 text-xl text-black font-light'>Built by Nick Hargrove</h1>
      </footer>
    </div>
  )
}

export default Contact;