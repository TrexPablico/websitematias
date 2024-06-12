import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaBuilding, FaMobile, FaFax, FaArrowUp} from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'


const Footer = () => {
  return (
    <>
    <footer className='bg-gray-800 w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-10'>
    <div className='flex flex-col justify-center items-start gap-5'>
      <h1 className='text-white text-2xl font-semibold'>About Us</h1>
      <p className='text-slate-200 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi, iusto omnis voluptates iure rerum sed!</p>
      <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
        <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white curson-pointer transform hover:scale-110 transition-transform duration-300'>
          <FaFacebookF className='size-5' />
        </div>
        <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white curson-pointer transform hover:scale-110 transition-transform duration-300'>
          <FaInstagram className='size-5' />
        </div>
        <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white curson-pointer transform hover:scale-110 transition-transform duration-300'>
          <FaTwitter className='size-5' />
        </div>

      </div>
      
    </div>
    <div className='flex flex-col justify-center items-start gap-5'>
      <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
      <div className='flex justify-center items-center gap-3'>
        <FaBuilding className='text-white size-5' />
        <p className='text-slate-200 '>Address mo tol</p>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <FaMobile className='text-white size-5' />
        <p className='text-slate-200 '>number mo tol</p>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <IoMdMail className='text-white size-5' />
        <p className='text-slate-200 '>giomatias@email.com</p>
      </div>
    </div>
    
    </footer>
    {/* slide to top*/}
    <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
      <Link to='hero' spy={true} offset={-100} smooth={true}>
      <FaArrowUp className='size-6 text-white'/></Link>

    </div>
    <div className='flex justify-center items-center bg-gray-800'>
      <p className='text-slate-200'>copyright sample tag TREX</p>
    </div>
    </>
  )
}

export default Footer