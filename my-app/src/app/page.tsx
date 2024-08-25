"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Carousel from '@/components/Carousel';
import { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9 } from '../../public';

const HomePage: React.FC = () => {
  const carouselImages = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-white text-gray-800 font-sans">
      <main className="flex-grow">
        <Carousel images={carouselImages} />
        
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <div className="text-center mb-16">
            <motion.h1 
              className="text-6xl font-black text-indigo-600 mb-4 font-serif"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              World School of Fashion
            </motion.h1>
            <motion.p 
              className="text-3xl text-indigo-400 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Where Creativity Meets Innovation
            </motion.p>
          </div>

          <FeaturedPrograms />
          <TrendingStyles />
          <DesignProcess />

          <motion.div 
            {...fadeInUp} 
            className="text-center mb-16 bg-indigo-100 py-12 rounded-lg shadow-inner"
          >
            <h2 className="text-4xl font-bold mb-8 font-serif text-indigo-600">Join Our Creative Community</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 shadow-lg"
            >
              Apply Now
            </motion.button>
          </motion.div>

          <FashionShowcase />
        </motion.div>
      </main>
    </div>
  );
};

const FeaturedPrograms: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <h2 className="text-4xl font-bold text-center mb-8 font-serif text-indigo-600">Featured Programs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Fashion Design", image: IMG1 },
        { title: "Textile Innovation", image: IMG2 },
        { title: "Sustainable Fashion", image: IMG3 },
      ].map((program, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg h-96 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={program.image}
            alt={program.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
            <p className="mb-4">Explore the cutting-edge techniques and theories in {program.title.toLowerCase()}.</p>
            <span className="inline-flex items-center text-indigo-200 hover:text-white">
              Learn More <FaArrowRight className="ml-2" />
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const TrendingStyles: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <h2 className="text-4xl font-bold text-center mb-8 font-serif text-indigo-600">Trending Styles</h2>
    <div className="relative h-96 overflow-hidden rounded-lg">
      <Image src={IMG4} alt="Trending Styles" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-indigo-900 bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-center"
        >
          <h3 className="text-4xl font-bold mb-4">Summer Collection 2024</h3>
          <p className="text-xl mb-6">Discover the hottest trends of the season</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full"
          >
            View Collection
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const DesignProcess: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mb-16 py-16 bg-gray-100"
  >
    <h2 className="text-5xl font-bold text-center mb-12 font-serif text-indigo-600">Our Design Process</h2>
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {[
          { step: "Ideation", image: IMG5, description: "Brainstorming creative concepts" },
          { step: "Sketching", image: IMG6, description: "Bringing ideas to life on paper" },
          { step: "Prototyping", image: IMG7, description: "Crafting initial designs" },
          { step: "Production", image: IMG8, description: "Bringing designs to reality" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full md:w-1/4 h-80 m-2 group overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image src={item.image} alt={item.step} layout="fill" objectFit="cover" className="rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">{item.step}</h3>
              <p className="text-white text-center">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const FashionShowcase: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <h2 className="text-4xl font-bold text-center mb-8 font-serif text-indigo-500">Fashion Showcase</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[IMG1, IMG2, IMG3, IMG4, IMG5, IMG6].map((img, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg h-48 md:h-64"
          // whileHover={{ scale: 1.5,}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={img}
            alt={`Fashion Showcase ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <motion.div
            className="absolute inset-0 bg-indigo-500 bg-opacity-60 flex items-center justify-center p-4 text-white text-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-bold">Discover the story behind this stunning design</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default HomePage;