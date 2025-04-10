import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaHandshake, FaChartLine, FaUniversity } from 'react-icons/fa';

const UzbekistanFaceAmerica = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Uzbekistan Face: America</h1>
            <p className="text-xl">
              Building bridges between Uzbekistan and the Americas through diplomacy, education, and economic cooperation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
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
              <h2 className="text-3xl font-bold mb-6">Uzbekistan-Americas Relations</h2>
              <p className="text-gray-700 mb-4">
                As a representative of Uzbekistan in the Americas, I have worked to strengthen diplomatic, economic, and educational ties between Uzbekistan and countries across North and South America. Through various initiatives and partnerships, I have contributed to enhancing mutual understanding and cooperation.
              </p>
              <p className="text-gray-700 mb-4">
                My work has focused on promoting Uzbekistan's interests in the Americas, facilitating educational exchanges, fostering business partnerships, and building cultural bridges between Uzbekistan and American countries.
              </p>
              <p className="text-gray-700">
                Through my efforts, I have helped to position Uzbekistan as a valuable partner for American countries, highlighting its strategic importance, rich cultural heritage, and economic potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Areas of Engagement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Areas of Engagement</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaHandshake className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Diplomatic Relations</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Strengthened diplomatic ties between Uzbekistan and American countries through high-level meetings, diplomatic missions, and bilateral agreements.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Facilitated diplomatic visits and meetings</li>
                <li>Negotiated bilateral agreements</li>
                <li>Promoted Uzbekistan's interests in American capitals</li>
                <li>Represented Uzbekistan at international forums</li>
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
                <FaUniversity className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Educational Exchange</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Promoted educational exchange programs between Uzbekistan and American educational institutions, facilitating student and faculty exchanges, research collaborations, and academic partnerships.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Established university partnerships</li>
                <li>Facilitated student exchange programs</li>
                <li>Promoted research collaborations</li>
                <li>Developed academic exchange frameworks</li>
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
                <h3 className="text-xl font-bold">Economic Cooperation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Promoted economic cooperation and trade relations between Uzbekistan and American countries, facilitating investment opportunities and business partnerships.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Organized trade missions and business forums</li>
                <li>Facilitated investment projects</li>
                <li>Promoted Uzbekistan's economic potential</li>
                <li>Developed economic cooperation frameworks</li>
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
                <FaGlobeAmericas className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Cultural Exchange</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Promoted cultural exchange and understanding between Uzbekistan and American countries through various cultural initiatives and events.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Organized cultural festivals and exhibitions</li>
                <li>Facilitated artistic exchanges</li>
                <li>Promoted Uzbekistan's rich cultural heritage</li>
                <li>Developed cultural cooperation programs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notable Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notable Initiatives</h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">Uzbekistan-US Educational Partnership Program</h3>
              <p className="text-gray-700 mb-4">
                Led the establishment of the Uzbekistan-US Educational Partnership Program, a comprehensive initiative aimed at strengthening educational ties between Uzbekistan and the United States through student exchanges, faculty collaborations, and joint research projects.
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-blue-800">
                  <span className="font-bold">Impact:</span> The program facilitated exchanges for over 200 students and 50 faculty members, established 15 university partnerships, and launched 10 joint research projects between Uzbek and American institutions.
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
              <h3 className="text-2xl font-bold mb-4">Uzbekistan-Latin America Business Forum</h3>
              <p className="text-gray-700 mb-4">
                Organized and led the Uzbekistan-Latin America Business Forum, bringing together business leaders, government officials, and stakeholders from Uzbekistan and Latin American countries to explore trade and investment opportunities.
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-blue-800">
                  <span className="font-bold">Impact:</span> The forum resulted in the signing of 12 business agreements, facilitated $300 million in investment commitments, and established 8 new business partnerships between Uzbek and Latin American companies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Future Vision</h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-800 p-8 rounded-lg"
            >
              <p className="text-xl mb-6">
                Looking ahead, I am committed to further strengthening the relationship between Uzbekistan and the Americas, focusing on:
              </p>
              <ul className="list-disc list-inside space-y-4 text-gray-200">
                <li>Expanding educational partnerships and exchange programs</li>
                <li>Enhancing economic cooperation and trade relations</li>
                <li>Promoting cultural exchange and understanding</li>
                <li>Facilitating technology transfer and innovation collaboration</li>
                <li>Strengthening diplomatic ties and multilateral cooperation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UzbekistanFaceAmerica; 