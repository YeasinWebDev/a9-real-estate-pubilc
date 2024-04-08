import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='bg-[#f6f6f6] px-10 py-6 flex items-center justify-between'>
            <div className="left">
                <div className='w-14 flex  items-center gap-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBF7s-ne5PJS9YGzTUWdPvVXZxV61Le4Cb-cg3IgijE94jGIL2mIQMFOk34vQ37mDvys&usqp=CAU" alt="" />
                    <span className='text-4xl font-semibold'>Env<span className='text-[#016022]'>ato </span></span>
                </div>
            </div>
            <div className="mid flex items-center gap-10  font-semibold text-lg">
                <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white" : "p-4"}>Home</NavLink>
                <NavLink to={'/update'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white" : "p-4"}>Update Profile</NavLink>
                <NavLink to={'/user'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white" : "p-4"}>User Profile</NavLink>
            </div>
            <div className="btn">
                <Link to='/signin'>
                    <button className=" p-4 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#2a6c40] to-[#26a550]">Signin</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav