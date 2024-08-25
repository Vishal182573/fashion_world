"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPalette, FaUsers, FaGlobe } from 'react-icons/fa';
import Form from '@/components/Form';

const ApplyNow: React.FC = () => {
    return (
      <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl p-8 my-16"
          >
            <h2 className="text-5xl font-bold text-indigo-600 mb-8 text-center">Apply Now</h2>
            <Form />
          </motion.section>
        </div>
      </div>
    );
  };

export default ApplyNow;