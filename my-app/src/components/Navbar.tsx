"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaEnvelope, FaPencilAlt, FaStore } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg sticky top-0 bg-gradient-to-r from-zinc-800 to-zinc-950 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-white text-2xl">LOGO</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/" icon={<FaHome />}>Home</NavLink>
                <NavLink href="/about" icon={<FaInfoCircle />}>About</NavLink>
                <NavLink href="/store" icon={<FaStore/>}>Clothing Store</NavLink>
                <NavLink href="/apply" icon={<FaEnvelope />}>Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/apply" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaPencilAlt className="mr-2" />
              Apply Now
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/" icon={<FaHome />}>Home</MobileNavLink>
          <MobileNavLink href="/about" icon={<FaInfoCircle />}>About</MobileNavLink>
          <MobileNavLink href="/store" icon={<FaStore/>}>Clothing Store</MobileNavLink>
          <MobileNavLink href="/apply" icon={<FaEnvelope />}>Contact</MobileNavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-purple-700">
          <Link href="/apply" className="block w-full text-center px-5 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
            Apply Now
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; icon: React.ReactNode; children: React.ReactNode }> = ({ href, icon, children }) => (
  <Link href={href} className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300">
    {icon}
    <span className="ml-2">{children}</span>
  </Link>
);

const MobileNavLink: React.FC<{ href: string; icon: React.ReactNode; children: React.ReactNode }> = ({ href, icon, children }) => (
  <Link href={href} className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
    {icon}
    <span className="ml-2">{children}</span>
  </Link>
);

export default Navbar;