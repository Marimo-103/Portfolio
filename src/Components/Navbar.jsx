import React from 'react';
import Li from '../Layers/Li';

// ************************************ Navbar js ************************************

const Navbar = () => {

  // let navItems = ['About','Resume','Portfolio','BLog', 'Contact']
  return (
    <div className='w-full'>
      <nav className='bg-[#171717] md:rounded-tl-[14px] rounded-tl-[10px] md:rounded-tr-[14px] rounded-tr-[10px]'>
        <div className='main flex items-center justify-between'>
          <div className="logo md:block hidden pt-3 text-5xl text-[#FCD980] font-Josefin font-semibold tracking-[0.92px] relative before:absolute before:bottom-[-4px] left-0 before:w-[33%] before:h-1 before:rounded-md before:bg-[#DCCA87] ml-4">
            About Me
          </div>
          <div className="menu bg-[#373738] md:py-4 py-2 rounded-tr-[10px] md:rounded-tr-[14px] md:rounded-tl-none rounded-tl-[10px] md:rounded-bl-[10px] w-full md:w-auto">
            <ul className='flex items-center justify-between md:gap-12 md:mx-8 mx-4'>
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