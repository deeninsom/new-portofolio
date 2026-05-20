'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Gathering Requirements',
      description: 'I begin by thoroughly understanding your project goals, business requirements, and technical constraints. This includes discussing the scope, timeline, target users, and any specific technologies or integrations needed. A clear requirements document ensures alignment and prevents miscommunication.',
      details: ['Understand business goals', 'Define technical requirements', 'Identify constraints', 'Plan project scope']
    },
    {
      number: '02',
      title: 'System Architecture & Design',
      description: 'I design the overall system architecture, choosing appropriate patterns for your needs. This involves planning the database schema, API structure, microservices boundaries, and deployment strategy. I ensure the architecture is scalable, maintainable, and follows best practices.',
      details: ['Database schema design', 'API architecture', 'System design patterns', 'Technology stack selection']
    },
    {
      number: '03',
      title: 'Backend Development',
      description: 'I develop the server-side logic using Node.js/NestJS, creating RESTful APIs, handling business logic, and managing databases. I focus on clean code, proper error handling, security, and performance optimization. All code follows industry standards and best practices.',
      details: ['REST API development', 'Database integration', 'Authentication & authorization', 'Business logic implementation']
    },
    {
      number: '04',
      title: 'Frontend Development',
      description: 'I build the user interface using React/Next.js, creating responsive and intuitive designs. The frontend integrates seamlessly with the backend APIs and provides a smooth user experience. I implement proper state management and optimize for performance.',
      details: ['React component development', 'UI/UX implementation', 'API integration', 'Responsive design']
    },
    {
      number: '05',
      title: 'Testing & Debugging',
      description: 'Comprehensive testing ensures reliability and quality. I perform unit tests, integration tests, and end-to-end testing. Any bugs discovered are tracked and fixed systematically, and performance is optimized across the application.',
      details: ['Unit testing', 'Integration testing', 'Bug detection & fixing', 'Performance optimization']
    },
    {
      number: '06',
      title: 'Deployment & Maintenance',
      description: 'The application is deployed to production with proper CI/CD pipelines. I ensure smooth deployment, monitor performance, and provide ongoing maintenance and support. Regular updates and improvements are made based on user feedback and monitoring data.',
      details: ['Production deployment', 'CI/CD setup', 'Performance monitoring', 'Ongoing maintenance']
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
          <h2 id="process" className="text-lg font-bold text-black mb-2">How I work</h2>
          <p className="text-gray-600">A structured approach to building high-quality software</p>
        </motion.div>

        <Card className="border-0 bg-white p-8 md:p-12">
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
                  <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex-shrink-0 whitespace-nowrap w-fit">
                    Step {currentStep.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">{currentStep.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {currentStep.description}
                </p>

                {/* Details List */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-black mb-4">Key activities:</h4>
                  <ul className="space-y-2">
                    {currentStep.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
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
              <span className="text-sm font-bold text-gray-900">Process Flow</span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Step {activeStep + 1} / {steps.length}
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
