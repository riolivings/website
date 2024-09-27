'use client'
import GradientGhostButton from "@/app/components/GradientGhostButton";
import ParticlesComponent from "@/app/components/ParticleComponent";
import { motion } from 'framer-motion'
import animations from '@/app/animations'
import AutoSlider from "@/app/components/AutoSlider";

const slides = [
  { id: 1, image: '/portfolio/anju.jpg' },
  { id: 2, image: '/portfolio/aseem.jpg' },
  { id: 3, image: '/portfolio/benny.jpg' },
  { id: 4, image: '/portfolio/boby.jpg' },
  { id: 5, image: '/portfolio/joby.jpg' },
];
export default function Hero() {


  return (
    <div className="flex basis-1/2 items-center p-6 lg:p-16 relative h-screen overflow-hidden">
      {/* <ParticlesComponent /> */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* <img src="/portfolio/anju.jpg" alt="" className="absolute w-full bottom-0" /> */}
        <AutoSlider>
          {slides?.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </AutoSlider>
      </div>
      <div className="w-full lg:w-1/2 relative z-10">
        {/* <motion.h1 initial="hidden" whileInView="visible" variants={animations.l2r} className="relative z-10 text-4xl lg:text-6xl bordered-text leading-[1.5] lg:leading-[1.1]">
          Build Your
        </motion.h1> */}

        <motion.h1 initial="hidden" whileInView="visible" variants={animations.r2l} className="text-primary text-4xl lg:text-6xl font-bold tracking-wider leading-[1.1] lg:leading-[1.1]">Building <br /></motion.h1>
        <motion.h1 initial="hidden" whileInView="visible" variants={animations.l2r} className="text-primary text-4xl lg:text-6xl font-bold tracking-wider leading-[1.1] lg:leading-[1.1]">Happiness<br /></motion.h1>

        <motion.div initial="hidden" whileInView="visible" variants={animations.r2l} className="mt-3 flex flex-col gap-3 items-start">
          <p className="text-sm text-white tracking-[2px] leading-[1.5] lg:leading-[1.8]">Rio Livings upholds a tradition of unparalleled excellence and integrity, delivering homes crafted for a lifetime of comfort and style</p>
          <GradientGhostButton label={'Read More'} path={'#appdetails'} />
        </motion.div>
      </div>
      {/* <motion.div initial="hidden" whileInView="visible" variants={animations.b2u} className="w-full lg:w-4/6 lg:relative overflow-hidden mb-10 lg:mb-0">
        <img src="/blob_hero.svg" alt="blob" className="absolute -z-10 w-1/2 lg:w-auto right-0 top-0" />
        <img src="/home.png" alt="" />
      </motion.div> */}
    </div>
  )
}