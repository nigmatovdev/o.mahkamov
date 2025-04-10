import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';

const UN = () => {
  return (
    <div className="bg-white">
      {/* UN Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">United Nations Experience</h1>
            <p className="text-xl">
              Contributing to global development and international cooperation through the United Nations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* UN Role */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Role at the United Nations</h2>
              <p className="text-gray-700 mb-4">
                As a Senior International Relations Officer at the United Nations Development Programme (UNDP), I have been instrumental in developing and implementing international development projects across Central Asia and beyond.
              </p>
              <p className="text-gray-700 mb-4">
                My work focuses on fostering international cooperation, promoting sustainable development, and building partnerships between governments, international organizations, and civil society.
              </p>
              <p className="text-gray-700">
                Through my role, I have contributed to the UN's mission of promoting peace, security, and sustainable development worldwide, with a particular emphasis on the Central Asian region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Contributions</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaGlobe className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">International Development Projects</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Led and managed numerous international development projects across Central Asia, focusing on sustainable development, poverty reduction, and capacity building.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Implemented regional development initiatives</li>
                <li>Managed multi-country projects</li>
                <li>Developed sustainable development frameworks</li>
                <li>Facilitated cross-border cooperation</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaHandshake className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Partnership Building</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Established and maintained partnerships with government agencies, international organizations, and civil society to advance development goals.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Forged partnerships with government agencies</li>
                <li>Collaborated with international organizations</li>
                <li>Engaged with civil society organizations</li>
                <li>Facilitated multi-stakeholder initiatives</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaChartLine className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Policy Development</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Contributed to the development and implementation of international policies and frameworks for sustainable development.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed policy frameworks for sustainable development</li>
                <li>Contributed to international policy discussions</li>
                <li>Implemented policy recommendations</li>
                <li>Monitored and evaluated policy outcomes</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaUsers className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Capacity Building</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Designed and implemented capacity building programs to strengthen the capabilities of local institutions and communities.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed training programs for local institutions</li>
                <li>Conducted workshops and seminars</li>
                <li>Provided technical assistance</li>
                <li>Facilitated knowledge sharing</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UN Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notable UN Initiatives</h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">Central Asian Development Initiative</h3>
              <p className="text-gray-700 mb-4">
                Led a comprehensive development initiative across Central Asian countries, focusing on sustainable development, regional cooperation, and capacity building. The project successfully improved cross-border collaboration and implemented sustainable development practices across the region.
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-blue-800">
                  <span className="font-bold">Impact:</span> The initiative benefited over 1 million people across five Central Asian countries, established 15 cross-border cooperation frameworks, and implemented 30 sustainable development projects.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Sustainable Development Goals (SDGs) Implementation</h3>
              <p className="text-gray-700 mb-4">
                Played a key role in the implementation of the UN's Sustainable Development Goals in Central Asia, working with governments and stakeholders to develop action plans and monitor progress.
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-blue-800">
                  <span className="font-bold">Impact:</span> Successfully integrated SDGs into national development plans in three countries, established monitoring frameworks for 10 SDG indicators, and facilitated the achievement of 5 SDG targets ahead of schedule.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UN Values */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">UN Values & Principles</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-200">
                Upholding the highest standards of integrity, transparency, and accountability in all activities and initiatives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Inclusivity</h3>
              <p className="text-gray-200">
                Promoting inclusive approaches that ensure the participation and representation of all stakeholders, including marginalized groups.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-200">
                Ensuring that all initiatives and projects promote long-term sustainability and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UN; 