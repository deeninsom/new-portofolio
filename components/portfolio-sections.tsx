'use client';

import { Card } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

export default function PortfolioSections() {
  const { t } = useLanguage();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="py-12 px-4">
      <motion.div
        className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Tech Stack */}
        <motion.div variants={cardVariants} className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-600 mb-4">{t('portfolio.tech_stack')}</h3>
          <motion.div whileHover={{ scale: 1.05 }} className="h-full flex flex-col">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-500 to-purple-500 p-6 min-h-56 flex flex-col justify-between shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="text-white">
                <p className="text-sm font-semibold mb-3">{t('portfolio.frontend_backend')}</p>
                <p className="text-xs leading-relaxed">React.js • Next.js • Node.js • NestJS • PostgreSQL • MySQL • Prisma</p>
              </div>
            </Card>
          </motion.div>
          <div className="mt-4">
            <h4 className="font-bold text-black">{t('portfolio.software_dev')}</h4>
            <p className="text-sm text-gray-600">{t('portfolio.complete_solutions')}</p>
          </div>
        </motion.div>

        {/* Core Expertise */}
        <motion.div variants={cardVariants} className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-600 mb-4">{t('portfolio.core_expertise')}</h3>
          <motion.div whileHover={{ scale: 1.05 }} className="h-full flex flex-col">
            <Card className="overflow-hidden border-0 bg-blue-600 p-6 min-h-56 flex items-center justify-center shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="text-center text-white">
                <p className="text-sm font-semibold mb-2">{t('portfolio.api_microservices')}</p>
                <p className="text-xs">{t('portfolio.restful_services')}</p>
                <p className="text-xs mt-2">{t('portfolio.system_design')}</p>
              </div>
            </Card>
          </motion.div>
          <div className="mt-4">
            <h4 className="font-bold text-black">{t('portfolio.api_dev')}</h4>
            <p className="text-sm text-gray-600">{t('portfolio.integration_opt')}</p>
          </div>
        </motion.div>

        {/* Available for Work */}
        <motion.div variants={cardVariants} className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-600 mb-4">{t('portfolio.about_me')}</h3>
          <motion.div whileHover={{ scale: 1.05 }} className="h-full flex flex-col">
            <Card className="border-0 bg-gray-100 p-6 min-h-56 flex flex-col justify-between shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div>
                <h4 className="font-bold text-black mb-4">{t('portfolio.continuous_learner')}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {t('portfolio.about_desc')}
                </p>
              </div>
              <a href="mailto:muhammad.syihabuddinn@gmail.com" className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-all duration-300 hover:translate-x-1 group">
                {t('portfolio.contact_me')} <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
