"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaEnvelope, FaPencilAlt, FaStore, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-pink-600 text-3xl">LOGO</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink href="/" icon={<FaHome />}>Home</NavLink>
                <NavLink href="/about" icon={<FaInfoCircle />}>About</NavLink>
                <NavLink href="/store" icon={<FaStore/>}>Store</NavLink>
                <NavLink href="/apply" icon={<FaEnvelope />}>Contact</NavLink>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/apply" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300">
              <FaPencilAlt className="mr-2" />
              Apply Now
            </Link>
          </motion.div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-600 hover:text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <FaBars className="block h-6 w-6" /> : <FaTimes className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/" icon={<FaHome />}>Home</MobileNavLink>
          <MobileNavLink href="/about" icon={<FaInfoCircle />}>About</MobileNavLink>
          <MobileNavLink href="/store" icon={<FaStore/>}>Store</MobileNavLink>
          <MobileNavLink href="/apply" icon={<FaEnvelope />}>Contact</MobileNavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <Link href="/apply" className="block w-full text-center px-5 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-md transition duration-300">
            Apply Now
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; icon: React.ReactNode; children: React.ReactNode }> = ({ href, icon, children }) => (
  <Link href={href} className="text-gray-600 hover:bg-pink-100 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300">
    {icon}
    <span className="ml-2">{children}</span>
  </Link>
);

const MobileNavLink: React.FC<{ href: string; icon: React.ReactNode; children: React.ReactNode }> = ({ href, icon, children }) => (
  <Link href={href} className="text-gray-600 hover:bg-pink-100 hover:text-pink-600  px-3 py-2 rounded-md text-base font-medium flex items-center transition duration-300">
    {icon}
    <span className="ml-2">{children}</span>
  </Link>
);

export default Navbar;