"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Form from '@/components/Form';
import Carousel from '@/components/Carousel';
import { IMG1, IMG2, IMG3, IMG4 } from '../../public';
import { FaGraduationCap, FaPalette, FaLaptop, FaBook, FaUsers, FaCalendarAlt, FaBriefcase, FaGlobe, FaMedal, FaHandshake, FaChalkboardTeacher, FaUserTie, FaFlask, FaTshirt, FaLaptopCode, FaGlobeAmericas, FaProjectDiagram, FaMicrophone, FaPlane, FaTrophy, FaSuitcase, FaNewspaper, FaLeaf, FaUserGraduate } from 'react-icons/fa';
import PricingTable from '@/components/PricingTable';

const HomePage: React.FC = () => {
  const carouselImages = [IMG1, IMG2, IMG3, IMG4];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-gray-100 font-sans">
      <main className="flex-grow">
        <Carousel images={carouselImages} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black text-purple-400 mb-4 font-serif">World School of Fashion</h1>
            <p className="text-3xl text-purple-300 font-light">Where Creativity Meets Innovation</p>
          </div>

          <ProgramsSection />
          <FacilitiesSection />
          <IndustryPartnershipsSection />
          <PricingTable/>
          <AwardsSection />
        </motion.div>
      </main>
    </div>
  );
};

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <h2 className="text-4xl font-bold text-indigo-500 mb-8 flex items-center">
    {icon}
    <span className="ml-3 font-serif">{title}</span>
  </h2>
);

const ProgramsSection: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <SectionTitle icon={<FaGraduationCap className="text-indigo-300" />} title="Our Programs" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programsData.map((program, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className={`bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-${program.color}-500`}
        >
          <h3 className={`text-2xl font-semibold mb-3 text-${program.color}-400`}>{program.title}</h3>
          <p className="text-gray-300">{program.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const FacilitiesSection: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <SectionTitle icon={<FaPalette className="text-indigo-300" />} title="Our Facilities" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {facilitiesData.map((facility, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className={`bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-${facility.color}-500`}
        >
          <h3 className={`text-2xl font-semibold mb-3 text-${facility.color}-400 flex items-center`}>
            <facility.icon className={`mr-2 text-${facility.color}-300`} />
            {facility.title}
          </h3>
          <p className="text-gray-300">{facility.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const IndustryPartnershipsSection: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <SectionTitle icon={<FaBriefcase className="text-indigo-300" />} title="Industry Partnerships" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {partnershipsData.map((partnership, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className={`bg-gradient-to-r from-slate-700 to-red-900 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-${partnership.color}-500`}
        >
          <h3 className={`text-2xl font-semibold mb-3 text-${partnership.color}-400 flex items-center`}>
            <partnership.icon className={`mr-2 text-${partnership.color}-300`} />
            {partnership.title}
          </h3>
          <p className="text-gray-300">{partnership.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const AwardsSection: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <SectionTitle icon={<FaMedal className="text-indigo-300" />} title="Awards & Recognitions" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {awardsData.map((award, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className={`bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-${award.color}-500`}
        >
          <h3 className={`text-2xl font-semibold mb-3 text-${award.color}-400`}>{award.title}</h3>
          <p className="text-gray-300">{award.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const programsData = [
  {
    title: 'Fashion Design',
    color: 'yellow',
    description: 'Explore the world of fashion and design. Create stunning collections and learn from industry experts.'
  },
  {
    title: 'Graphic Design',
    color: 'green',
    description: 'Create visually stunning graphics and illustrations. Master digital tools and techniques.'
  },
  {
    title: 'Interior Design',
    color: 'blue',
    description: 'Transform spaces with innovative design solutions. Learn about materials, lighting, and spatial planning.'
  },
  {
    title: 'Product Design',
    color: 'red',
    description: 'Design innovative products that solve real-world problems. Learn about ergonomics, materials, and manufacturing processes.'
  },
  {
    title: 'Textile Design',
    color: 'indigo',
    description: 'Explore the art of fabric design and creation. Learn about weaving, printing, and sustainable textile practices.'
  },
  {
    title: 'Jewelry Design',
    color: 'pink',
    description: 'Create stunning pieces of wearable art. Master metalworking techniques and gemstone setting.'
  }
];

const facilitiesData = [
  {
    title: 'State-of-the-art Studios',
    icon: FaLaptop,
    color: 'pink',
    description: 'Access cutting-edge equipment and software for your projects. From 3D printers to fashion labs,we have got it all.'
  },
  {
    title: 'Design Library',
    icon: FaBook,
    color: 'blue',
    description: 'Extensive collection of design books, magazines, and digital resources. Stay updated with the latest trends and techniques.'
  },
  {
    title: 'Exhibition Spaces',
    icon: FaPalette,
    color: 'green',
    description: 'Showcase your work in our professional galleries and exhibition areas. Host your own shows and participate in curated exhibitions.'
  },
  {
    title: 'Digital Fabrication Lab',
    icon: FaLaptop,
    color: 'yellow',
    description: 'Bring your designs to life with 3D printing, laser cutting, and CNC machines. Learn to prototype and produce your creations.'
  }
];

const partnershipsData = [
  {
    title: 'Internship Programs',
    icon: FaUserTie,
    color: 'blue',
    description: 'Gain real-world experience through internships with top fashion and design companies.'
  },
  {
    title: 'Sponsored Projects',
    icon: FaProjectDiagram,
    color: 'green',
    description: 'Work on industry-sponsored projects and competitions to solve real design challenges.'
  },
  {
    title: 'Guest Lectures',
    icon: FaMicrophone,
    color: 'yellow',
    description: 'Learn from industry professionals through guest lectures and workshops.'
  },
  {
    title: 'Networking Events',
    icon: FaHandshake,
    color: 'pink',
    description: 'Connect with potential employers at our career fairs and networking events.'
  }
];

const awardsData = [
  {
    title: 'Best Design School',
    color: 'yellow',
    description: 'Ranked as the top design school in the country for three consecutive years.'
  },
  {
    title: 'Innovative Curriculum Award',
    color: 'pink',
    description: 'Recognized for our forward-thinking and industry-relevant programs.'
  },
  {
    title: 'Alumni Success',
    color: 'green',
    description: 'Our graduates are leading in top fashion houses, design studios, and global brands.'
  },
  {
    title: 'Sustainability Leadership',
    color: 'blue',
    description: 'Awarded for our commitment to sustainable design practices and education.'
  },
  {
    title: 'Excellence in Research',
    color: 'indigo',
    description: 'Celebrated for our contributions to design research and innovation.'
  },
  {
    title: 'Student Achievements',
    color: 'red',
    description: 'Our students have won numerous awards in national and international design competitions.'
  }
];
export default HomePage;