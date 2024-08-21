"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPalette, FaUsers, FaGlobe } from 'react-icons/fa';
import Form from '@/components/Form';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-800 rounded-lg shadow-2xl p-8 my-16"
                >
                    <h2 className="text-4xl font-bold text-purple-400 mb-6">Apply Now</h2>
                    <Form />
                </motion.section>
            </div>
        </div>
    );
};

export default AboutUs;