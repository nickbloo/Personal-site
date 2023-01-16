import React from 'react';
import threadline from '../assets/threadline.png';
import bibleapp from '../assets/bibleapp.png';
import tictactoe from '../assets/tictactoe.png';
import { FaReact, FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Portfolio = () => {
  
  return (
    <div className='flex mb-3 md:mb-0 flex-wrap md:flex-col h-screen justify-center items-center pl-3 pt-14 text-white' id="portfolio">
      <h1 className='md:text-7xl text-5xl font-semibold'>Portfolio</h1>

      <div className='flex md:flex-row flex-col gap-x-48 mt-2'>
        <div className='rounded md:p-6 pl-1 md:shadow-2xl'>
          <h2 className='text-2xl md:text-4xl font-semibold'>Threadline</h2>
          <img className='w-36 md:w-96' src={threadline} alt="threadline"/>
          <p>Full Stack e-commerce fashion app</p>
          <span className='flex flex-row'>
            <FaReact className='p-1 text-cyan-400' size={50}/>
            <FaNode className='p-1 text-lime-500' size={50}/>
            <SiExpress className='p-1 bg-zinc-900' size={50}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="postgres" height={50} width={50}/>
          </span>
          <a href="https://github.com/orgs/Capstone-Group-3/repositories" target="_blank">
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold md:py-2 py-1 md:px-4 px-2 text-sm border border-gray-400 rounded shadow'>View on github</button>
          </a>
        </div>

        <div className='rounded md:p-6 pl-1 pt-1 md:shadow-2xl'>
          <h2 className='text-2xl md:text-4xl font-semibold'>Bible App</h2>
          <img className='w-36 md:w-96' src={bibleapp} alt="bibleapp"/>
          <p>Generates a daily Bible verse, prayer and good deed</p>
          <span className='flex flex-row'>
            <FaReact className='p-1 text-cyan-400' size={50}/>
            <img src="https://vitejs.dev/logo-with-shadow.png" alt="vite" height={50} width={50}/>
            <img src="https://avatars.githubusercontent.com/u/22247014?s=280&v=4" alt="yarn" height={50} width={50}/>
          </span>
          <a href="https://github.com/Warriors-of-Friendship/bible-app" target="_blank">
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold md:py-2 py-1 md:px-4 px-2 text-sm border border-gray-400 rounded shadow'>View on github</button>
          </a>
        </div>

        <div className='rounded md:p-6 pl-1 pt-1 md:shadow-2xl'>
          <h2 className='text-2xl md:text-4xl font-semibold'>Tic-Tac-Toe</h2>
          <img className='w-36 md:w-96' src={tictactoe} alt="tictactoe"/>
          <p>Tic-Tac-Toe app built with vanilla JavaScript</p>
          <span className='flex flex-row'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" alt="javascript" height={30} width={50} className='pt-5 pr-1'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css" height={50} width={50}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="html" height={50} width={50}/>
          </span>
          <a href="https://github.com/nickbloo/Project-3-Arcade-Game" target="_blank">
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold md:py-2 py-1 md:px-4 px-2 text-sm border border-gray-400 rounded shadow'>View on github</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Portfolio;