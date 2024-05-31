'use client'
import logos from '../../../public/images/profile.jpg';
import bg_home from '../../../public/images/background_home.jpg';
import Image from "next/image";
import { FaArrowDown } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';

export default function HomePage() {
    const [scrollY, setScrollY] = useState<number>(0);
    const isOver = scrollY > 0 ? true : false;

     const onScroll = useCallback(event => {
      const { pageYOffset, scrollY } = window;
      console.log("yOffset", pageYOffset, "scrollY", scrollY);
      setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);
    
    
  return (
    <main className="flex min-h-screen flex-col">
      <div className="">
        <div className="w-100 h-h-screen bg-gradient-to-l from-cyan-500 to-blue-500">
           <Image className="w-full h-screen" src={bg_home} alt="" /> 
        </div>
        <div className="absolute w-100 left-1/2 top-60 ring-2 ring-white rounded-full">
          <Image className="w-40 rounded-full" src={logos} alt="" /> 
        </div>
        <div className={`absolute p-2 left-[48%] top-[96vh] ${isOver ? 'hidden':''}`}>
            <button className='bg-white h-12 w-12 flex justify-center items-center rounded-full shadow-lg'>
                <FaArrowDown />
            </button>
        </div>
          </div>
          <div>
              jsryh
          </div>
    </main>
  );
}
