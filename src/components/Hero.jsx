import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdOutlineArrowForward } from "react-icons/md";

import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { Link } from 'react-router-dom';

export default function App() {
    useEffect(() =>{
        AOS.init({duration:1000,offset: 200,});
    },[])
    return (
        <div data-aos="fade-up" data-aos-easing="ease-in-sine" className=' w-full mt-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide style={{ backgroundImage: 'url(../../assets/hero-1.jpg)', width: '100%', height: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='flex items-center justify-center flex-col w-full py-[9rem] h-full'>
                        <h1 className='bg-gradient-to-r from-[#259b2a] to-[#024105] text-white w-fit px-5 py-2 rounded-xl'>Best Gardening in the town</h1>
                        <h1 className='font-bold xl:text-7xl md:text-5xl  text-3xl my-6 text-white'>Planet-friendly gradening</h1>
                        <p className='text-white lg:w-[30%] md:w-[50%] px-2 md:px-0 my-3 flex items-center justify-center text-center'>
                            we consistently aim to deliver the same reliable, prompt professional and friendly service synonymous
                        </p>
                        <Link to={'/contact'}><button className='md:px-8 md:py-5 p-4 bg-white text-black hover:bg-gradient-to-r from-[#259b2a] to-[#024105] hover:text-white rounded-lg flex gap-3 items-center text-xl group transition-all duration-300 mt-8'>
                            Contact us
                            <div className='transition-transform transform-gpu group-hover:rotate-[-45deg]'><MdOutlineArrowForward size={25} /></div>
                        </button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(../../assets/hero-2.jpg)', width: '100%', height: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='flex items-center justify-center flex-col w-full py-[9rem] h-full'>
                        <h1 className='bg-gradient-to-r from-[#259b2a] to-[#024105] text-white w-fit px-5 py-2 rounded-xl'>Best Gardening in the town</h1>
                        <h1 className='font-bold xl:text-7xl md:text-5xl  text-2xl my-6 text-white whitespace-nowrap'>Let's bring life to your garden</h1>
                        <p className='text-white lg:w-[30%] md:w-[50%] px-2 md:px-0 my-3 flex items-center justify-center text-center'>
                            Passion for Full-Service Landscape Management has been our driving force since 1999, and our commitment to customer satisfaction remains our top priority.
                        </p>
                        <Link to={'/contact'}><button className='md:px-8 md:py-5 p-4 bg-white text-black hover:bg-gradient-to-r from-[#259b2a] to-[#024105] hover:text-white rounded-lg flex gap-3 items-center text-xl group transition-all duration-300 mt-8'>
                            Contact us
                            <div className='transition-transform transform-gpu group-hover:rotate-[-45deg]'><MdOutlineArrowForward size={25} /></div>
                        </button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(../../assets/hero-3.jpg)', width: '100%', height: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='flex items-center justify-center flex-col w-full py-[9rem] h-full'>
                        <h1 className='bg-gradient-to-r from-[#259b2a] to-[#024105] text-white w-fit px-5 py-2 rounded-xl'>Service Quality</h1>
                        <h1 className='font-bold xl:text-7xl md:text-5xl  text-3xl my-6 text-white'>We serve the best work</h1>
                        <p className='text-white lg:w-[30%] md:w-[50%] px-2 md:px-0 my-3 flex items-center justify-center text-center'>
                            Our unwavering dedication to excellence ensures top-tier service in landscaping, maintenance, design, and installation, guaranteeing your complete satisfaction with every project.
                        </p>
                        <Link to={'/contact'}><button className='md:px-8 md:py-5 p-4 bg-white text-black hover:bg-gradient-to-r from-[#259b2a] to-[#024105] hover:text-white rounded-lg flex gap-3 items-center text-xl group transition-all duration-300 mt-8'>
                            Contact us
                            <div className='transition-transform transform-gpu group-hover:rotate-[-45deg]'><MdOutlineArrowForward size={25} /></div>
                        </button></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
} 1