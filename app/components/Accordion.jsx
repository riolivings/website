'use client'
import animations from '@/app/animations';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Accordion({ items, Icon, whiteText=true }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const padding = 8

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref && activeIndex !== index) {
        ref.style.height = '0px';
        ref.style.paddingTop = "0px"
        ref.style.paddingBottom = "0px"
      } else if (ref) {
        ref.style.height = (ref.scrollHeight+ 2*padding) + 'px' ;
        ref.style.paddingTop = padding + "px"
        ref.style.paddingBottom = padding + "px"
      }
    });
  }, [activeIndex]);
  return (
    <motion.div initial="hidden" whileInView={"visible"} variants={animations.container} className="w-full">
      {items.map((item, index) => (
        <motion.div variants={animations.l2r} key={index} className={`${index !== items.length-1 && 'border-b'} ${whiteText ? "border-white/50" : "border-stone-500/30"} overflow-hidden mb-2`}>
          <button
            className={`w-full mb-3 text-left px-4 py-2 ${whiteText ? "text-white" : "text-textColor"} font-semibold flex gap-3 items-center text-sm tracking-widest`}
            onClick={() => toggleAccordion(index)}
          >
            {Icon}
            {item.title}
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`px-2 ${whiteText ? "text-white" : "text-textColor"} text-sm tracking-wider transition-all ease-in-out overflow-hidden`}
          >
            {item.content?.map((content, index)=><p className={`${whiteText ? "text-white" : "text-textColor"}`} key={index}>- {content}</p> )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
