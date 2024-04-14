import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/ContextProvider'
import { updateProfile } from 'firebase/auth';
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';
import { RxCrossCircled } from "react-icons/rx";
import 'aos/dist/aos.css';
import AOS from 'aos';

function UserPage() {
  const { user, setUser } = useContext(AuthContext)
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [show, setShow] = useState(false);

  const emailVerifiedStatus = user.emailVerified ? "Yes" : "No";

  const handleSave = () => {
    if (name === "" && photoURL === "") {
      return toast('Please fill in all fields');
    }
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    })
    setUser(prevUser => ({
      ...prevUser,
      displayName: name,
      photoURL: photoURL
    }));
    setShow(false);
  };

  useEffect(() => {
    AOS.init({ duration: 500, offset: 200, });
  }, [])
  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {
        show && (
          <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-gray-900 bg-opacity-50 '>
            <div className='bg-white p-8 rounded-lg relative'>
              <h2 className='text-2xl flex justify-center mb-10 font-semibold '>Update Your Profile</h2>
              <div>
                <label htmlFor="name" className='font-semibold text-xl'>Name:</label>
                <input
                  type="text"
                  id="name"
                  required
                  className='mb-6 ml-2 rounded-xl bg-transparent px-8 py-3 outline-none border-2 border-green-600'
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="photoURL" className='font-semibold text-xl'>Photo URL:</label>
                <input
                  type="text"
                  id="photoURL"
                  required
                  className='mb-6 ml-2 rounded-xl bg-transparent px-8 py-3 outline-none border-2 border-green-600'
                  onChange={e => setPhotoURL(e.target.value)}
                />
              </div>
              <div className='w-full flex justify-end mt-4'>
                <button onClick={handleSave} className='border-2 border-green-600 hover:text-white hover:bg-green-600  px-4 py-2 rounded-xl'>Save</button>
              </div>
              <div onClick={() => setShow(false)} className='absolute top-5 right-5 cursor-pointer'>
                <RxCrossCircled size={25} />
              </div>
            </div>
          </div>
        )
      }

      <div className='flex flex-col  items-center py-10 text-black gap-2'>
        <div className='w-30 rounded-full'>
          <img className='w-full h-full object-cover rounded-full' src={user.photoURL} alt="photo" />
        </div>
        <div className='flex flex-col gap-3 p-3'>
          <h1 className='font-semibold  text-2xl'>Name: <span className='font-semibold text-lg ml-3'> {user.displayName ? user.displayName : "not found"}</span></h1>
          <h1 className='font-semibold  text-2xl'>Email: <span className='font-semibold text-lg ml-3'> {user.email ? user.email : "not found"}</span></h1>
          <h1 className='font-semibold  text-2xl'>Verified: <span className='font-semibold text-lg ml-3'> '{emailVerifiedStatus}'</span></h1>
          <h1 className='font-semibold  text-2xl'>provider: <span className='font-semibold text-lg ml-3'> '{user.providerId}'</span></h1>
        </div>
        <button className='bg-green-600 p-3 rounded-xl text-xl text-white mt-5 ' onClick={() => setShow(true)}>Edit</button>
      </div>
    </div>
  )

}

export default UserPage