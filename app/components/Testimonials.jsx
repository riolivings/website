'use client'
import animations from '@/app/animations'
import AutoSlider from '@/app/components/AutoSlider'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Move to the next testimonial with animation
  const nextSlide = () => {
    setAnimationClass("animate-slide-out"); // Set exit animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Update the index
      setAnimationClass("animate-slide-in"); // Set entry animation
    }, 500); // Animation duration of 500ms
  };


  return (
    <div className='testimonial min-h-[70vh] relative p-6 lg:p-16 flex items-center overflow-hidden'>
      <div className='absolute inset-0 bg-white/60'></div>
      <div className='relative z-10 flex gap-5 lg:items-center justify-center flex-col lg:flex-row'>
        <div className='flex-1'>
          <motion.p initial="hidden" whileInView={"visible"} variants={animations.r2l} className='text-4xl lg:text-6xl text-titleColor font-bold w-fit pl-0 lg:pl-16'>A Word from <br />our Clients</motion.p>
        </div>
        <div className='flex-1 p-0 lg:p-5'>
          <div initial="hidden" whileInView={"visible"} variants={animations.b2u} className={`bg-white rounded-lg shadow-xl p-5 lg:p-10 relative overflow-hidden ${animationClass}`}>
            <img src="/quotes.webp" alt="quote" className='absolute right-1 -top-5' />
            <p className='tracking-wide lg:tracking-widest lg:leading-[1.8] text-lg text-textColor relative z-10 transition-opacity duration-700 ease-in-out opacity-100'>
              " {testimonials[currentIndex]?.text} "
            </p>
            <div className='flex gap-3 items-center mt-3 justify-end'>
              <img src={testimonials[currentIndex]?.profilePicture} className='w-[50px] rounded-full' alt="profile_img" />
              <p className='text-primary tracking-wider text-right'>- {testimonials[currentIndex]?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    "name": "John Doe",
    "profilePicture": "https://randomuser.me/api/portraits/men/32.jpg",
    "text": "The service was exceptional! The team guided me through every step of the process. I couldn’t have asked for a better experience."
  },
  {
    "name": "Jane Smith",
    "profilePicture": "https://randomuser.me/api/portraits/women/68.jpg",
    "text": "Fantastic work! The quality and attention to detail were beyond my expectations. I’m extremely satisfied with the outcome."
  },
  {
    "name": "Robert Johnson",
    "profilePicture": "https://randomuser.me/api/portraits/men/81.jpg",
    "text": "I had an excellent experience. The staff was professional and the results were outstanding. I highly recommend them!"
  },
  {
    "name": "Emily Davis",
    "profilePicture": "https://randomuser.me/api/portraits/women/44.jpg",
    "text": "Their customer service is top-notch! They took care of all my needs quickly and effectively. I am very happy with their service."
  },
  {
    "name": "Michael Brown",
    "profilePicture": "https://randomuser.me/api/portraits/men/75.jpg",
    "text": "From start to finish, the team was amazing. They delivered high-quality work and made the entire process seamless."
  }
]

export default Testimonials