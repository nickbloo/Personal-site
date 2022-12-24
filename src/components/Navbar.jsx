import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  
  return (
    <div>
      <nav>
        <a href="mailto:nickbloo2@gmail.com" target="_blank">
          <MdOutlineMail />
        </a>

        <a href="https://www.linkedin.com/in/nick-c-hargrove/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://www.github.com/nickbloo" target="_blank">
          <FaGithubSquare />
        </a>
      </nav>
    </div>
  )
}

export default Navbar;