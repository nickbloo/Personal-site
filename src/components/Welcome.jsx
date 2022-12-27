import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Welcome = () => {
  const { ref, inView: welcomeVisible } = useInView();

  
  return (
    <div ref={ref} welcomeVisible={welcomeVisible} className='flex flex-col justify-center items-center pl-3 pt-14 h-screen text-white' id="welcome">
      <h1 className='text-7xl font-bold'>Aya (Hello)</h1>
      <h2 className='text-6xl font-semibold'>I'm Nick</h2>
    </div>
  )
}

export default Welcome;