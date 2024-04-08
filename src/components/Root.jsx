import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'


function Root() {
  return (
    <div>
      <Nav />
      <div  className='px-20 py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Root