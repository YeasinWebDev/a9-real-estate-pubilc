import React from 'react'
import {Helmet} from "react-helmet";

function ContactUs() {
    return (
        <div className='flex justify-center flex-col items-center py-10'>
             <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <h1 className='font-semibold text-4xl'>Contact Us</h1>

            <form className='flex flex-col '>
                <label className='font-semibold text-xl my-2 '>Topic: <br />
                    <input className='rounded-xl w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="text" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Name:  <br />
                    <input className='rounded-xl w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="text" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Email Address: <br />
                    <input className='rounded-xl w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="email" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Country: <br />
                    <input className='rounded-xl w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="text" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Message: <br />
                    <textarea  className='rounded-xl bg-white border-2 border-gray-300 ml-2 xl:w-[30vw] xl:h-[10vw] w-[80vw] h-[20vw]' type="text" required></textarea>
                </label>
                <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border-none rounded '>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs