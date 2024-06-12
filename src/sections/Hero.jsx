import React, { useEffect } from 'react'
import heroimg from '../assets/heroimg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      dealay: 100,
    });
  }, [])

  return (
    <>
    <section id="hero" className="w-full h-[600px] m-auto bg-cover bg-center rounded-x1 flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroimg})` }}>
    <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] '>Step Into Your New Beginning</h1>
    <p data-aos="zoom-in" className='text-white text-xl lg:pr[500px] pr-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, modi?</p>
    </section>

    {/*form dito*/}
    <div data-aos="zoom-in" className='light bg-transparent z-10'>
      <div data-aos="zoom-in" id='form' className='bg-[#F0F0F0] lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14'> 
      <div className='w-full'>
        <h1 className='text-black font-semibold'>LOCATION</h1>
        <input type="text" placeholder='Enter a city or place' className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]' />
     </div>
      <div className='w-full'>
      <h1 className='text-black font-semibold'>TYPE</h1>
      <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
        <option value="" disabled selected>Select Property</option>
        <option value="Option1">House</option>
        <option value="Option2">Condo</option>
        
      </select>
       </div>
      <div className='w-full'>
      <h1 className='text-black font-semibold'>CATEGORY</h1>
      <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
        <option value="" disabled selected>Select Property</option>
        <option value="Option1">Townhouse</option>
        <option value="Option2">Single Attached</option>
        <option value="Option3">Single Detached</option>
      </select>
       </div>
       <div className='w-full'>
        <button className='bg-red-600 hover:bg-red-800 text-white text-lg p-4 w-full font-semibold rounded-xl cursor-pointer mt-6'>SUBMIT</button>

       </div>

      </div>

    </div>
    </>
  )
}

export default Hero