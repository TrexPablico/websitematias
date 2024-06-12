import React, { useEffect } from 'react'
import about5 from '../assets/about5.jpg'
import about2 from '../assets/about2.jpg'
import about from '../assets/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      dealay: 100,
    });
  }, [])

  return (
    <section id='about' className='bg-transparent w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
      <div>
        <img data-aos="zoom-in" src={about5} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px] object-cover' />
        </div>
        <div className='flex flex-col justify-center items-start gap-8'>
          <h1 data-aos="zoom-in" className='text-red-500 text-2xl font-semibold'> WHO WE ARE</h1>
          <h1 data-aos="zoom-in" className='text-xl text-black text-[40px] font-semibold leading-10'>Lorem ipsum dolor sit amet.</h1>
          <h1 data-aos="zoom-in" className='text-xl text-gray-600 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, laudantium rem voluptatem perspiciatis ullam perferendis..</h1>
          <button data-aos="zoom-in" className='bg-red-600 hover:bg-red-800 text-white text-lg p-4 font-semibold rounded-xl cursor-pointer'>READ MORE</button>
        </div>
    </section>
  )
}

export default About