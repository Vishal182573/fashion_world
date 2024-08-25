"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaPercent, FaRegHeart, FaRegStar } from 'react-icons/fa';

const SaleSection = () => {
  const clothingItems = [
    {
      image: 'https://via.placeholder.com/300x400',
      title: 'Elegant Dress',
      price: 59.99,
      discount: 30,
      isFavorite: false,
      rating: 4.5,
    },
    {
      image: 'https://via.placeholder.com/300x400',
      title: 'Casual Shirt',
      price: 29.99,
      discount: 20,
      isFavorite: true,
      rating: 4.2,
    },
    {
      image: 'https://via.placeholder.com/300x400',
      title: 'Stylish Jeans',
      price: 49.99,
      discount: 25,
      isFavorite: false,
      rating: 4.7,
    },
    {
      image: 'https://via.placeholder.com/300x400',
      title: 'Trendy Jacket',
      price: 79.99,
      discount: 35,
      isFavorite: true,
      rating: 4.9,
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-indigo-600 mb-12 text-center"
        >
          Exclusive Collection
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clothingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FaRegStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-600">{item.rating.toFixed(1)}</span>
                  </div>
                  <div className="bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
                    {item.discount}% OFF
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-indigo-600">
                    ${(item.price * (1 - item.discount / 100)).toFixed(2)}
                  </p>
                  <p className="text-gray-500 line-through">${item.price.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleSection;