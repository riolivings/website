'use client'
import animations from '@/app/animations'
import Accordion from '@/app/components/Accordion'
import { CLASSIC_package, PRIME_package } from '@/app/constants'
import { motion } from 'framer-motion'
import React from 'react'
function PlanSection() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 p-6 lg:p-16 gap-10 mt-10'>
      <div>
        <motion.h1 initial="hidden" whileInView="visible" variants={animations.l2r} className='font-bold text-4xl'>Choose a package to build your dream project</motion.h1>
        <motion.p initial="hidden" whileInView="visible" variants={animations.r2l} className='tracking-wider leading-[1.8] mt-5 text-lg'>At Rio Livings, our team is a close-knit group of professionals who are deeply committed to bringing your vision to life.
          Every project starts with your dream, and our expert architects, engineers, and designers work together to transform that dream into a lasting reality.
          From innovative designs to quality craftsmanship, our team's dedication ensures that each home we build reflects our passion for excellence.</motion.p>
      </div>
      <motion.div initial="hidden" whileInView="visible" variants={animations.b2u} className='rounded-lg bg-cardBackgroundGradient p-10 shadow-xl'>
        <div>
          <h1 className='text-white font-bold text-lg tracking-widest'>{PRIME_package.plan}</h1>
          <p className='text-white'><strong>{PRIME_package.price}</strong></p>
        </div>
        <div className='mt-5 space-y-5'>
          <p className='text-white text-sm font-bold'>What's Included</p>
          <Accordion Icon={<TickIcon />} items={PRIME_package.features} />
        </div>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={animations.u2b} className='rounded-lg bg-white p-10 border border-stone-200 shadow-xl'>
        <div>
          <h1 className='text-titleColor font-bold text-lg tracking-widest'>{CLASSIC_package.plan}</h1>
          <p className='text-textColor'><strong>{CLASSIC_package.price}</strong></p>
        </div>
        <motion.div className='mt-5 space-y-5'>
          <p className='text-titleColor text-sm font-bold'>What's Included</p>
          <Accordion whiteText={false} Icon={<TickIconColor />} items={CLASSIC_package.features} />
        </motion.div>
      </motion.div>
    </div>
  )
}

const TickIcon = () => (
  <img src="/check.png" className='w-[20px] bg-white rounded-full p-1' alt="check_icon" />
)

const TickIconColor = () => (
  <img src="/check_white.png" className='w-[20px] bg-[#FF9E70] rounded-full p-1' alt="check_icon" />
)

const accordionItems = [
  {
    title: 'Accordion 1',
    content: 'This is the content of the first accordion.',
  },
  {
    title: 'Accordion 2',
    content: 'This is the content of the second accordion.',
  },
  {
    title: 'Accordion 3',
    content: 'This is the content of the third accordion.',
  },
];

export default PlanSection