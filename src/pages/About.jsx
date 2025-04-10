import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobe, FaLanguage, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white">
      {/* About Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Otabek Mahkamov</h1>
            <p className="text-xl">
              A dedicated international relations professional with a passion for global development and cross-cultural collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Personal Background</h2>
              <p className="text-gray-700 mb-4">
                Born and raised in Uzbekistan, Otabek Mahkamov has developed a deep understanding of Central Asian culture and international relations. His early experiences in diverse environments laid the foundation for his global perspective and cross-cultural communication skills.
              </p>
              <p className="text-gray-700 mb-4">
                With a strong academic background in international relations and years of practical experience working with international organizations, Otabek has established himself as a respected figure in the field of global development and diplomacy.
              </p>
              <p className="text-gray-700">
                His commitment to fostering international cooperation and sustainable development has been the driving force behind his professional journey and achievements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Key Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaGraduationCap className="text-blue-600 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">Education</h4>
                    <p className="text-gray-700">Master's in International Relations</p>
                    <p className="text-gray-700">Bachelor's in Political Science</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaGlobe className="text-blue-600 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">Global Experience</h4>
                    <p className="text-gray-700">Worked in multiple countries across Europe, Asia, and America</p>
                    <p className="text-gray-700">Collaborated with international organizations and governments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaLanguage className="text-blue-600 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">Languages</h4>
                    <p className="text-gray-700">English (Fluent)</p>
                    <p className="text-gray-700">Russian (Native)</p>
                    <p className="text-gray-700">Uzbek (Native)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaAward className="text-blue-600 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold">Achievements</h4>
                    <p className="text-gray-700">Led successful international development projects</p>
                    <p className="text-gray-700">Recognized for contributions to global initiatives</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Values & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Global Perspective</h3>
                <p className="text-gray-700">
                  Embracing diverse viewpoints and fostering international collaboration to address global challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Sustainable Development</h3>
                <p className="text-gray-700">
                  Committed to promoting sustainable practices and long-term solutions for global development issues.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Cultural Bridge</h3>
                <p className="text-gray-700">
                  Building connections between different cultures and facilitating meaningful dialogue across borders.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 