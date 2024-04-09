import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer flex flex-col items-center justify-center">
      <div className='main grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 text-white xl:px-28 xl:py-20 md:p-10 p-5 gap-2  md:gap-0'>
        <div className="footer-column">
          <h3 className='font-bold text-2xl mb-2'>About us</h3>
          <p className='w-[80%]'>Garden Services provides full & comprehensive services in irrigation, landscape, maintenance, and professional tree care.</p>
        </div>
        <div className="footer-column">
          <h3 className='font-bold text-2xl mb-2 border-b-2 border-white w-fit'>Quick Link</h3>
          <ul>
            <li className='mb-2'><Link to="#">Home</Link></li>
            <li className='mb-2'><Link to="#">About</Link></li>
            <li className='mb-2'><Link to="#">Service</Link></li>
            <li className='mb-2'><Link to="#">Blog</Link></li>
            <li className='mb-2'><Link to="#">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='font-bold text-2xl mb-2 border-b-2 border-white w-fit'>Contact Info</h3>
          <p className='mb-2'>Address: Orange, USA</p>
          <p className='mb-2'>Email: <Link to="mailto:garda@mail.com">garda@mail.com</Link></p>
          <p className='mb-2'>Phone: <Link to="tel:+880123456789">+880 123 456 789</Link></p>
          <p className='mb-2'>Work Time:</p>
          <p className='mb-2'>Mon-Fri: 08.00 – 16.00</p>
        </div>
        <div className="footer-column">
          <h3 className='font-bold text-2xl mb-2 border-b-2 border-white w-fit'>Solutions</h3>
          <ul>
            <li className='mb-2'><Link to="#">Leadership</Link></li>
            <li className='mb-2'><Link to="#">Terms</Link></li>
            <li className='mb-2'><Link to="#">Privacy Policy</Link></li>
            <li className='mb-2'><Link to="#">Licenses</Link></li>
            <li className='mb-2'><Link to="#">Tree Planting</Link></li>
          </ul>
        </div>
      </div>
      <p className='flex justify-center text-white'>© 2024 Envato . All rights reserved</p>
    </footer>
  )
}

export default Footer