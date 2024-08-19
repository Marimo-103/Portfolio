import React from 'react';
import Li from '../Layers/Li';

// ************************************ Navbar js ************************************

const Navbar = () => {
  return (
    <div className='w-full'>
      <nav className='bg-[#171717] sm:rounded-tl-[14px] rounded-tl-[10px] sm:rounded-tr-[14px] rounded-tr-[10px]'>
        <div className='main flex items-center justify-between'>
          <div className="logo sm:block hidden pt-3 text-5xl text-[#FCD980] font-Josefin font-semibold tracking-[0.92px] relative before:absolute before:bottom-[-4px] left-0 before:w-[33%] before:h-1 before:rounded-md before:bg-[#DCCA87] ml-4">
            About Me
          </div>
          <div className="menu bg-[#373738] sm:py-4 py-2 rounded-tr-[10px] sm:rounded-tr-[14px] sm:rounded-tl-none rounded-tl-[10px] sm:rounded-bl-[10px] w-full sm:w-auto">
            <ul className='flex items-center justify-between sm:gap-12 sm:mx-8 mx-4'>
              <Li value='About Me' to='/'/>
              <Li value='Resume' to='/resume'/>
              <Li value='Portfolio' to='/portfolio'/>
              <Li value='Blog' to='/blog'/>
              <Li value='Contact' to='/contact'/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar