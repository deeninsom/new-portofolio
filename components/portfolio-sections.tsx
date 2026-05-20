'use client';

import { Card } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

export default function PortfolioSections() {
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
    <section id="portfolio" className="py-12 px-4">
      <motion.div 
        className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Tech Stack */}
        <motion.div variants={cardVariants} className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-600 mb-4">Tech Stack</h3>
          <motion.div whileHover={{ scale: 1.05 }} className="h-full flex flex-col">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-500 to-purple-500 p-6 min-h-56 flex flex-col justify-between shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="text-white">
                <p className="text-sm font-semibold mb-3">Frontend & Backend</p>
                <p className="text-xs leading-relaxed">React.js • Next.js • Node.js • NestJS • PostgreSQL • MySQL • Prisma</p>
              </div>
            </Card>
          </motion.div>
          <div className="mt-4">
            <h4 className="font-bold text-black">Fullstack Development</h4>
            <p className="text-sm text-gray-600">Complete solutions</p>
          </div>
        </motion.div>

        {/* Core Expertise */}
        <motion.div variants={cardVariants} className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-600 mb-4">Core Expertise</h3>
          <motion.div whileHover={{ scale: 1.05 }} className="h-full flex flex-col">
            <Card className="overflow-hidden border-0 bg-orange-500 p-6 min-h-56 flex items-center justify-center shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="text-center text-white">
                <p className="text-sm font-semibold mb-2">API & Microservices</p>
                <p className="text-xs">RESTful Services</p>
                <p className="text-xs mt-2">System Design & Git</p>
              </div>
            </Card>
          </motion.div>
          <div className="mt-4">
            <h4 className="font-bold text-black">API Development</h4>
            <p className="text-sm text-gray-600">Integration & optimization</p>
          </div>
        </motion.div>

        {/* Available for Work */}
        <motion.div variants={cardVariants} className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-600 mb-4">About Me</h3>
          <motion.div whileHover={{ scale: 1.05 }} className="h-full flex flex-col">
            <Card className="border-0 bg-gray-100 p-6 min-h-56 flex flex-col justify-between shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div>
                <h4 className="font-bold text-black mb-4">Continuous Learner</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Passionate about software development, side projects, and problem-solving. Actively exploring tech trends and best practices.
                </p>
              </div>
              <a href="mailto:muhammad.syihabuddinn@gmail.com" className="text-orange-500 font-bold text-sm hover:text-orange-600 transition-all duration-300 hover:translate-x-1 group">
                Contact Me <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
