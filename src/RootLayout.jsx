import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='md:flex md:gap-7 gap-4'>
        <div className=''>
        <Sidebar />
        </div>

        <div className='flex flex-col mt-4 md:mt-0 md:w-[1295px] relative'>
        <Navbar />

        <Outlet />
        </div>
    </div>
  )
}

export default RootLayout