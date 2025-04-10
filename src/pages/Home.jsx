import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Otabek Mahkamov</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              International Relations Professional | UN Representative | Global Development Advocate
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about" 
                className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/career" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
              >
                View Career
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UN Experience */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">UN Experience</h3>
              <p className="text-gray-600 mb-4">
                Extensive experience working with the United Nations on international development projects and policy initiatives.
              </p>
              <Link to="/un" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>

            {/* Career Highlights */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Career Highlights</h3>
              <p className="text-gray-600 mb-4">
                A track record of leadership in international organizations and successful project management across diverse regions.
              </p>
              <Link to="/career" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>

            {/* Social Impact */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Social Impact</h3>
              <p className="text-gray-600 mb-4">
                Dedicated to creating positive change through social initiatives and community engagement programs.
              </p>
              <Link to="/social" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's connect and explore opportunities for international development and global initiatives.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get in Touch <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 