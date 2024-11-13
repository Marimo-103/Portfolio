import React, { useState } from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { IoBookOutline } from 'react-icons/io5'
import { PiDownloadBold } from 'react-icons/pi'
import Button from '../Layers/Button'
import resume from '/Common Images/MahmudulResume (1).pdf'


const Resume = () => {
  return (
    <div className='bg-[#171717] rounded-bl-[10px] rounded-br-[10px] md:rounded-bl-[14px] md:rounded-br-[14px]'>
        {/* education */}
        <section id="education" className='pt-12 md:px-5 px-2'>
            <div className="main ml-4 flex flex-col justify-center gap-8">
                <div className="heading flex items-center md:gap-6 gap-4 ml-[2px] md:m-0">
                    <div className='bg-[#373738] p-1 md:p-2 md:rounded-lg rounded-md flex items-center justify-center'>
                    <IoBookOutline className='text-xl text-[#DCCA87]'/>
                    </div>
                    <h2 className='text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px]'>
                        Education
                    </h2>
                </div>
                <div className="element01 md:ml-[61px] ml-[47px] relative before:content-[''] before:absolute before:top-2 md:before:left-[-48px] before:left-[-34px] md:before:h-3 md:before:w-3 before:h-2 before:w-2 before:bg-[#DCCA87] before:rounded-full after:content-[''] after:absolute after:top-[-34px] md:after:left-[-43px] after:left-[-31px] after:h-[170%] md:after:h-[190%] after:w-[1px] after:bg-[#DCCA87]">
                    <h3 className='text-white md:text-2xl text-lg font-Josefin font-normal'>
                    Daffodil International University, Bangladesh
                    </h3>
                    <p className='md:text-base text-sm text-[#DCCA78] font-Outfit my-1'>
                        Computer Science & Engineering ( 2024 - )
                    </p>
                    <p className='text-[#cecdcd] text-xs md:text-base font-Outfit tracking-[0.44px] leading-[130%]'>
                        I am currently erolled as a CSE student with the goal of being at the top of technology.
                    </p>
                </div>
                <div className="element02 md:ml-[61px] ml-[47px] relative before:content-[''] before:absolute before:top-2 md:before:left-[-48px] before:left-[-34px] md:before:h-3 md:before:w-3 before:h-2 before:w-2 before:bg-[#DCCA87] before:rounded-full after:content-[''] after:absolute after:top-[-34px] md:after:left-[-43px] after:left-[-31px] after:h-[0%] after:w-[1px] after:bg-[#DCCA87]">
                    <h3 className='text-white md:text-2xl text-lg font-Josefin font-normal'>
                        Creative IT institute
                    </h3>
                    <p className='md:text-base text-sm text-[#DCCA78] font-Outfit my-1'>
                        Front-End Development (2023 - 2024)
                    </p>
                    <p className='text-[#cecdcd] text-xs md:text-base font-Outfit tracking-[0.44px] leading-[130%]'>
                        I completed my Front-End development with REACT in this instituion within 8 months.
                    </p>
                </div>
                {/* <div className="element03 md:ml-[61px] ml-[47px] relative before:content-[''] before:absolute before:top-2 md:before:left-[-48px] before:left-[-34px] md:before:h-3 md:before:w-3 before:h-2 before:w-2 before:bg-[#DCCA87] before:rounded-full after:content-[''] after:absolute after:top-[-34px] md:after:left-[-43px] after:left-[-31px] after:h-[0%] after:w-[1px] after:bg-[#DCCA87]">
                    <h3 className='text-white md:text-2xl text-lg font-Josefin font-normal'>
                        Creative IT institute
                    </h3>
                    <p className='md:text-base text-sm text-[#DCCA78] font-Outfit my-1'>
                        Front-End Development (2023 - 2024)
                    </p>
                    <p className='text-[#cecdcd] text-xs md:text-base font-Outfit tracking-[0.44px] leading-[130%]'>
                        I completed my Front-End development with REACT in this instituion within 8 months.
                    </p>
                </div> */}
            </div>
        </section>

        {/* exp */}
        <section id="work" className='pt-20 md:px-5 px-2'>
            <div className="main ml-4 flex flex-col justify-center gap-8">
                <div className="heading flex items-center md:gap-6 gap-4 ml-[2px] md:m-0">
                    <div className='bg-[#373738] p-1 md:p-2 md:rounded-lg rounded-md flex items-center justify-center'>
                    <HiOutlineBriefcase className='text-xl text-[#DCCA87]'/>
                    </div>
                    <h2 className='text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px]'>
                        Work Experience
                    </h2>
                </div>
                <div className="element01 md:ml-[61px] ml-[47px] relative before:content-[''] before:absolute before:top-2 md:before:left-[-48px] before:left-[-34px] md:before:h-3 md:before:w-3 before:h-2 before:w-2 before:bg-[#DCCA87] before:rounded-full after:content-[''] after:absolute after:top-[-34px] md:after:left-[-43px] after:left-[-31px] after:h-[55%] after:w-[1px] after:bg-[#DCCA87]">
                    <h3 className='text-white md:text-2xl text-lg font-Josefin font-normal'>
                        Freelance
                    </h3>
                    <p className='md:text-base text-sm text-[#DCCA78] font-Outfit my-1'>
                        Fiverr.com ( 2024 - )
                    </p>
                    <p className='text-[#cecdcd] text-xs md:text-base font-Outfit tracking-[0.44px] leading-[130%]'>
                        I provide high quality service to my clients by meeting their demands end to end.
                    </p>
                </div>
                {/* <div className="element02 md:ml-[61px] ml-[47px] relative before:content-[''] before:absolute before:top-2 md:before:left-[-48px] before:left-[-34px] md:before:h-3 md:before:w-3 before:h-2 before:w-2 before:bg-[#DCCA87] before:rounded-full after:content-[''] after:absolute after:top-[-34px] md:after:left-[-43px] after:left-[-31px] after:h-[190%] after:w-[1px] after:bg-[#DCCA87]">
                    <h3 className='text-white md:text-2xl text-lg font-Josefin font-normal'>
                        Creative IT institute
                    </h3>
                    <p className='md:text-base text-sm text-[#DCCA78] font-Outfit my-1'>
                        Front-End Development (2023 - 2024)
                    </p>
                    <p className='text-[#cecdcd] text-xs md:text-base font-Outfit tracking-[0.44px] leading-[130%]'>
                        I completed my Front-End development with REACT in this instituion within 8 months.
                    </p>
                </div>
                <div className="element03 md:ml-[61px] ml-[47px] relative before:content-[''] before:absolute before:top-2 md:before:left-[-48px] before:left-[-34px] md:before:h-3 md:before:w-3 before:h-2 before:w-2 before:bg-[#DCCA87] before:rounded-full after:content-[''] after:absolute after:top-[-34px] md:after:left-[-43px] after:left-[-31px] after:h-[0%] after:w-[1px] after:bg-[#DCCA87]">
                    <h3 className='text-white md:text-2xl text-lg font-Josefin font-normal'>
                        Creative IT institute
                    </h3>
                    <p className='md:text-base text-sm text-[#DCCA78] font-Outfit my-1'>
                        Front-End Development (2023 - 2024)
                    </p>
                    <p className='text-[#cecdcd] text-xs md:text-base font-Outfit tracking-[0.44px] leading-[130%]'>
                        I completed my Front-End development with REACT in this instituion within 8 months.
                    </p>
                </div> */}
            </div>
        </section>

        <section id="resume" className='pt-16 md:px-5 mb-4 px-2'>
            <div className="main ml-4">
                <h2 className='text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px] mb-7'>
                    Doccuments 
                </h2>
                <div className="flex sm:gap-8 sm:justify-normal justify-between">
                    <div className="resume">
                        <Button href={resume} text={'Download Resume'}/>
                    </div>
                    <div className="CV">
                        <Button href={resume} text={'Download CV'}/>
                    </div>
                </div>
            </div>

        </section>

        {/* skills bar */}
        <section id="skills" className='pt-16 md:px-5 mb-4 px-2'>
            <div className="main ml-4">
                <h2 className='text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px] mb-5'>
                    My Skills
                </h2>
                <div className="flex md:flex-row flex-col gap-x-4 gap-y-8">
                    <div className='md:w-[50%] w-[95%]'>
                        <h3 className='text-lg md:text-xl text-[#FFF] font-Outfit font-semibold md:font-medium tracking-[0.55px] mb-4 ml-2'>
                            Basic Languages
                        </h3>
                        <div className="box p-5 md:rounded-[14px] rounded-[8px] bg-[#262627] w-full md:w-[90%] flex flex-col gap-5">
                        <div className="child flex flex-col gap-2">
                            <p className='text-base md:text-lg text-white font-Outfit'>
                                Figma
                            </p>
                            <div className="fill w-full h-[5px] bg-[#5b5b5d] rounded-2xl">
                                <div className="fill w-[80%] h-[5px] bg-gradient-to-r from-[#b09636] to-[#DCCA87] rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="child flex flex-col gap-2">
                            <p className='text-base md:text-lg text-white font-Outfit'>
                                HTML
                            </p>
                            <div className="fill w-full h-[5px] bg-[#5b5b5d] rounded-2xl">
                                <div className="fill w-[94%] h-[5px] bg-gradient-to-r from-[#b09636] to-[#DCCA87] rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="child flex flex-col gap-2">
                            <p className='text-base md:text-lg text-white font-Outfit'>
                                CSS
                            </p>
                            <div className="fill w-full h-[5px] bg-[#5b5b5d] rounded-2xl">
                                <div className="fill w-[80%] h-[5px] bg-gradient-to-r from-[#b09636] to-[#DCCA87] rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="child flex flex-col gap-2">
                            <p className='text-base md:text-lg text-white font-Outfit'>
                                JavaScript
                            </p>
                            <div className="fill w-full h-[5px] bg-[#5b5b5d] rounded-2xl">
                                <div className="fill w-[69%] h-[5px] bg-gradient-to-r from-[#b09636] to-[#DCCA87] rounded-2xl"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-[95%]'>
                        <h3 className='text-lg md:text-xl text-[#FFF] font-Outfit font-semibold md:font-medium tracking-[0.55px] mb-4 ml-2'>
                            Libraries & Frameworks
                        </h3>
                        <div className="box p-5 md:rounded-[14px] rounded-[8px] bg-[#262627] w-full md:w-[90%] flex flex-col gap-5">
                        <div className="child flex flex-col gap-2">
                            <p className='text-base md:text-lg text-white font-Outfit'>
                                Bootstrap
                            </p>
                            <div className="fill w-full h-[5px] bg-[#5b5b5d] rounded-2xl">
                                <div className="fill w-[88%] h-[5px] bg-gradient-to-r from-[#b09636] to-[#DCCA87] rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="child flex flex-col gap-2">
                            <p className='text-base md:text-lg text-white font-Outfit'>
                                TailwindCSS
                            </p>
                            <div className="fill w-full h-[5px] bg-[#5b5b5d] rounded-2xl">
                                <div className="fill w-[80%] h-[5px] bg-gradient-to-r from-[#b09636] to-[#DCCA87] rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="child flex flex-col gap-2">
                            <p className='text-base md:text-lg text-white font-Outfit'>
                                REACT Js
                            </p>
                            <div className="fill w-full h-[5px] bg-[#5b5b5d] rounded-2xl">
                                <div className="fill w-[55%] h-[5px] bg-gradient-to-r from-[#b09636] to-[#DCCA87] rounded-2xl"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    </div>
  )
}

export default Resume