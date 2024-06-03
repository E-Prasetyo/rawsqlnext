import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect';
import bg_home from '../../../public/images/background_home.jpg';
import profile from '../../../public/images/profile.jpg';

const HeroSection = () => {
const test = "Developer Engineer"
  return (
     <div
        className="w-full h-screen flex flex-col items-center from-cyan-500 to-blue-500"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.9)),url('${bg_home.src}')`,
          backgroundSize:'cover'
        }}
      >
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <Image
            className="w-60 rounded-full "
            src={profile}
            alt=""
          />
          <div className='py-4 text-white font-mono text-2xl'>
            Tarsisius Eko Prasetyo
          </div>
          <div className='py-4 text-white font-mono text-6xl'>
            <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`${test}`)
                    .callFunction(() => {
                      // console.log('String typed out!');
                    })
                    .pauseFor(10000)
                    .deleteAll()
                    .callFunction(() => {
                      // console.log('All strings were deleted');
                    })
                    .start();
              }}
              options={{ loop: true }}
              />
          </div>
        </div>
        <div className='animate-bounce'>
            <button className='bg-white h-12 w-12 flex justify-center items-center rounded-full shadow-lg'>
                <FaArrowDown />
            </button>
        </div>
      </div>
  )
}

export default HeroSection