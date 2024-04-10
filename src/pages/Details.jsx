import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Details() {
    const { id } = useParams()
    const [details, setdetails] = useState({})

    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => {
                setdetails(data.find(e => e.id === +id))
            })
    }, [id])

    useEffect(() => {
        AOS.init({ duration: 500, offset: 200, });
    }, [])
    console.log(details);

    return (
        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className='flex flex-col gap-5 items-center justify-center py-10 ' key={details.id}>
            <div className="img md:w-[70vh] px-2 md:px-0 rounded-xl flex items-center">
                <img className='rounded-xl' src={details.image} alt="" />
            </div>

            <div className='flex flex-col xl:mx-[32%]  p-6'>
                <h1 className='font-bold text-4xl'>{details.estate_title}</h1>
                <h1 className='font-semibold text-lg py-2 border-b-2 border-dashed'>Segment: <span className='text-sm text-green-600'>{details.segment_name}</span></h1>
                <p className='py-5 '>
                    <span className='font-semibold text-xl mr-2'> Description:</span> <br />
                    <span className='font-semibold  md:w-[50%] lg:w-[50%]'>{details.description}</span>
                </p>
                <p className='py-5 flex flex-wrap gap-3 items-center border-b-2 border-dashed'>
                    <span className='font-semibold text-xl mr-2 '> Facilities:</span> <br />
                    <span className='font-semibold flex flex-wrap gap-2'>{details?.facilities?.map(e => (
                         <span className='text-sm mx-2 text-black border-2 border-green-600 p-2 rounded-xl'>{e}</span>
                    ))}</span>
                </p>
                <div className='flex gap-4 mt-5'>
                    <div>
                        <h1 className='font-normal text-xl'>Location:</h1>
                        <h1 className='font-normal text-xl'>Area:</h1>
                        <h1 className='font-normal text-xl'>Status:</h1>
                        <h1 className='font-normal text-xl'>Price:</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>{details.location}</h1>
                        <h1 className='font-semibold text-xl'>{details.area}</h1>
                        <h1 className='font-semibold text-xl'>{details.status}</h1>
                        <h1 className='font-semibold text-xl'>{details.price}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details