import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import { FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Properties', path: 'properties' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="bg-[#f3f3f3] flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30">
      <div id="logo">
        <img src={logo} alt="company logo" className="lg:w-[30px] w-[50px] object-cover" />
      </div>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className="text-black text-2xl cursor-pointer" /> : <FaBars className="text-black text-2xl cursor-pointer" />}
        </div>
      </div>

      <div
        className={`absolute top-[80px] left-0 w-full bg-slate-800 p-4 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
          <div className='flex justify-center items-center lg:gap-8 gap-2'>
            <div className='flex justify-center items-center lg:gap-3 gap-1'>
              <FaPhoneAlt className='size-5 text-red-600' />
              <h1 className='lg:text-xl text-sm text-black font-semibold'> +63 9270679732</h1>
            </div>

          </div>
      
    </nav>
  );
};

export default Header;
