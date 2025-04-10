import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Otabek Mahkamov
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link to="/career" className="text-gray-700 hover:text-gray-900 transition-colors">
            Career
          </Link>
          <Link to="/social" className="text-gray-700 hover:text-gray-900 transition-colors">
            Social
          </Link>
          <Link to="/un" className="text-gray-700 hover:text-gray-900 transition-colors">
            UN
          </Link>
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
            >
              Uzbekistan Face
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
              >
                <Link to="/uzbekistan-face/europe" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Europe
                </Link>
                <Link to="/uzbekistan-face/america" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  America
                </Link>
                <Link to="/uzbekistan-face/asia" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Asia
                </Link>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/career" className="text-gray-700 hover:text-gray-900 transition-colors">
              Career
            </Link>
            <Link to="/social" className="text-gray-700 hover:text-gray-900 transition-colors">
              Social
            </Link>
            <Link to="/un" className="text-gray-700 hover:text-gray-900 transition-colors">
              UN
            </Link>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
              >
                Uzbekistan Face
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="pl-4 flex flex-col space-y-2"
                >
                  <Link to="/uzbekistan-face/europe" className="text-gray-700 hover:text-gray-900 transition-colors">
                    Europe
                  </Link>
                  <Link to="/uzbekistan-face/america" className="text-gray-700 hover:text-gray-900 transition-colors">
                    America
                  </Link>
                  <Link to="/uzbekistan-face/asia" className="text-gray-700 hover:text-gray-900 transition-colors">
                    Asia
                  </Link>
                </motion.div>
              )}
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 