'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 md:py-24 overflow-hidden">
      <motion.div
        className="w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Email section */}
        <motion.div variants={itemVariants} className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
            <a href="mailto:muhammad.syihabuddinn@gmail.com" className="text-sm text-gray-600 hover:text-black transition-colors">
              muhammad.syihabuddinn@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            {t('hero.greeting')}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            {t('hero.role1')}
            <span className="font-bold text-black">{t('hero.role2')}</span>
            {t('hero.role3')}
          </p>
          <p className="text-2xl md:text-4xl font-bold">
            <span className="text-orange-500">{t('hero.company')}</span>
          </p>
        </motion.div>

        {/* Status badge and description */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-start gap-6 mb-12">
          <div className="flex gap-2 flex-wrap">
            <motion.a href="https://wa.me/6283877995846" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-6 py-2 transition-colors text-sm shadow-lg">
                {t('hero.button')}
              </Button>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Badge variant="outline" className="flex items-center gap-2 rounded-full px-4 py-2 bg-white border border-gray-200 transition-colors hover:border-orange-500 whitespace-nowrap flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {t('hero.open_opportunities')}
              </Badge>
            </motion.div>
          </div>
          <p className="text-gray-600 max-w-md">
            {t('hero.description')}
            <a href="https://indevtechsolutions.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-orange-500 transition-colors">Indevtech Solutions</a>.
          </p>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('hero.trusted_by')}</p>
          <div className="flex items-center gap-6 flex-wrap">
            <a href="https://www.lviors.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-black transition-colors duration-300">Lviors Jaya Sentosa</a>
            <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
            <a href="https://tekko.id/id" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-black transition-colors duration-300">Tekko.id</a>
            <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
            <a href="https://indevtechsolutions.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-black transition-colors duration-300">Indevtech Solutions</a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
