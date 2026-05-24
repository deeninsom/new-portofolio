'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

export default function ProcessSection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: t('process.1.title'),
      description: t('process.1.desc'),
      details: [t('process.1.detail.1'), t('process.1.detail.2'), t('process.1.detail.3'), t('process.1.detail.4')]
    },
    {
      number: '02',
      title: t('process.2.title'),
      description: t('process.2.desc'),
      details: [t('process.2.detail.1'), t('process.2.detail.2'), t('process.2.detail.3'), t('process.2.detail.4')]
    },
    {
      number: '03',
      title: t('process.3.title'),
      description: t('process.3.desc'),
      details: [t('process.3.detail.1'), t('process.3.detail.2'), t('process.3.detail.3'), t('process.3.detail.4')]
    },
    {
      number: '04',
      title: t('process.4.title'),
      description: t('process.4.desc'),
      details: [t('process.4.detail.1'), t('process.4.detail.2'), t('process.4.detail.3'), t('process.4.detail.4')]
    },
    {
      number: '05',
      title: t('process.5.title'),
      description: t('process.5.desc'),
      details: [t('process.5.detail.1'), t('process.5.detail.2'), t('process.5.detail.3'), t('process.5.detail.4')]
    },
    {
      number: '06',
      title: t('process.6.title'),
      description: t('process.6.desc'),
      details: [t('process.6.detail.1'), t('process.6.detail.2'), t('process.6.detail.3'), t('process.6.detail.4')]
    },
  ];

  const currentStep = steps[activeStep];

  return (
    <section className="py-16 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 id="process" className="text-lg font-bold text-black mb-2">{t('process.title')}</h2>
          <p className="text-gray-600">{t('process.subtitle')}</p>
        </motion.div>

        <Card className="border-0 bg-white/60 backdrop-blur-md shadow-xl p-8 md:p-12">
          {/* Active Step Content */}
          <div className="mb-10 min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex-shrink-0 whitespace-nowrap w-fit">
                    {t('process.step')} {currentStep.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">{currentStep.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {currentStep.description}
                </p>

                {/* Details List */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-black mb-4">{t('process.key_activities')}</h4>
                  <ul className="space-y-2">
                    {currentStep.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Step Indicators - Segmented Control Style */}
          <div className="mt-12 w-full pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-sm font-bold text-gray-900">{t('process.flow')}</span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {t('process.step')} {activeStep + 1} / {steps.length}
              </span>
            </div>
            <div className="flex w-full bg-gray-50 border border-gray-100 rounded-xl p-1.5 relative overflow-x-auto scrollbar-none gap-1">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="relative flex-1 min-w-[64px] py-2.5 md:py-3 rounded-lg text-sm font-bold outline-none transition-all flex items-center justify-center flex-shrink-0"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {idx === activeStep && (
                    <motion.div
                      layoutId="activeStepBackground"
                      className="absolute inset-0 bg-white shadow-md rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${idx === activeStep ? 'text-black' : 'text-gray-400 hover:text-gray-700'}`}>
                    {step.number}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
