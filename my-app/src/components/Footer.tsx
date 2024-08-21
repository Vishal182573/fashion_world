import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">University of Design</h3>
            <p className="text-sm leading-relaxed">Empowering creativity, shaping futures through innovative design education.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-400 transition duration-300">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-yellow-400 transition duration-300">Programs</Link></li>
              <li><Link href="/admissions" className="hover:text-yellow-400 transition duration-300">Admissions</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                <span>123 Design Street, Creativity City, 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-yellow-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-400" />
                <span>info@wud.edu</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400 transition duration-300">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400 transition duration-300">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400 transition duration-300">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} University of Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;