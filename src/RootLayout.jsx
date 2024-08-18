import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='sm:flex sm:gap-7 gap-4'>
        <div className=''>
        <Sidebar />
        </div>

        <div className='flex flex-col mt-4 sm:mt-0 sm:w-[1295px] relative'>
        <Navbar />

        <Outlet />
        </div>
    </div>
  )
}

export default RootLayout