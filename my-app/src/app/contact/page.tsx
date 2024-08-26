"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <motion.div 
          className="bg-white shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="text-pink-500 text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-600">info@fashionwebsite.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-pink-500 text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-pink-500 text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-gray-600">123 Fashion Street, Style City, FC 12345</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Monday - Friday:</span> 9am - 6pm</p>
              <p><span className="font-medium">Saturday:</span> 10am - 4pm</p>
              <p><span className="font-medium">Sunday:</span> Closed</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-300">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-300">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-300">
                <FaFacebookF className="text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>For any inquiries, please don not hesitate to reach out to us using the contact information above.</p>
          <p className="mt-2">We look forward to hearing from you!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;