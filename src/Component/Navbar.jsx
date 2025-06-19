import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/leonard-kb-9bb7271b6/' },
    { name: 'Instagram', href: 'https://www.instagram.com/_mr_leonard/' },
    { name: 'Youtube', href: 'https://www.youtube.com/@lkmusic3' }
  ];

  return (
    <motion.nav
      className="bg-yellow-50 rounded-2xl mx-auto max-w-7xl px-6 py-4 md:py-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-semibold text-black tracking-wider"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Leonard
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-20">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-black text-base md:text-lg border-b-4
               border-transparent hover:border-blue-900 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            >
              {link.name}
            </motion.a>
          ))}
          
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 flex flex-col items-start bg-yellow-100 rounded-xl px-4 py-4 space-y-4 shadow-md"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-left ${
                  link.name === 'Contact'
                    ? 'bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800'
                    : 'text-gray-700 hover:text-black text-base border-b-2 border-transparent hover:border-blue-900 transition-all duration-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;