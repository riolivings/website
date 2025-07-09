'use client'
import { motion } from 'framer-motion';
import animations from '@/app/animations';

const services = [
  {
    title: 'Architecture',
    description:
      'Creative and functional home designs by the leading architects in Iritty and Kannur. Custom plans, 3D elevations, and smart layouts to match your lifestyle.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M9 8V3h6v5m-7 8h8m-8 4h8m-8-8h8" />
      </svg>
    ),
    bg: 'bg-gradient-to-tr from-primary to-[#FF9E70] text-white',
  },
  {
    title: 'Construction',
    description:
      'Build your dream home with Rio Livings, a reliable construction company in Iritty. Quality materials, skilled work, and on-time delivery.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#FF9E70]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M16 3v4M8 3v4M4 7h16" />
      </svg>
    ),
    bg: 'bg-white border-2 border-[#FF9E70] text-titleColor',
  },
  {
    title: 'Interior',
    description:
      'Modern, functional, and affordable interior design services. From modular kitchens to custom wardrobes – designed by expert interior designers in Kannur.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 21V8a2 2 0 012-2h12a2 2 0 012 2v13M16 3v4M8 3v4M4 7h16" />
      </svg>
    ),
    bg: 'bg-gradient-to-tr from-[#FF9E70] to-primary text-white',
  },
  {
    title: 'Renovation',
    description:
      'Transform your old home with our expert renovation services in Iritty. We handle remodeling, repairs, and modern makeovers with care and quality.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#FF9E70]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 12l5-5 5 5" />
      </svg>
    ),
    bg: 'bg-white border-2 border-primary text-titleColor',
  },
];

export default function Services() {
  return (
    <section className="relative py-20 px-6 lg:px-24 overflow-hidden bg-white">
      {/* Decorative SVG wave top */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
          <path d="M0,80 C360,160 1080,0 1440,80 L1440,0 L0,0 Z" fill="#F8FAFC" />
        </svg>
      </div>
      {/* Decorative abstract shapes */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#FF9E70]/10 rounded-full blur-2xl -z-10" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-40 bg-gradient-to-r from-primary/10 via-[#FF9E70]/10 to-transparent blur-2xl -z-10" />
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={animations.l2r}
          className="text-4xl lg:text-5xl font-bold text-titleColor mb-4 tracking-tight"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={animations.r2l}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          From concept to completion, Rio Livings offers a full spectrum of services to bring your dream home to life. Explore what we do best.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              variants={animations.b2u}
              className={`rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 ${service.bg}`}
            >
              <div className="mb-2">{service.icon}</div>
              <h3 className="font-bold text-xl mb-2 tracking-wide text-inherit">{service.title}</h3>
              <p className="text-base text-inherit opacity-90 text-center leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Decorative SVG wave bottom */}
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
          <path d="M0,40 C360,120 1080,0 1440,40 L1440,120 L0,120 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
