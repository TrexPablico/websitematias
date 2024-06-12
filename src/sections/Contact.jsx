import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast' 



const Contact = () => {
const form = useRef()

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3i5nurf', 'template_45u1dxq', form.current, {
        publicKey: 'xFX7lbU3Y_kHT7BOV',
      })
      .then(
        () => {
          toast.success('Message Sent');
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
      e.target.reset()

      useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          dealay: 100,
        });
      }, [])
  };

  return (
    <form ref={form} onSubmit={sendEmail} action="">
    <div className='bg-transparent pb-20'>
      
      <section id='contact' className='bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10'>
      <div data-aos="zoom-in" className='bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>
    <h1 className='text-2xl text-black font-semibold'>Send us a message</h1>
    <input name="user_name" type="text" placeholder='Enter your name here'  className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
    <input name="user_email" type="email" placeholder='Enter your email here'  className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
    <input name="user_number" type="number" placeholder='Enter your mobile number here'  className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
    <textarea name="message" id="" cols="30" rows="5" placeholder='Enter your message here' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'></textarea>
    <button className='bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black hover:text-white'>SEND MESSAGE</button>
      </div>

      <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-red-500'>Contact us</h1>
      <h1 data-aos="zoom-in" data-aos-delay="400" className='text-black text-[40px] font-semibold leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, pariatur?</h1>
      <button onClick={() => toast.success('Message Sent!')} type='submit' className='bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black hover:text-white'>Sample Button</button>
      <Toaster />
      </div>
      
      </section>
      
    </div>
    </form>
  )
}

export default Contact