import React from 'react';

const Contact = () => {
  
  return (
    <div className='flex flex-col justify-center items-center pl-3 pt-14 h-screen text-white'>
      <h1 className='text-5xl font-semibold'>Contact me</h1>
      <h2 className='text-4xl'>Feel free to <a className='hover:text-slate-300' href="mailto:nickbloo2@gmail.com" target="_blank">email me</a></h2>
      <h2 className='text-4xl'>or message me on <a className='hover:text-slate-300' href="https://www.linkedin.com/in/nick-c-hargrove/" target="_blank">Linkedin!</a></h2>
    </div>
  )
}

export default Contact;