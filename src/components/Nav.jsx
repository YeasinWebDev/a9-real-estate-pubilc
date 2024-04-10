import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/ContextProvider'
import { Tooltip } from 'react-tooltip'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Nav() {
    const { user, LogOut, loading } = useContext(AuthContext)

    useEffect(() => {
        AOS.init({ duration: 1000, offset: 200, });
    }, [])

    const logoutClick = () => {
        <Navigator to='/'/>
        LogOut()
    }
    return (
        <div data-aos="fade-down" data-aos-easing="ease-in-sine" className="navbar  bg-[#f6f6f6] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Home</NavLink>
                        <NavLink to={'/update'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Update Profile</NavLink>
                        <NavLink to={'/user'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Profile</NavLink>
                    </ul>
                </div>
                <div className="btn btn-ghost text-xl">
                    <div className='md:w-14 w-12 flex  items-center gap-3'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBF7s-ne5PJS9YGzTUWdPvVXZxV61Le4Cb-cg3IgijE94jGIL2mIQMFOk34vQ37mDvys&usqp=CAU" alt="" />
                        <span className='md:text-4xl text-2xl font-semibold'>Env<span className='text-[#016022]'>ato </span></span>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Home</NavLink>
                    <NavLink to={'/update'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Update Profile</NavLink>
                    <NavLink to={'/user'} className={({ isActive }) => isActive ? "bg-[#016022] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>User Profile</NavLink>
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? (
                        <div className='w-10 h-10 rounded-full flex items-center gap-2 mr-28'>
                            <img className='w-full h-full rounded-full object-cover' src={user.photoURL} data-tooltip-id="img"
                                data-tooltip-content={user.displayName} />
                            <button onClick={logoutClick} className=" md:p-4 p-3 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#2a6c40] to-[#26a550]">LogOut</button>

                        </div>
                    )
                        :
                        (<div>
                            <Link to='/signin'>
                                <button className="w-full md:p-4 p-3 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#2a6c40] to-[#26a550]">Signin</button>
                            </Link>
                        </div>)
                }
                <Tooltip
                    id="img"
                />
            </div>
        </div>
    )
}

export default Nav


