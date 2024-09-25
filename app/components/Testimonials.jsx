'use client'
import animations from '@/app/animations'
import { motion } from 'framer-motion'
import React from 'react'
function Testimonials() {
  return (
    <div className='testimonial min-h-[70vh] relative p-6 lg:p-16 flex items-center'>
      <div className='absolute inset-0 bg-white/60'></div>
      <div className='relative z-10 flex gap-5 lg:items-center justify-center flex-col lg:flex-row'>
        <div className='flex-1'>
          <motion.p initial="hidden" whileInView={"visible"} variants={animations.r2l} className='text-4xl lg:text-6xl text-titleColor font-bold w-fit pl-0 lg:pl-16'>A Word from <br />our Clients</motion.p>
        </div>
        <div className='flex-1 p-0 lg:p-5'>
          <motion.div initial="hidden" whileInView={"visible"} variants={animations.b2u} className='bg-white rounded-lg shadow-xl p-5 lg:p-10 relative overflow-hidden'>
            <img src="/quotes.webp" alt="quote" className='absolute right-1 -top-5' />
            <p className='tracking-wide lg:tracking-widest lg:leading-[1.8] text-lg text-textColor relative z-10'>
              " The entire team at Rio Livings was a delight to work with, always going above and beyond to ensure that every detail was executed perfectly. Not only did they deliver on time and within budget,
              but they also exceeded my expectations in every aspect. From the initial planning stages to the final touches their attention to detail truly set them apart."
            </p>
            <p className='text-primary tracking-wider mt-3 text-right'>- John Doe</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials