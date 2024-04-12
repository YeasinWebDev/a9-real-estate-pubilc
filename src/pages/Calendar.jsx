import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Calendar() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/calendar.json')
      .then(res => res.json())
      .then(d => {
        setData(d);
      });
        AOS.init({ duration: 500,offset: 200, });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h1 className='font-bold text-4xl flex justify-center text-[#297141] my-10'>Gardening Calendar</h1>
      <p className='flex justify-center lg:w-1/2 items-center mx-auto text-center space-y-4 px-10 lg:px-0 mb-5'>
        Growing a garden is a great experiment: sometimes it works, sometimes it doesn’t. The fun is in the trying! Use this calendar to keep up to date on tasks to do in the garden month by month, get ideas for kids projects in the garden, and to track when to start seeds specific to your region.
      </p>
      <div  className='flex flex-wrap gap-6 justify-center py-5'>
        {data.map((item,i) => (
          <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-delay={i * 100} key={item.id} className='flex flex-wrap gap-6 border-2 p-4 bg-[#f2f2f2] items-center rounded-xl cursor-pointer' onClick={() => handleItemClick(item)}>
            <div className="flex items-center justify-center flex-col">
              <h1 className='font-semibold mb-4 text-2xl'>{item.name}</h1>
              <div className='left w-52 h-52 rounded-xl'>
                <img className='rounded-xl' src={item?.img} alt="" />
              </div>
              <p className='my-2 text-lg font-semibold'>Tap to show Details</p>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div  data-aos="fade-down" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl md:w-[60%] w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedItem.name}</h2>
            <div className=''>
              {selectedItem?.keyPoints.map((e,i) =>(
                <p className=' mb-2 font-semibold text-xl flex-wrap'>{i + 1}. {e}</p>
              ))}
            </div>
            <button onClick={handleCloseDetails} className="mt-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
