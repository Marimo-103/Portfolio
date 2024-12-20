import React, { useEffect, useState } from "react";
import { MdRebaseEdit } from "react-icons/md";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { SiKalilinux } from "react-icons/si";
import { TbDeviceDesktopCode } from "react-icons/tb";
import client01 from "/Home Images/avatar-1.png";
import client02 from "/Home Images/avatar-2.png";
import client03 from "/Home Images/avatar-3.png";
import { ImStack } from "react-icons/im";
import "animate.css/animate.min.css";


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className={`bg-[#171717] rounded-bl-[10px] rounded-br-[10px] md:rounded-bl-[14px] md:rounded-br-[14px] ${isLoaded ? "animate__animated animate__fadeIn" : ""}`}>
      {/* intro */}
      <section id="intro" className="pt-12 md:px-5 px-2">
        <div className={`main`}>
          <p className="md:text-lg text-base text-[#F5F5F3] font-Josefin relative tracking-[0.22px] leading-[130%]">
            <span className="text-2xl md:text-4xl">H</span>ello, I'm{" "}
            <div className="text-[#DCCA87] md:text-xl text-lg font-semibold tracking-[0.32px] inline-block font-Outfit">
              Mahmudul Hasan
            </div>
            ! A passionate Web Developer and Designer with a knack for creating
            dynamic and responsive web applications. <br />
            <br />
            With a strong foundation in{" "}
            <span className="bg-[#dcca8758] p-[2px]">
              React, Tailwind CSS and Figma
            </span>
            , I blend technical skills with creative design to deliver
            exceptional web solutions. Dive into my portfolio to see my work and
            learn more about my skills and experiences.
          </p>
        </div>
      </section>

      {/* what i do */}
      <section id="doings" className="md:pt-20 pt-12 md:px-5 px-2">
        <div className="main">
          <h2 className="text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px]">
            What I'm Doing
          </h2>
          <div className="box1 flex items-center justify-start md:gap-8 gap-4 md:flex-nowrap flex-wrap md:mt-8 mt-5">
            <div className="chid md:p-5 p-[10px] bg-[#1E1E1E] md:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4 w-full md:w-auto">
              <div className="icon">
                <MdRebaseEdit className="md:text-4xl text-xl text-[#DCCA87]" />
              </div>
              <div className="text">
                <h3 className="md:text-2xl text-xl text-white font-Outfit font-medium md:tracking-[1.28px] tracking-[1.48px] mb-1">
                  Web Design
                </h3>
                <p className="md:text-base text-xs font-Outfit text-[#F5F5F3] md:tracking-[0.92px] tracking-[0.52px]">
                  I build creative and professional web designs using Figma that
                  encourages every developer to start building.
                </p>
              </div>
            </div>
            <div className="chid md:p-5 p-[10px] bg-[#1E1E1E] md:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4 w-full md:w-auto">
              <div className="icon">
                <TbDeviceDesktopCode className="md:text-4xl text-xl text-[#DCCA87]" />
              </div>
              <div className="text">
                <h3 className="md:text-2xl text-xl text-white font-Outfit font-medium md:tracking-[1.28px] tracking-[1.48px] mb-1">
                  Web Development
                </h3>
                <p className="md:text-base text-xs font-Outfit text-[#F5F5F3] md:tracking-[0.92px] tracking-[0.52px]">
                  I build responsive and dynamic web applications using React,
                  Tailwind CSS and other technologies.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="box2 flex items-center justify-start md:gap-8 gap-4 md:flex-nowrap flex-wrap md:mt-12 mt-4">
            <div className="chid md:p-5 p-[10px] bg-[#1E1E1E] md:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <PiBracketsCurlyBold className='md:text-4xl text-xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='md:text-2xl text-xl text-white font-Outfit font-medium md:tracking-[1.28px] tracking-[1.48px] mb-1'>
                  C Programming
                </h3>
                <p className='md:text-base text-xs font-Outfit text-[#F5F5F3] md:tracking-[0.92px] tracking-[0.52px]'>
                  I build responsive and dynamic web applications using React, Tailwind CSS and other technologies.
                </p>
              </div>      
            </div>
            <div className="chid md:p-5 p-[10px] bg-[#1E1E1E] md:rounded-xl rounded-lg border border-[#dcca8756] flex gap-4">
              <div className="icon">
              <SiKalilinux className='md:text-4xl text-xl text-[#DCCA87]'/>
              </div>      
              <div className="text">
                <h3 className='md:text-2xl text-xl text-white font-Outfit font-medium md:tracking-[1.28px] tracking-[1.48px] mb-1'>
                  Linux Expert
                </h3>
                <p className='md:text-base text-xs font-Outfit text-[#F5F5F3] md:tracking-[0.92px] tracking-[0.52px]'>
                  I build responsive and dynamic web applications using React, Tailwind CSS and other technologies.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* What am I learning */}
      <section id="" className="md:pt-20 pt-12 md:px-5 px-2">
        <div className="main">
          <h2 className="text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px]">
            What I'm Learning
          </h2>
          <p className="text-sm md:text-base text-[#FFF] font-Josefin tracking-[0.28px] mt-2">
            Apparently, along with Desinging & Developing I'm learing to outrun
            my present from and accquire much more heights in the future. Some
            of my mentionable growing skills are :
          </p>
          <div className="info md:ml-8 ml-4 md:mt-6 mt-3">
            <div className="flex flex-col md:gap-5 gap-3">
              <div className="flex items-center gap-3">
                <div className="icon">
                  <ImStack className="md:text-2xl text-xl text-[#DCCA87]" />
                </div>
                <div className="text md:text-xl text-base text-[#F5F5F3] font-Josefin tracking-[0.35px]">
                  MERN Stack
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon">
                  <SiKalilinux className="md:text-2xl text-xl text-[#DCCA87]" />
                </div>
                <div className="text md:text-xl text-base text-[#F5F5F3] font-Josefin tracking-[0.35px]">
                  Kali Linux
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon">
                  <PiBracketsCurlyBold className="md:text-2xl text-xl text-[#DCCA87]" />
                </div>
                <div className="text md:text-xl text-base text-[#F5F5F3] font-Josefin tracking-[0.35px]">
                  C / C++ Programming
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section
        id="testimonials"
        className="md:pt-20 pb-2 md:pb-4 py-12 md:px-5 px-2"
      >
        <div className="main">
          <h2 className="text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px] mb-14">
            Testimonials
          </h2>
          <div className="boxes flex flex-col md:flex-row md:gap-8 gap-8 items-center justify-center">
            <div className="child md:border border-l border-b md:border-[#dcca8759] border-[#dcca8796] md:p-5 p-3 rounded-xl md:hover:scale-[1.1] transition-all duration-300 md:hover:border-[#DCCA87]">
              <div className="name bg-[#171717] w-fit flex gap-3 items-center justify-center md:mt-[-53px] mt-[-35px] ml-1">
                <div className="img md:w-[60px] w-[40px] md:h-[60px] h-[40px] bg-[#373738] overflow-hidden rounded-xl">
                  <img src={client01} alt="" />
                </div>
                <h4 className="md:text-xl text-lg text-[#dcca87] font-Outfit font-medium tracking-[0.54px]">
                  Richard Reins
                </h4>
              </div>
              <div className="comment md:mt-2 mt-3">
                <p className="md:text-base text-xs text-[#F5F5F3] font-Josefin tracking-[0.28px] md:tracking-[0.11px]">
                  I've been using this product for a while now, and I have to
                  say, it's been good.
                </p>
              </div>
            </div>
            <div className="child md:border border-r border-b md:border-[#dcca8759] border-[#dcca8796] md:p-5 p-3 rounded-xl md:hover:scale-[1.1] transition-all duration-300 md:hover:border-[#DCCA87]">
              <div className="name bg-[#171717] w-fit flex flex-row-reverse md:flex-row gap-3 items-center justify-center md:mt-[-53px] mt-[-35px] ml-auto md:ml-1">
                <div className="img md:w-[60px] w-[40px] md:h-[60px] h-[40px] bg-[#373738] overflow-hidden rounded-xl">
                  <img src={client02} alt="" />
                </div>
                <h4 className="md:text-xl text-lg text-[#dcca87] font-Outfit font-medium tracking-[0.54px]">
                  Erza Scarlet
                </h4>
              </div>
              <div className="comment md:mt-2 mt-3">
                <p className="md:text-base text-xs text-[#F5F5F3] font-Josefin tracking-[0.28px] md:tracking-[0.11px] text-end md:text-start">
                  I've been using this product for a while now, and I have to
                  say, it's been good.
                </p>
              </div>
            </div>
            <div className="child md:border border-l border-b md:border-[#dcca8759] border-[#dcca8796] md:p-5 p-3 rounded-xl md:hover:scale-[1.1] transition-all duration-300 md:hover:border-[#DCCA87]">
              <div className="name bg-[#171717] w-fit flex gap-3 items-center justify-start md:mt-[-53px] mt-[-35px] ml-1">
                <div className="img md:w-[60px] w-[40px] md:h-[60px] h-[40px] bg-[#373738] overflow-hidden rounded-xl">
                  <img src={client03} alt="" />
                </div>
                <h4 className="md:text-xl text-lg text-[#dcca87] font-Outfit font-medium tracking-[0.54px]">
                  Savannah Seth
                </h4>
              </div>
              <div className="comment md:mt-2 mt-3">
                <p className="md:text-base text-xs text-[#F5F5F3] font-Josefin tracking-[0.28px] md:tracking-[0.11px]">
                  I've been using this product for a while now, and I have to
                  say, it's been good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
