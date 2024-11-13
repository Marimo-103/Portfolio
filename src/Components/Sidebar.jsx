import React, { useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaAngleDown, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, } from 'react-icons/fa'
import { MdPhoneAndroid } from 'react-icons/md'
import { TbMailFilled } from 'react-icons/tb'
import watashi1 from '/Common Images/MHE.png'

const Sidebar = () => {
  let [showEmails, setShowEmails] = useState(false)

  let toggleEmails = () => {
    setShowEmails(!showEmails);
  };
  return (
    <div className='bg-[#171717] md:py-10 md:px-4 p-3 md:rounded-[14px] rounded-[10px] flex flex-col md:gap-10 gap-5 justify-start md:justify-center md:items-center items-start relative shadow-[22px_30px_95px_1px_rgba(0, 0, 0, 0.70)]'>
      <div className="profile flex md:flex-col items-center justify-center md:gap-8 gap-5">
        <div className="img bg-[#373738] md:rounded-[14px] rounded-[10px] w-[80px] h-[80px] md:w-[150px] md:h-[150px] overflow-hidden">
          <img src={watashi1} alt="" className='bg-[#0000007f]'/>
        </div>
        <div className="info flex md:items-center items-start justify-center flex-col gap-1 md:gap-2">
        <div className="name md:text-[34px] text-2xl text-[#FCD980] font-Josefin font-medium md:tracking-[0.72px] tracking-[0.22px] whitespace-nowrap">
          Mahmudul Hasan
        </div>
        <div className="tag md:text-base text-xs text-[#F5F5F5] font-Outfit font-light md:tracking-[0.92px] tracking-[0.52px] bg-[#373738] px-4 py-1 md:py-[6px] md:rounded-[8px] rounded-[5px]">
          Web Developer
        </div>
        </div>
      </div>
      <div onClick={toggleEmails} className="drop absolute top-0 right-0 md:hidden flex justify-center items-center p-1 bg-[#373738] rounded-s-none rounded-tr-[10px] rounded-bl-[10px] cursor-pointer">
      <FaAngleDown className={`text-[#FCD980] transition-all duration-300 ${showEmails ? "rotate-180 text-[#ffffff]" : "rotate-0"}`}/>
      </div>
      <div className={`flex flex-col md:gap-10 gap-5 justify-start md:justify-center md:items-center items-start w-full md:h-auto transition-all duration-500 ease-in-out overflow-hidden ${showEmails ? 'h-[275px]' : 'h-0'}`}>
        <div className="line flex md:w-[90%] w-full h-[1px] bg-slate-400"></div>
        <div className="contacts flex flex-col md:gap-7 gap-4 items-start justify-center">
          <div className="child flex items-center justify-center md:gap-4 gap-3">
            <div className="icon p-1 md:p-2  bg-[#373738] rounded-md md:rounded-lg">
              <TbMailFilled className='text-base md:text-lg text-[#FCD980]'/>
            </div>
            <div className="text flex flex-col">
              <div className='md:text-base text-sm text-[#d5d5d5] font-Outfit'>
                Email
              </div>
              <a href='mailto:m.2091hasan@gmail.com' className='md:text-sm text-xs text-white font-Outfit'>
                mahmudulhasan@gmail.com
              </a>
            </div>
          </div>
          <div className="child flex items-center justify-center md:gap-4 gap-3">
            <div className="icon p-1 md:p-2  bg-[#373738] rounded-md md:rounded-lg">
              <MdPhoneAndroid className='text-base md:text-lg text-[#FCD980]'/>
            </div>
            <div className="text flex flex-col">
              <div className='md:text-base text-sm text-[#d5d5d5] font-Outfit'>
                Phone
              </div>
              <a href='tel:+881307838018' className='md:text-sm text-xs text-white font-Outfit'>
              +881307838018
              </a>
            </div>
          </div>
          <div className="child flex items-center justify-center md:gap-4 gap-3">
            <div className="icon p-1 md:p-2  bg-[#373738] rounded-md md:rounded-lg">
              <FaGithub className='text-base md:text-lg text-[#FCD980]'/>
            </div>
            <div className="text flex flex-col">
              <div className='md:text-base text-sm text-[#d5d5d5] font-Outfit'>
                GitHub
              </div>
              <a href='https://github.com/Marimo-103' target='_blank' className='md:text-sm text-xs text-white font-Outfit'>
                Marimo-103
              </a>
            </div>
          </div>
          <div className="child flex items-center justify-center md:gap-4 gap-3">
            <div className="icon p-1 md:p-2  bg-[#373738] rounded-md md:rounded-lg">
              <FaLinkedinIn className='text-base md:text-lg text-[#FCD980]'/>
            </div>
            <div className="text flex flex-col">
              <div className='md:text-base text-sm text-[#d5d5d5] font-Outfit'>
                LinkedIn
              </div>
              <a href='https://www.linkedin.com/in/mahmudulhasan2091/' target='_blank' className='md:text-sm text-xs text-white font-Outfit'>
                Mahmudul
              </a>
            </div>
          </div>
        </div>
        <div className="line flex md:w-[90%] w-full h-[1px] bg-slate-400"></div>
        <div className="socials flex items-center justify-center gap-4 text-[#FCD980] md:m-0 ml-auto">
          <a href="">
          <FaFacebookF />
          </a>
          <a href="">
          <BsTwitterX />
          </a>
          <a href="">
          <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar