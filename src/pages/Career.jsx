import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUniversity, FaAward, FaGlobe } from 'react-icons/fa';

const Career = () => {
  return (
    <div className="bg-white">
      {/* Career Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Career</h1>
            <p className="text-xl">
              A track record of leadership and achievement in international relations and global development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Experience Items */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-600 rounded-full w-4 h-4 z-10"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Senior International Relations Officer</h3>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">United Nations Development Programme (UNDP)</p>
                  <p className="text-gray-500 mb-2">2020 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Led international development projects across Central Asia</li>
                    <li>Managed partnerships with government agencies and international organizations</li>
                    <li>Developed and implemented policy frameworks for sustainable development</li>
                    <li>Facilitated cross-border initiatives and regional cooperation</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-600 rounded-full w-4 h-4 z-10"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <FaGlobe className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-xl font-bold">International Policy Advisor</h3>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Ministry of Foreign Affairs, Uzbekistan</p>
                  <p className="text-gray-500 mb-2">2017 - 2020</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Advised on international policy and diplomatic relations</li>
                    <li>Represented Uzbekistan at international conferences and meetings</li>
                    <li>Developed strategies for bilateral and multilateral cooperation</li>
                    <li>Coordinated with international organizations on development initiatives</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-600 rounded-full w-4 h-4 z-10"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <FaUniversity className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Research Associate</h3>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Center for International Studies</p>
                  <p className="text-gray-500 mb-2">2015 - 2017</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Conducted research on international relations and global development</li>
                    <li>Published articles on Central Asian geopolitics and regional cooperation</li>
                    <li>Organized academic conferences and workshops on international topics</li>
                    <li>Collaborated with international scholars and institutions</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaUniversity className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Master's in International Relations</h3>
              </div>
              <p className="text-gray-600 font-medium mb-2">Harvard University</p>
              <p className="text-gray-500 mb-2">2013 - 2015</p>
              <p className="text-gray-700">
                Specialized in international development and global governance. Graduated with honors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaUniversity className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Bachelor's in Political Science</h3>
              </div>
              <p className="text-gray-600 font-medium mb-2">Tashkent State University</p>
              <p className="text-gray-500 mb-2">2009 - 2013</p>
              <p className="text-gray-700">
                Focused on comparative politics and international relations. Graduated with distinction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <FaAward className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">International Recognition</h3>
              <p className="text-gray-700">
                Received awards for contributions to international development and diplomacy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <FaGlobe className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Impact</h3>
              <p className="text-gray-700">
                Successfully led projects benefiting communities across multiple countries.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <FaBriefcase className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-gray-700">
                Managed teams and initiatives across diverse cultural and geographical contexts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career; 