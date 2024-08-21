"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPalette, FaUsers, FaGlobe } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-300 sm:text-5xl md:text-6xl">
            About <span className="text-indigo-600">WSF</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            World School of Fashion: Shaping the Future of Fashion
          </p>
        </motion.div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresData.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-200">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-300">Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            To inspire and empower the next generation of fashion innovators through cutting-edge education, industry partnerships, and a global perspective.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const featuresData = [
  {
    name: 'World-Class Education',
    description: 'Our curriculum is designed by industry experts to provide you with the most up-to-date skills and knowledge in fashion design.',
    icon: <FaGraduationCap className="h-6 w-6" />,
  },
  {
    name: 'Creative Environment',
    description: 'Our state-of-the-art facilities and inspiring atmosphere foster creativity and innovation in every student.',
    icon: <FaPalette className="h-6 w-6" />,
  },
  {
    name: 'Industry Connections',
    description: 'We have strong partnerships with leading fashion brands, providing our students with internship and job opportunities.',
    icon: <FaUsers className="h-6 w-6" />,
  },
  {
    name: 'Global Perspective',
    description: 'Our diverse student body and international faculty bring a global perspective to your fashion education.',
    icon: <FaGlobe className="h-6 w-6" />,
  },
];

export default AboutUs;