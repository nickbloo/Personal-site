import { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import me from './assets/me.png'
import threadline from './assets/threadline.png';
import bibleapp from './assets/bibleapp.png';
import tictactoe from './assets/tictactoe.png';
import { FaReact, FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function App() {

  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <div className='background'>
      <Navbar />
      <Scroll welcomeVisible={welcomeVisible} aboutVisible={aboutVisible} portfolioVisible={portfolioVisible} contactVisible={contactVisible}/>

      <div className='space-y-20'>
      <InView>
        {({ inView: welcomeVisible, ref }) => (
          <div ref={ref} welcomeVisible={welcomeVisible} className='flex flex-col justify-center items-center pl-3 pb-24 pt-14 h-screen text-white' id="welcome">
            {setWelcomeVisible(welcomeVisible)}
            <h1 className='text-7xl font-bold'>Aya (Hello)</h1>
            <h2 className='text-6xl font-semibold'>I'm Nick</h2>
        </div>
        )}
      </InView>


      <InView>
        {({ inView: aboutVisible, ref }) => (
          <div ref={ref} aboutVisible={aboutVisible} className='flex flex-wrap flex-row justify-center items-center pl-3 pt-14 h-screen text-white' id="about">
          {setAboutVisible(aboutVisible)}
          <img className='rounded-full' src={me} alt="pic-of-me"/>
          <div className='pl-3'>
            <div className='flex text-3xl font-bold'>I am a software developer from Oklahoma.</div> 
            <div className='flex text-3xl font-bold'>I enjoy building things where I can utilize my creative energy.</div>
            <div className='flex text-3xl font-bold'>I have Front End and Back End experience and</div>
            <div className='flex text-3xl font-bold'>I am actively applying for full-time positions :)</div>
          </div>
        </div>
        )}
      </InView>

      <InView>
        {({ inView: portfolioVisible, ref }) => (
          <div ref={ref} portfolioVisible={portfolioVisible} className='flex flex-wrap flex-col justify-center items-center pl-3 pt-14 h-screen text-white' id="portfolio">
          {setPortfolioVisible(portfolioVisible)}
          <h1 className='text-5xl font-semibold'>Portfolio</h1>
    
          <div className='flex flex-row gap-x-48 mt-2'>
            <div className='rounded p-6 shadow-2xl'>
              <h2 className='text-4xl font-semibold'>Threadline</h2>
              <img src={threadline} alt="threadline" height='400' width='400'/>
              <p>Full Stack e-commerce fashion app</p>
              <span className='flex flex-row'>
                <FaReact className='p-1 text-cyan-400' size={50}/>
                <FaNode className='p-1 text-lime-500' size={50}/>
                <SiExpress className='p-1 bg-zinc-900' size={50}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="postgres" height={50} width={50}/>
              </span>
              <a href="https://github.com/orgs/Capstone-Group-3/repositories" target="_blank">
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>View on github</button>
              </a>
            </div>
    
            <div className='rounded p-6 shadow-2xl'>
              <h2 className='text-4xl font-semibold'>Bible App</h2>
              <img src={bibleapp} alt="bibleapp" height='400' width='400'/>
              <p>Generates a daily Bible verse, prayer and good deed for users</p>
              <span className='flex flex-row'>
                <FaReact className='p-1 text-cyan-400' size={50}/>
                <img src="https://vitejs.dev/logo-with-shadow.png" alt="vite" height={50} width={50}/>
                <img src="https://avatars.githubusercontent.com/u/22247014?s=280&v=4" alt="yarn" height={50} width={50}/>
              </span>
              <a href="https://github.com/Warriors-of-Friendship/bible-app" target="_blank">
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>View on github</button>
              </a>
            </div>
    
            <div className='rounded p-6 shadow-2xl'>
              <h2 className='text-4xl font-semibold'>Tic-Tac-Toe</h2>
              <img src={tictactoe} alt="tictactoe" height='400' width='400'/>
              <p>Tic-Tac-Toe game app built with vanilla JavaScript</p>
              <span className='flex flex-row'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" alt="javascript" height={30} width={50} className='pt-5 pr-1'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css" height={50} width={50}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="html" height={50} width={50}/>
              </span>
              <a href="https://github.com/nickbloo/Project-3-Arcade-Game" target="_blank">
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>View on github</button>
              </a>
            </div>
    
          </div>
        </div>
        )}
      </InView>

      <InView>
        {({ inView: contactVisible, ref }) => (
          <div ref={ref} contactVisible={contactVisible} className='flex flex-col justify-center items-center pl-3 pt-14 h-screen text-white' id="contact">
            {setContactVisible(contactVisible)}
            <h1 className='text-5xl font-semibold'>Contact me</h1>
            <h2 className='text-4xl'>Feel free to <a className='hover:text-slate-300' href="mailto:nickbloo2@gmail.com" target="_blank">email me</a></h2>
            <h2 className='text-4xl'>or message me on <a className='hover:text-slate-300' href="https://www.linkedin.com/in/nick-c-hargrove/" target="_blank">Linkedin!</a></h2>
        </div>
        )}
      </InView>
      </div>
      <Footer />
    </div>
  )
}

export default App;