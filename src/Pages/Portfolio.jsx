import React, { useState } from 'react'
import { motion } from 'framer-motion';
import project01 from '/Projects/Web Developments/project-1.jpg'
import project02 from '/Projects/Web Developments/project-2.png'
import project03 from '/Projects/Web Developments/project-3.jpg'
import project04 from '/Projects/Web Developments/project-4.png'
import project05 from '/Projects/Web Developments/project-5.png'

const Project = ({ProjectTitle, tag, src}) => {
  return (
    <>
      <div className="box rounded-[10px] md:rounded-[14px] bg-[#262627]">
        <div className="img md:w-[350px] md:h-[350px] w-[170px] h-[170px]">
          <img src={src} alt="" className='w-full h-full rounded-tl-[10px] rounded-tr-[10px] md:rounded-tl-[14px] md:rounded-tr-[14px]'/>
        </div>
        <div className="text p-2 md:p-4">
          <h2 className='md:text-2xl text-base text-[#F5F5F3] font-Josefin md:font-semibold font-medium leading-[130%] tracking-[0.34px] mt-2 md:mt-4'>
            {ProjectTitle}
          </h2>
          <p className='md:text-sm text-xs text-[#d5d5d5] md:font-medium font-Outfit leading-[130%] tracking-[0.54px] mt-1'>
            {tag}
          </p>
        </div>
      </div>
    </>
  )
}

const Portfolio = () => {

  let [activeTab, setActiveTab] = useState('all')

  return (
    <div className='bg-[#171717] rounded-bl-[10px] rounded-br-[10px] md:rounded-bl-[14px] md:rounded-br-[14px] pb-5'>
      <div className="crumbs flex gap-5 md:gap-12 items-center justify-start pt-12 md:px-5 px-2">
        <p onClick={()=> setActiveTab('all')} className={`md:text-lg text-sm font-Josefin md:font-medium tracking-[0.45px] cursor-pointer ${ activeTab === 'all' ? "text-[#DCCA87]" : "text-[#F5F5F3]"}`}>
          All
        </p>
        <p onClick={()=> setActiveTab('design')} className={`md:text-lg text-sm font-Josefin md:font-medium tracking-[0.45px] cursor-pointer ${ activeTab === 'design' ? "text-[#DCCA87]" : "text-[#F5F5F3]"}`}>
          Web Designs
        </p>
        <p onClick={()=> setActiveTab('dev')} className={`md:text-lg text-sm font-Josefin md:font-medium tracking-[0.45px] cursor-pointer ${ activeTab === 'dev' ? "text-[#DCCA87]" : "text-[#F5F5F3]"}`}>
          Web Developments
        </p>
      </div>

      {/* all projects */}
      {
        activeTab === 'all' && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
          <section id="all" className='pt-12 md:px-5 px-2'>
            <div className="main flex justify-between gap-y-6 md:gap-y-16 flex-wrap">
              <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project02} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project03} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project04} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project05} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project02} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
            </div>
          </section>
          </motion.div>
        )
      }

      {
        activeTab === 'dev' && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <section id="webDev" className='pt-12 md:px-5 px-2'>
              <div className="main flex justify-between gap-y-6 md:gap-y-16 flex-wrap">
                <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
                <Project src={project02} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
                <Project src={project02} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
                <Project src={project02} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
                <Project src={project02} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
                <Project src={project02} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              </div>
            </section>
          </motion.div>
        )
      }

      {
        activeTab === 'design' && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
          <section id="webDesign" className='pt-12 md:px-5 px-2'>
            <div className="main flex justify-between gap-y-6 md:gap-y-16 flex-wrap">
              <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
              <Project src={project01} ProjectTitle={'Project Title'} tag={'Web Developmet'}/>
            </div>
          </section>
          </motion.div>
        )
      }
    </div>
  )
}

export default Portfolio