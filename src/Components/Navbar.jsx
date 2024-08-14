import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full'>
      <nav className='bg-[#1C1E53] sm:rounded-tl-[14px] rounded-tl-[10px] sm:rounded-tr-[14px] rounded-tr-[10px]'>
        <div className='main flex items-center justify-between'>
          <div className="logo sm:block hidden text-4xl text-white font-Josefin font-semibold tracking-[0.92px] relative before:absolute before:bottom-[-4px] left-0 before:w-[33%] before:h-1 before:rounded-md before:bg-[#FCD980] ml-4">
            About Me
          </div>
          <div className="menu bg-[#3c3f84] py-4 rounded-tr-[10px] sm:rounded-tr-[14px] rounded-bl-[10px]">
            <ul className='flex items-center justify-between gap-12 mx-8'>
              <Link className='text-white text-base font-Outfit font-medium tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              About
              </Link>
              <Link className='text-white text-base font-Outfit font-medium tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              Resume
              </Link>
              <Link className='text-white text-base font-Outfit font-medium tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              Portfolio
              </Link>
              <Link className='text-white text-base font-Outfit font-medium tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
              Blog
              </Link>
              <Link className='text-white text-base font-Outfit font-medium tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980]'>
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