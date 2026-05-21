'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white/60 backdrop-blur-md border-b border-gray-100/50 z-50">
      <div className="w-full max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center relative shadow-sm rounded-xl overflow-hidden"
          >
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" className="fill-black group-hover:fill-neutral-900 transition-colors duration-300" />
              <motion.path
                d="M14 12V28H21C25.418 28 29 24.418 29 20C29 15.582 25.418 12 21 12H14Z"
                stroke="#F97316"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, fill: "rgba(249, 115, 22, 0)" }}
                animate={{ pathLength: 1, fill: "rgba(249, 115, 22, 0.15)" }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-black text-xl tracking-tight leading-none group-hover:text-orange-500 transition-colors duration-300">
              DEENINSOM
            </span>
            <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-0.5">
              Software Developer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#experience" className="text-gray-600 hover:text-black transition-colors text-sm relative group">
            {t('nav.experience')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors text-sm relative group">
            {t('nav.portfolio')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#process" className="text-gray-600 hover:text-black transition-colors text-sm relative group">
            {t('nav.process')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 bg-white/50">
            <button 
              onClick={() => setLanguage('id')} 
              className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${language === 'id' ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-black'}`}
            >
              ID
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${language === 'en' ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-black'}`}
            >
              EN
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm hover:shadow-lg"
          >
            {t('portfolio.contact_me')}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - animated with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-gray-100/50 bg-white/80 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="px-4 py-3 space-y-3 max-w-3xl mx-auto"
            >
              <a
                href="#experience"
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.experience')}
              </a>
              <a
                href="#portfolio"
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.portfolio')}
              </a>
              <a
                href="#process"
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.process')}
              </a>
              
              <div className="flex items-center gap-2 py-2">
                <span className="text-sm text-gray-500">Language:</span>
                <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 bg-white/50">
                  <button 
                    onClick={() => { setLanguage('id'); setIsOpen(false); }} 
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${language === 'id' ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-black'}`}
                  >
                    ID
                  </button>
                  <button 
                    onClick={() => { setLanguage('en'); setIsOpen(false); }} 
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${language === 'en' ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-black'}`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors text-sm">
                {t('portfolio.contact_me')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
