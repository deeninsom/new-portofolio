'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <motion.a
      href="https://wa.me/6283877995846"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3.5 bg-black text-white rounded-full shadow-2xl shadow-black/20 border border-white/10 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300 group overflow-hidden"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
        <MessageSquare size={12} className="text-white fill-white" />
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
      </div>
      
      <span className="relative font-bold text-sm tracking-wide pr-1">
        Let's Talk
      </span>
    </motion.a>
  );
}
