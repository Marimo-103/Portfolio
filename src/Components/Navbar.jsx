import React from 'react';
import { Link } from 'react-router-dom'

// ************************************ Navbar js ************************************

const Navbar = () => {

  return (
    <div className='w-full'>
      <nav className='bg-[#171717] sm:rounded-tl-[14px] rounded-tl-[10px] sm:rounded-tr-[14px] rounded-tr-[10px]'>
        <div className='main flex items-center justify-between'>
          <div className="logo sm:block hidden text-4xl text-[#FCD980] font-Josefin font-semibold tracking-[0.92px] relative before:absolute before:bottom-[-4px] left-0 before:w-[33%] before:h-1 before:rounded-md before:bg-[#DCCA87] ml-4">
            About Me
          </div>
          <div className="menu bg-[#373738] sm:py-4 py-2 rounded-tr-[10px] sm:rounded-tr-[14px] sm:rounded-tl-none rounded-tl-[10px] sm:rounded-bl-[10px] w-full sm:w-auto">
            <ul className='flex items-center justify-between sm:gap-12 sm:mx-8 mx-4'>
              <Link className='text-white sm:text-base text-xs font-Outfit sm:font-medium font-normal sm:tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              About
              </Link>
              <Link className='text-white sm:text-base text-xs font-Outfit sm:font-medium font-normal sm:tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              Resume
              </Link>
              <Link className='text-white sm:text-base text-xs font-Outfit sm:font-medium font-normal sm:tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              Portfolio
              </Link>
              <Link className='text-white sm:text-base text-xs font-Outfit sm:font-medium font-normal sm:tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              Blog
              </Link>
              <Link className='text-white sm:text-base text-xs font-Outfit sm:font-medium font-normal sm:tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              Contact
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar