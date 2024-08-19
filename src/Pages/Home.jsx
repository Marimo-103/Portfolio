import React from 'react'
import { MdRebaseEdit } from 'react-icons/md'
import { PiBracketsCurlyBold } from 'react-icons/pi'
import { SiKalilinux } from 'react-icons/si'
import { TbDeviceDesktopCode } from 'react-icons/tb'
import client01 from '/Home Images/avatar-1.png'
import client02 from '/Home Images/avatar-2.png'
import client03 from '/Home Images/avatar-3.png'
import { ImStack } from 'react-icons/im'


const Home = () => {
  return (
    <div className='bg-[#171717] rounded-bl-[10px] rounded-br-[10px] sm:rounded-bl-[14px] sm:rounded-br-[14px]'>
      {/* intro */}
      <section id='intro' className='pt-12 sm:px-5 px-2'>
        <div className="main">
          <p className='sm:text-lg text-base text-[#F5F5F3] font-Josefin relative tracking-[0.22px] leading-[130%]'>
          <span className='text-2xl sm:text-4xl'>H</span>ello, I'm <div className='text-[#DCCA87] sm:text-xl text-lg font-semibold tracking-[0.32px] inline-block font-Outfit'>Mahmudul Hasan</div>! A passionate Web Developer and Designer with a knack for creating dynamic and responsive web applications. <br /><br />
          With a strong foundation in <span className='bg-[#dcca8758] p-[2px]'>React, Tailwind CSS and Figma</span>, I blend technical skills with creative design to deliver exceptional web solutions. Dive into my portfolio to see my work and learn more about my skills and experiences.
          </p>
        </div>
      </section>

      {/* what i do */}
      <section id="doings" className='sm:pt-20 pt-12 sm:px-5 px-2'>
        <div className='main'>
          <h2 className='text-2xl sm:text-4xl text-[#FFF] font-Josefin font-bold sm:font-semibold tracking-[0.55px]'>
            What I'm Doing
          </h2>
          <div className="box1 flex items-center justify-start sm:gap-8 gap-4 sm:flex-nowrap flex-wrap sm:mt-8 mt-5">
            <div className="chid sm:p-5 p-[10px] bg-[#1E1E1E] sm:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <MdRebaseEdit className='sm:text-4xl text-xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='sm:text-2xl text-xl text-white font-Outfit font-medium sm:tracking-[1.28px] tracking-[1.48px] mb-1'>
                  Web Design
                </h3>
                <p className='sm:text-base text-xs font-Outfit text-[#F5F5F3] sm:tracking-[0.92px] tracking-[0.52px]'>
                  I build creative and professional web designs using Figma that encourages every developer to start building.
                </p>
              </div>      
            </div>
            <div className="chid sm:p-5 p-[10px] bg-[#1E1E1E] sm:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <TbDeviceDesktopCode className='sm:text-4xl text-xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='sm:text-2xl text-xl text-white font-Outfit font-medium sm:tracking-[1.28px] tracking-[1.48px] mb-1'>
                  Web Development
                </h3>
                <p className='sm:text-base text-xs font-Outfit text-[#F5F5F3] sm:tracking-[0.92px] tracking-[0.52px]'>
                  I build responsive and dynamic web applications using React, Tailwind CSS and other technologies.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="box2 flex items-center justify-start sm:gap-8 gap-4 sm:flex-nowrap flex-wrap sm:mt-12 mt-4">
            <div className="chid sm:p-5 p-[10px] bg-[#1E1E1E] sm:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <PiBracketsCurlyBold className='sm:text-4xl text-xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='sm:text-2xl text-xl text-white font-Outfit font-medium sm:tracking-[1.28px] tracking-[1.48px] mb-1'>
                  C Programming
                </h3>
                <p className='sm:text-base text-xs font-Outfit text-[#F5F5F3] sm:tracking-[0.92px] tracking-[0.52px]'>
                  I build responsive and dynamic web applications using React, Tailwind CSS and other technologies.
                </p>
              </div>      
            </div>
            <div className="chid sm:p-5 p-[10px] bg-[#1E1E1E] sm:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <SiKalilinux className='sm:text-4xl text-xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='sm:text-2xl text-xl text-white font-Outfit font-medium sm:tracking-[1.28px] tracking-[1.48px] mb-1'>
                  Linux Expert
                </h3>
                <p className='sm:text-base text-xs font-Outfit text-[#F5F5F3] sm:tracking-[0.92px] tracking-[0.52px]'>
                  I build responsive and dynamic web applications using React, Tailwind CSS and other technologies.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* What am I doing */}
      <section id="" className='sm:pt-20 pt-12 sm:px-5 px-2'>
        <div className="main">
          <h2 className='text-2xl sm:text-4xl text-[#FFF] font-Josefin font-bold sm:font-semibold tracking-[0.55px]'>
              What I'm Learning
          </h2>
          <p className='text-sm sm:text-base text-[#FFF] font-Josefin tracking-[0.28px] mt-2'>
            Apparently, along with Desinging & Developing I'm learing to outrun my present from and accquire much more heights in the future. Some of my mentionable growing skills are :
          </p>
          <div className="info sm:ml-8 ml-4 sm:mt-6 mt-3">
            <div className='flex flex-col sm:gap-5 gap-3'>
              <div className='flex items-center gap-3'>
                <div className="icon">
                  <ImStack className='sm:text-2xl text-xl text-[#DCCA87]'/>
                </div>
                <div className="text sm:text-xl text-base text-[#F5F5F3] font-Josefin tracking-[0.35px]">
                  MERN Stack
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className="icon">
                  <SiKalilinux className='sm:text-2xl text-xl text-[#DCCA87]'/>
                </div>
                <div className="text sm:text-xl text-base text-[#F5F5F3] font-Josefin tracking-[0.35px]">
                  Kali Linux
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className="icon">
                  <PiBracketsCurlyBold className='sm:text-2xl text-xl text-[#DCCA87]'/>
                </div>
                <div className="text sm:text-xl text-base text-[#F5F5F3] font-Josefin tracking-[0.35px]">
                  C / C++ Programming
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section id="testimonials" className='sm:pt-20 pb-2 sm:pb-4 py-12 sm:px-5 px-2'>
        <div className="main">
          <h2 className='text-2xl sm:text-4xl text-[#FFF] font-Josefin font-bold sm:font-semibold tracking-[0.55px] mb-14'>
          Testimonials
          </h2>
          <div className="boxes flex flex-col sm:flex-row sm:gap-8 gap-8 items-center justify-center">
            <div className='child sm:border border-l border-b sm:border-[#dcca8759] border-[#dcca8796] sm:p-5 p-3 rounded-xl sm:hover:scale-[1.1] transition-all duration-300 sm:hover:border-[#DCCA87]'>
              <div className="name bg-[#171717] w-fit flex gap-3 items-center justify-center sm:mt-[-53px] mt-[-35px] ml-1">
                <div className="img sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] bg-[#373738] overflow-hidden rounded-xl">
                    <img src={client01} alt="" />
                </div>
                <h4 className='sm:text-xl text-lg text-[#dcca87] font-Outfit font-medium tracking-[0.54px]'>
                    Richard Reins
                </h4>
              </div>
              <div className="comment sm:mt-2 mt-3">
                <p className='sm:text-base text-xs text-[#F5F5F3] font-Josefin tracking-[0.28px] sm:tracking-[0.11px]'>
                    I've been using this product for a while now, and I have to say, it's been good.
                </p>
              </div>
            </div>
            <div className='child sm:border border-r border-b sm:border-[#dcca8759] border-[#dcca8796] sm:p-5 p-3 rounded-xl sm:hover:scale-[1.1] transition-all duration-300 sm:hover:border-[#DCCA87]'>
              <div className="name bg-[#171717] w-fit flex flex-row-reverse sm:flex-row gap-3 items-center justify-center sm:mt-[-53px] mt-[-35px] ml-auto sm:ml-1">
                <div className="img sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] bg-[#373738] overflow-hidden rounded-xl">
                    <img src={client02} alt="" />
                </div>
                <h4 className='sm:text-xl text-lg text-[#dcca87] font-Outfit font-medium tracking-[0.54px]'>
                    Erza Scarlet
                </h4>
              </div>
              <div className="comment sm:mt-2 mt-3">
                <p className='sm:text-base text-xs text-[#F5F5F3] font-Josefin tracking-[0.28px] sm:tracking-[0.11px] text-end sm:text-start'>
                    I've been using this product for a while now, and I have to say, it's been good.
                </p>
              </div>
            </div>
            <div className='child sm:border border-l border-b sm:border-[#dcca8759] border-[#dcca8796] sm:p-5 p-3 rounded-xl sm:hover:scale-[1.1] transition-all duration-300 sm:hover:border-[#DCCA87]'>
              <div className="name bg-[#171717] w-fit flex gap-3 items-center justify-start sm:mt-[-53px] mt-[-35px] ml-1">
                <div className="img sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] bg-[#373738] overflow-hidden rounded-xl">
                    <img src={client03} alt="" />
                </div>
                <h4 className='sm:text-xl text-lg text-[#dcca87] font-Outfit font-medium tracking-[0.54px]'>
                    Savannah Seth
                </h4>
              </div>
              <div className="comment sm:mt-2 mt-3">
                <p className='sm:text-base text-xs text-[#F5F5F3] font-Josefin tracking-[0.28px] sm:tracking-[0.11px]'>
                    I've been using this product for a while now, and I have to say, it's been good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home