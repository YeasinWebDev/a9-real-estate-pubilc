import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


function Root() {
  return (
    <div className='w-full h-full'>
      <Nav />
      <div className='w-full h-fit bg-white'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root