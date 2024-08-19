import React from 'react'
import { IoBookOutline } from 'react-icons/io5'

const Resume = () => {
  return (
    <div className='bg-[#171717] rounded-bl-[10px] rounded-br-[10px] sm:rounded-bl-[14px] sm:rounded-br-[14px]'>
        <section id="education" className='pt-12 sm:px-5 px-2'>
            <div className="main ml-4 flex flex-col justify-center gap-8">
                <div className="heading flex items-center sm:gap-6 gap-4">
                    <div className='bg-[#373738] p-1 sm:p-2 sm:rounded-lg rounded-md flex items-center justify-center'>
                    <IoBookOutline className='text-xl text-[#DCCA87]'/>
                    </div>
                    <h2 className='text-2xl sm:text-4xl text-[#FFF] font-Josefin font-bold sm:font-semibold tracking-[0.55px]'>
                        Education
                    </h2>
                </div>
                <div className="element01 flex items-center sm:gap-6 gap-4">
                    <div className='p-1 sm:p-2 flex items-center justify-center'>
                        <div className="dot text-sm rounded-full bg-[#dcca87] text-[#dcca87]">111</div>
                    </div>
                    <div className="info">
                        h
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Resume