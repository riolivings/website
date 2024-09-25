'use client'
import GradientGhostButton from "@/app/components/GradientGhostButton";
import ParticlesComponent from "@/app/components/ParticleComponent";
import { motion } from 'framer-motion'
import animations from '@/app/animations'

export default function Hero() {



  return (
    <div className="flex-col-reverse lg:flex-row flex basis-1/2 justify-end lg:items-center p-6 lg:p-16 relative">
      <ParticlesComponent />
      <div className="w-full lg:w-2/6 relative z-10">
        <motion.h1 initial="hidden" whileInView="visible" variants={animations.l2r} className="relative z-10 text-4xl lg:text-6xl bordered-text leading-[1.5] lg:leading-[1.1]">
          Build Your
        </motion.h1>
        <motion.div initial="hidden" whileInView="visible" variants={animations.r2l} className="bg-primaryGradient bg-clip-text">
          <motion.h1 className="text-4xl lg:text-6xl font-bold tracking-wider leading-[1.5] lg:leading-[1.1] text-shadow text-transparent">Dream Home <br /></motion.h1>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={animations.l2r} className="bg-primaryGradient bg-clip-text">
          <motion.h1 className="text-4xl lg:text-6xl font-bold tracking-wider leading-[1.5] lg:leading-[1.1] text-shadow text-transparent">With Us.<br /></motion.h1>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={animations.r2l} className="mt-3 flex flex-col gap-3 items-start">
          <p className="text-sm tracking-[2px] leading-[1.8]">Rio Livings upholds a tradition of unparalleled excellence and integrity, delivering homes crafted for a lifetime of comfort and style</p>
          <GradientGhostButton label={'Read More'} path={'#appdetails'} />
        </motion.div>
      </div>
      <motion.div initial="hidden" whileInView="visible" variants={animations.b2u} className="w-full lg:w-4/6 lg:relative overflow-hidden mb-10 lg:mb-0">
        <img src="/blob_hero.svg" alt="blob" className="absolute -z-10 w-1/2 lg:w-auto right-0 top-0" />
        <img src="/home.png" alt="" />
      </motion.div>
    </div>
  )
}