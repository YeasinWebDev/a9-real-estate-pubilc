import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


function Root() {
  return (
    <div>
      <Nav />
      <div className='w-full
       h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root