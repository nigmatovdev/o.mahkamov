import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaGlobeAmericas, FaLightbulb } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="bg-white">
      {/* Social Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Impact</h1>
            <p className="text-xl">
              Creating positive change through community engagement and social initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Social Initiatives</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaHandHoldingHeart className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Community Development</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Led initiatives focused on improving local communities through education, healthcare, and infrastructure development projects.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Established community centers in rural areas</li>
                <li>Implemented educational programs for youth</li>
                <li>Developed healthcare access initiatives</li>
                <li>Created sustainable infrastructure projects</li>
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
                <FaUsers className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Youth Empowerment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Created programs to empower young people through education, leadership training, and skill development.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Established youth leadership academies</li>
                <li>Developed mentorship programs</li>
                <li>Created entrepreneurship training initiatives</li>
                <li>Facilitated international youth exchanges</li>
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
                <FaGlobeAmericas className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Environmental Sustainability</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Promoted environmental awareness and sustainable practices through community-based initiatives.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Implemented recycling programs</li>
                <li>Organized environmental education campaigns</li>
                <li>Developed sustainable agriculture projects</li>
                <li>Created conservation awareness initiatives</li>
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
                <FaLightbulb className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Innovation for Social Good</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Leveraged technology and innovation to address social challenges and improve community well-being.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed digital literacy programs</li>
                <li>Created technology access initiatives</li>
                <li>Implemented innovative healthcare solutions</li>
                <li>Established social entrepreneurship incubators</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Impact Stories</h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">Youth Leadership Academy</h3>
              <p className="text-gray-700 mb-4">
                Established a youth leadership academy that has trained over 500 young people in leadership skills, civic engagement, and community development. Many graduates have gone on to lead their own initiatives and make significant contributions to their communities.
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-blue-800 italic">
                  "The Youth Leadership Academy transformed my perspective on community involvement. I've since started my own initiative that has helped over 200 families access clean water in rural areas."
                </p>
                <p className="text-gray-600 mt-2">- A graduate of the Youth Leadership Academy</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Community Health Initiative</h3>
              <p className="text-gray-700 mb-4">
                Led a comprehensive community health initiative that improved healthcare access for over 10,000 people in underserved areas. The project included mobile clinics, health education programs, and partnerships with local healthcare providers.
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-blue-800 italic">
                  "The mobile clinic program brought essential healthcare services to our village for the first time. Many lives have been saved through early detection and treatment of health issues."
                </p>
                <p className="text-gray-600 mt-2">- Community leader from a beneficiary village</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Social Initiatives</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create lasting positive change in communities around the world. Join us in our mission to build a better future for all.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default Social; 