import React, { useEffect } from 'react';
import { property } from '../components/export';
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Properties = ({ selectedCategory }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      dealay: 100,
    });
  }, []);

  // Filter properties based on the selected category
  const filteredProperties = selectedCategory
    ? property.filter((item) => item.category === selectedCategory)
    : property;

  return (
    <div className='bg-transparent'>
      <section id='properties' className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10'>
        <div data-aos="zoom-in" className='flex flex-col justify-center items-start gap-4'>
          <h1 className='text-red-500'>PROPERTIES</h1>
          <h1 className='text-black text-4xl font-semibold'>Explore Properties</h1>
        </div>

        {/*property grid na dito sa baba*/}

        <div id='grid-box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {
            property.map((item, index)=> (
              <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white rounded-xl w-full'>
                <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end' style={{backgroundImage:`url(${item.images})`}}>
<div id='top' className='flex justify-between items-end w-full'>
  <div><button className='px-3 py-1 bg-red-600 text-white hover:bg-white hover:text-black rounded-full text-[13px]'>Featured</button></div>

  <div className='flex justify-between items-center gap-3'> 
  <button className='px-3 py-1 bg-red-600 text-white hover:bg-white hover:text-black rounded-full text-[13px]'>Available</button>
  </div>
</div>
<div id='bottom' className='flex justify-between items-end w-full'>
  <div className='flex justify-start items-center gap-2'>
    <FaMapMarkerAlt className='size-4 text-white' />
    <h1 className='text-white'>{item.address}</h1>
  </div>

  <div className='flex justify-center items-center gap-4'> 
    <FaCamera className='size-4 text-white' />
  </div>

</div>
                </div>
                <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
                  <h1 className='text-xl text-black font-semibold'>{item.name}</h1>
                  <h1 className='text-2xl text-red-600 font-bold'>{item.price}</h1>
                  <div id='icons' className='flex justify-center items-start gap-4'>
                    <div className='flex justify-center items-center gap-2'>
                    <FaBath className='size-5 text-red-400' />
                    <h1>{item.bath}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                    <FaBed className='size-5 text-red-400' />
                    <h1>{item.bed}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                    <MdSpaceDashboard className='size-5 text-red-400' />
                    <h1>{item.lotarea}</h1>
                    </div>
                    

                  </div>

                  <div className='w-full h-[1px] bg-gray-200 mt-8'></div>

                  

                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Properties