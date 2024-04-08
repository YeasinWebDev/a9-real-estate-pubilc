import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/ContextProvider'
import { Tooltip } from 'react-tooltip'

function Nav() {
    const { user,LogOut } = useContext(AuthContext)
    const logoutClick = () =>{
        LogOut()
    }
    return (
        <div className='bg-[#f6f6f6] px-10 py-6 flex items-center  justify-center gap-[20vw] overflow-hidden'>
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
                {
                    user ? (
                        <div className='w-10 h-10 rounded-full flex items-center gap-2'>
                            {user?.photoURL ? (
                                <img className='w-full h-full rounded-full' src={user?.photoURL || 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} data-tooltip-id="img"
                                    data-tooltip-content={user.displayName} />

                            ) : (
                                <img className='w-full h-full rounded-full' src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' />
                            )}
                            <button onClick={logoutClick} className=" p-4 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#2a6c40] to-[#26a550]">LogOut</button>

                            <Tooltip
                                id="img"
                            />
                        </div>
                    )
                        :
                        <Link to='/signin'>
                            <button className=" p-4 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#2a6c40] to-[#26a550]">Signin</button>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Nav