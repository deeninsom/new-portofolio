'use client';

import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

export default function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('exp.1.title'),
      duration: t('exp.1.duration'),
      type: 'current',
      website: 'https://indevtechsolutions.com',
      description: t('exp.1.desc'),
    },
    {
      title: t('exp.2.title'),
      duration: t('exp.2.duration'),
      type: 'past',
      website: 'https://tekko.id/id',
      description: t('exp.2.desc'),
    },
    {
      title: t('exp.3.title'),
      duration: t('exp.3.duration'),
      type: 'current',
      website: 'https://www.lviors.com',
      description: t('exp.3.desc'),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-12 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <motion.h2
          id="experience"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-bold text-black mb-8"
        >
          {t('exp.title')}
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experiences.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex gap-4">
              {/* Timeline dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${exp.type === 'current' ? 'bg-black scale-125' : 'bg-gray-300'} hover:scale-150`}></div>
                {idx < experiences.length - 1 && <div className="w-0.5 h-full min-h-[48px] bg-gray-200 mt-3"></div>}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="pb-6"
              >
                <h3 className="font-bold text-black">{exp.title}</h3>
                <p className="text-sm text-gray-600">{exp.duration}</p>
                {exp.description && <p className="text-sm text-gray-600 mt-2">{exp.description}</p>}
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-orange-500 font-semibold mt-2 hover:text-orange-600 transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    {t('exp.visit_website')}
                    <span className="inline-block transform group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
