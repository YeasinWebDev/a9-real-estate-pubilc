import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Product({ data, i }) {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 200, });
  }, [])

  return (
    <div>
      <div data-aos="fade-up" data-aos-delay={i * 100} data-aos-anchor-placement="center-bottom" className="card w-96 shadow-xl">
        <figure className="">
          <img src={data.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{data.estate_title}</h2>
          <p className='font-semibold text-sm'>Segment:  <span className='text-sm'>" {data.segment_name} "</span></p>
          <p className='font-semibold text-sm'>Status:  <span className='text-sm'>" {data.status} "</span></p>
          <p className='font-semibold text-sm'>Price:  <span className='text-sm'>" {data.price} "</span></p>
          <div className="card-actions border-t-2 border-dashed py-4">
            <Link to={`/details/${data.id}`}>
              <button className="btn border-2 bg-transparent border-[#016022] text-black hover:bg-[#093a1a] hover:text-white hover:bg-none">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Product