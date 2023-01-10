import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  
  return (
      <nav className='flex absolute top-0 right-0 flex-col items-end pr-2 text-white' id="navbar">
        <a className='relative z-10 hover:text-slate-200' href="mailto:nickbloo2@gmail.com" target="_blank">
          <MdOutlineMail size={60}/>
        </a>

        <a className='relative z-10 hover:text-slate-200' href="https://www.linkedin.com/in/nick-c-hargrove/" target="_blank">
          <FaLinkedin size={60}/>
        </a>

        <a className='relative z-10 hover:text-slate-200' href="https://www.github.com/nickbloo" target="_blank">
          <FaGithubSquare size={60}/>
        </a>
      </nav>
  )
}

export default Navbar;