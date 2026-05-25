'use client';

import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github, ArrowRight, Info } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ProjectsSection() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  const projects = [
    {
      id: 6,
      title: t('project.6.title'),
      desc: t('project.6.desc'),
      fullDesc: "As a developer at Lviors Jaya Sentosa, I collaborated with the team to understand the client's requirements and developed a comprehensive payroll feature, including backend setup, database management, API integration, and ensuring smooth payroll processing within the system.",
      tags: ['NestJs', 'TypeScript', 'Mysql', 'RabbitMq', 'Prisma', 'MicroServices'],
      color: 'from-amber-500/80 to-yellow-600/80',
      accent: 'bg-amber-500',
      image: '/projects/img3.png',
      link: 'https://my.lviors.com/signin'
    },
    {
      id: 7,
      title: t('project.7.title'),
      desc: t('project.7.desc'),
      fullDesc: "I maintained and optimized existing features, developed new functionalities, and ensured seamless performance for The Favored One's platform. As part of the team at Lviors Jaya Sentosa, I contributed to ongoing feature enhancements, bug fixes, and feature development to improve user experience and system efficiency.",
      tags: ['ReactJs', 'ExpressJs', 'Bootstrap', 'Sequelize', 'Mysql'],
      color: 'from-slate-700/80 to-slate-900/80',
      accent: 'bg-slate-700',
      image: '/projects/img2.png',
      link: 'https://member.thefavored-one.com/signin'
    },
    {
      id: 8,
      title: t('project.8.title'),
      desc: t('project.8.desc'),
      fullDesc: "INDEVTECH adalah agency IT saya sendiri yang membantu bisnis bertransformasi digital melalui otomatisasi proses manual dan integrasi sistem. Website ini dibangun untuk menampilkan layanan, portofolio, dan memfasilitasi penjadwalan konsultasi bisnis.",
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Business Automation'],
      color: 'from-blue-600/80 to-indigo-700/80',
      accent: 'bg-blue-600',
      image: '/projects/img4.png',
      link: 'https://indevtechsolutions.com/'
    },
    {
      id: 9,
      title: t('project.9.title'),
      desc: t('project.9.desc'),
      fullDesc: "Aplikasi console custom untuk memanajemen server jarak jauh. Fiturnya mencakup koneksi via Host/IP, Port, Username, dengan dukungan autentikasi Password dan Private Key untuk koneksi SSH yang aman dan efisien.",
      tags: ['React', 'Node.js', 'SSH', 'Server Management'],
      color: 'from-indigo-500/80 to-purple-600/80',
      accent: 'bg-indigo-500',
      image: '/projects/img1.png',
      link: 'https://corelink.indevtechsolutions.com/'
    },
    {
      id: 1,
      title: t('project.1.title'),
      desc: t('project.1.desc'),
      fullDesc: "Website Company Profile untuk New Fei, sebuah pabrik manufaktur sepatu premium. Dirancang menggunakan WordPress untuk menonjolkan profil perusahaan dan standar kualitas produksi mereka secara profesional.",
      tags: ['WordPress', 'Company Profile', 'Web Design'],
      color: 'from-blue-600/80 to-indigo-700/80',
      accent: 'bg-blue-600',
      image: '/projects/new-fei.png',
      link: 'https://newfeiofficial.com/'
    },
    {
      id: 2,
      title: t('project.2.title'),
      desc: t('project.2.desc'),
      fullDesc: "Website Company Profile profesional untuk Mitrakon Persada Abadi, spesialis sistem proteksi kebakaran berstandar internasional. Dibangun dengan WordPress untuk mempresentasikan portofolio dan layanan perusahaan kepada klien B2B.",
      tags: ['WordPress', 'Company Profile', 'Web Design'],
      color: 'from-red-600/80 to-blue-800/80',
      accent: 'bg-red-600',
      image: '/projects/mitrakon.png',
      link: 'https://mitrakon.co.id/'
    },
    {
      id: 3,
      title: t('project.3.title'),
      desc: t('project.3.desc'),
      fullDesc: "Website Company Profile untuk Wibawa Jati Putra, spesialis konstruksi dan teknik industri. Menggunakan WordPress untuk membangun profil perusahaan yang terpercaya dan menampilkan riwayat pengalaman kerja mereka.",
      tags: ['WordPress', 'Company Profile', 'Web Design'],
      color: 'from-yellow-500/80 to-amber-600/80',
      accent: 'bg-yellow-500',
      image: '/projects/wjp.png',
      link: 'https://wibawajatiputra.com/'
    },
    {
      id: 4,
      title: t('project.4.title'),
      desc: t('project.4.desc'),
      fullDesc: "Website Company Profile elegan untuk AB Event Organizer. Menampilkan informasi tentang siapa mereka dan apa yang mereka lakukan, dirancang menggunakan WordPress untuk membangun citra perusahaan yang profesional.",
      tags: ['WordPress', 'Company Profile', 'Web Design'],
      color: 'from-blue-500/80 to-cyan-600/80',
      accent: 'bg-blue-500',
      image: '/projects/ab-event.png',
      link: 'https://abeventorg.com/'
    },
    {
      id: 5,
      title: t('project.5.title'),
      desc: t('project.5.desc'),
      fullDesc: "Website Company Profile untuk Woodelio, spesialis desain interior dan kitchen set premium. Dibangun dengan WordPress untuk merepresentasikan kualitas pengerjaan dan keunggulan perusahaan secara digital.",
      tags: ['WordPress', 'Company Profile', 'Web Design'],
      color: 'from-amber-700/80 to-stone-800/80',
      accent: 'bg-amber-700',
      image: '/projects/woodelio.png',
      link: 'https://customkitchenbandung.com/'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div
        className="w-full max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-black mb-3 tracking-tight">{t('projects.title')}</h2>
            <p className="text-gray-500 max-w-xl text-lg">{t('projects.subtitle')}</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-blue-600">
            <span>Swipe / drag to explore</span>
            <ArrowRight size={16} className="animate-pulse" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 items-stretch">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:pl-6 md:basis-1/2 flex">
                  <div className="p-1 w-full flex">
                    <Card className="group relative overflow-hidden w-full flex flex-col border border-gray-100 bg-white/90 md:bg-white/50 md:backdrop-blur-xl hover:bg-white transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-3xl">
                      
                      {/* Image / Gradient Header */}
                      <div className={`relative h-56 w-full shrink-0 bg-gradient-to-br ${project.color} pt-6 px-6 overflow-hidden`}>
                        <div className="hidden md:block absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                        
                        {/* Project Image */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] rounded-t-xl shadow-2xl overflow-hidden transform group-hover:translate-y-2 group-hover:scale-105 transition-all duration-500 border-x border-t border-white/20">
                           <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-white/0 to-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${project.accent}`}></div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{project.title}</h3>
                        </div>
                        
                        <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{project.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 bg-gray-100/80 text-gray-600 rounded-md text-xs font-medium border border-gray-200/50 hover:border-gray-300 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 shrink-0">
                          <div className="flex items-center gap-3">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-black hover:text-blue-600 transition-colors group/link" title={t('projects.view_demo')}>
                              <ExternalLink size={15} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                              <span className="hidden sm:inline">Demo</span>
                            </a>

                          </div>

                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors">
                                <Info size={15} />
                                {t('projects.view_detail')}
                              </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md md:max-w-3xl bg-white/95 md:backdrop-blur-xl border-white/20 p-0 overflow-hidden">
                              
                              <div className={`w-full h-48 md:h-80 bg-gradient-to-br ${project.color} relative overflow-hidden shadow-inner`}>
                                 <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                 <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="text-3xl font-bold text-white drop-shadow-md flex items-center gap-3">
                                      <div className={`w-3 h-3 rounded-full ${project.accent} shadow-lg`}></div>
                                      {project.title}
                                    </h2>
                                 </div>
                              </div>

                              <div className="p-6 md:p-8 pt-4">
                                <DialogHeader className="hidden">
                                  <DialogTitle>{project.title}</DialogTitle>
                                  <DialogDescription>{project.desc}</DialogDescription>
                                </DialogHeader>
                                
                                <div className="space-y-6">
                                  <div>
                                    <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-wider text-blue-600">Detail Proyek</h4>
                                    <p className="text-gray-700 text-base leading-relaxed">{project.fullDesc}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-black mb-3 text-sm uppercase tracking-wider text-blue-600">Teknologi</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-bold border border-gray-200">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-100">
                                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-black hover:bg-gray-800 text-white py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
                                    <ExternalLink size={18} /> Live Demo
                                  </a>

                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-white border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm" />
              <CarouselNext className="-right-12 bg-white border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm" />
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
}
