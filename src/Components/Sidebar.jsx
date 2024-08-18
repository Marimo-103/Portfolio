import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaAngleDown, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, } from 'react-icons/fa'
import { MdPhoneAndroid } from 'react-icons/md'
import { TbMailFilled } from 'react-icons/tb'
import watashi1 from '/Common Images/MHE.png'

const Sidebar = () => {
  return (
    <div className='bg-[#171717] sm:py-10 sm:px-4 p-3 sm:rounded-[14px] rounded-[10px] flex sm:flex-col sm:gap-10 justify-start sm:justify-center items-center relative  shadow-[22px_30px_95px_1px_rgba(0, 0, 0, 0.70)]'>
      <div className="profile flex sm:flex-col items-center justify-center sm:gap-8 gap-5">
        <div className="img bg-[#373738] sm:rounded-[14px] rounded-[10px] w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] overflow-hidden">
          <img src={watashi1} alt="" className='bg-[#0000007f]'/>
        </div>
        <div className="info flex sm:items-center items-start justify-center flex-col gap-1 sm:gap-2">
        <div className="name sm:text-[34px] text-2xl text-[#FCD980] font-Josefin font-medium sm:tracking-[0.72px] tracking-[0.22px] whitespace-nowrap">
          Mahmudul Hasan
        </div>
        <div className="tag sm:text-base text-xs text-[#F5F5F5] font-Outfit font-light sm:tracking-[0.92px] tracking-[0.52px] bg-[#373738] px-4 py-1 sm:py-[6px] sm:rounded-[8px] rounded-[5px]">
          Web Developer
        </div>
        </div>
      </div>
      <div className="drop absolute top-0 right-0 sm:hidden flex justify-center items-center p-1 bg-[#373738] rounded-s-none rounded-tr-[10px] rounded-bl-[10px]">
      <FaAngleDown className='text-[#FCD980]'/>
      </div>
      <div className="line hidden sm:flex w-[90%] h-[1px] bg-slate-400"></div>
      <div className="contacts hidden sm:flex flex-col gap-8 items-start justify-center">
        <div className="child flex items-center justify-center gap-4">
          <div className="icon p-2  bg-[#373738] rounded-lg">
            <TbMailFilled className='text-lg text-[#FCD980]'/>
          </div>
          <div className="text">
            <div className='text-base text-[#d5d5d5] font-Outfit'>
              Email
            </div>
            <a href='mailto:m.2091hasan@gmail.com' className='text-sm text-white font-Outfit'>
              mahmudulhasan@gmail.com
            </a>
          </div>
        </div>
        <div className="child flex items-center justify-center gap-4">
          <div className="icon p-2  bg-[#373738] rounded-lg">
            <MdPhoneAndroid className='text-lg text-[#FCD980]'/>
          </div>
          <div className="text">
            <div className='text-base text-[#d5d5d5] font-Outfit'>
              Phone
            </div>
            <a href='tel:+881307838018' className='text-sm text-white font-Outfit'>
            +881307838018
            </a>
          </div>
        </div>
        <div className="child flex items-center justify-center gap-4">
          <div className="icon p-2  bg-[#373738] rounded-lg">
            <FaGithub className='text-lg text-[#FCD980]'/>
          </div>
          <div className="text">
            <div className='text-base text-[#d5d5d5] font-Outfit'>
              GitHub
            </div>
            <a href='https://github.com/Marimo-103' target='_blank' className='text-sm text-white font-Outfit'>
              Marimo-103
            </a>
          </div>
        </div>
        <div className="child flex items-center justify-center gap-4">
          <div className="icon p-2  bg-[#373738] rounded-lg">
            <FaLinkedinIn className='text-lg text-[#FCD980]'/>
          </div>
          <div className="text">
            <div className='text-base text-[#d5d5d5] font-Outfit'>
              LinkedIn
            </div>
            <a href='#' target='_blank' className='text-sm text-white font-Outfit'>
              Mahmudul
            </a>
          </div>
        </div>
      </div>
      <div className="socials hidden sm:flex items-center justify-center gap-4 text-[#FCD980]">
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
  )
}

export default Sidebar