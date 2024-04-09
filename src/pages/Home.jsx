import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'

function Home() {
  const [allData, setAllData] = useState([])
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setAllData(data)
      })
  }, [])
  return (
    <div className='w-full  overflow-hidden'>
      <Hero />
      <div className='mt-5 mb-20'>
        <h1 className='flex items-center justify-center text-4xl font-semibold'>Discover Your Dream Garden: Where Nature Meets Luxury</h1>
        <div className='w-full h-fit flex flex-wrap mt-10 gap-8 items-center justify-center'>
          {
            allData.map((item, index) => {
              return (
                <Product  key={index} data={item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home