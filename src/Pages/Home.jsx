import React from 'react'
import { MdRebaseEdit } from 'react-icons/md'
import { TbDeviceDesktopCode } from 'react-icons/tb'

const Home = () => {
  return (
    <div className='bg-[#171717]'>
      {/* intro */}
      <section id='intro' className='pt-12 sm:px-5 px-2'>
        <div className="main">
          <p className='sm:text-lg text-base text-[#F5F5F3] font-Josefin relative tracking-[0.22px] leading-[130%]'>
          <span className='text-2xl sm:text-4xl'>H</span>ello, I'm <div className='text-[#DCCA87] sm:text-xl text-lg font-semibold tracking-[0.32px] inline-block font-Outfit'>Mahmudul Hasan</div>! A passionate Web Developer and Designer with a knack for creating dynamic and responsive web applications. <br /><br />
          As a dedicated Web Developer and Designer, I specialize in building user-friendly and visually appealing websites. With a strong foundation in <span className='bg-[#dcca8758] p-[2px]'>React, Tailwind CSS and Figma</span>, I blend technical skills with creative design to deliver exceptional web solutions. My journey in web development and design is driven by creativity and a desire to make the web a better place. Dive into my portfolio to see my work and learn more about my skills and experiences.
          </p>
        </div>
      </section>

      {/* what i do */}
      <section id="doings" className='sm:pt-20 pt-12 sm:px-5 px-2'>
        <div className='main'>
          <h2 className='text-2xl sm:text-5xl text-[#FFF] font-Josefin font-bold sm:font-semibold tracking-[0.55px]'>
            What I'm Doing
          </h2>
          <div className="box flex items-center justify-start sm:gap-8 gap-4 flex-wrap sm:mt-12 mt-5">
            <div className="chid sm:p-5 p-[10px] bg-[#1E1E1E] sm:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <MdRebaseEdit className='sm:text-4xl text-xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='sm:text-2xl text-xl text-white font-Outfit font-medium sm:tracking-[1.28px] tracking-[1.48px] mb-1'>
                  Web Design
                </h3>
                <p className='sm:text-base text-xs font-Outfit text-[#F5F5F3] sm:tracking-[0.92px] tracking-[0.52px]'>
                  I build responsive and dynamic web applications using React, <br className='sm:block hidden'/> Tailwind CSS and other technologies.
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
                  I build responsive and dynamic web applications using React, <br className='sm:block hidden'/> Tailwind CSS and other technologies.
                </p>
              </div>
            </div>
            {/* <div className="chid p-5 bg-[#1E1E1E] rounded-xl border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <TbDeviceDesktopCode className='text-4xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='text-2xl text-white font-Outfit font-medium tracking-[1.28px]'>
                  Web Development
                </h3>
                <p className='text-base text-[#F5F5F3]'>
                  I build responsive and dynamic web applications using React, <br /> Tailwind CSS and other technologies.
                </p>
              </div>
            </div>
            <div className="chid p-5 bg-[#1E1E1E] rounded-xl border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <TbDeviceDesktopCode className='text-4xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='text-2xl text-white font-Outfit font-medium tracking-[1.28px]'>
                  Web Development
                </h3>
                <p className='text-base text-[#F5F5F3]'>
                  I build responsive and dynamic web applications using React, <br /> Tailwind CSS and other technologies.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section id="testimonials" className='sm:pt-20 pt-12 sm:px-5 px-2'>
        <div className="main">
          
        </div>
      </section>
    </div>
  )
}

export default Home