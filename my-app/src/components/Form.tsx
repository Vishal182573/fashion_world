"use client"
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBook, FaListAlt } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  address: string;
  course: string;
  specialization: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    address: '',
    course: '',
    specialization: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Admission Query</h2>
      
      <div className="mb-4">
        <div className="flex items-center bg-gray-700 rounded">
          <FaUser className="text-gray-400 ml-3" />
          <input
            className="bg-transparent border-0 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center bg-gray-700 rounded">
          <FaEnvelope className="text-gray-400 ml-3" />
          <input
            className="bg-transparent border-0 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center bg-gray-700 rounded">
          <FaPhone className="text-gray-400 ml-3" />
          <input
            className="bg-transparent border-0 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="tel"
            name="mobile"
            placeholder="Enter Mobile Number"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center bg-gray-700 rounded">
          <FaMapMarkerAlt className="text-gray-400 ml-3" />
          <input
            className="bg-transparent border-0 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            name="address"
            placeholder="Enter Address"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center bg-gray-700 rounded">
          <FaBook className="text-gray-400 ml-3" />
          <select
            className="bg-transparent border-0 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="course"
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Course</option>
            {/* Add course options */}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center bg-gray-700 rounded">
          <FaListAlt className="text-gray-400 ml-3" />
          <select
            className="bg-transparent border-0 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="specialization"
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Specialization</option>
            {/* Add specialization options */}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Form;
