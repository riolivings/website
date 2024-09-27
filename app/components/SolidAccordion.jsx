'use client'
import animations from "@/app/animations";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function SolidAccordion({items, whiteText, Icon}) {
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

  console.log(typeof(items[0].content), items[0].content);
  
  return (
    <motion.div initial="hidden" whileInView={"visible"} variants={animations.container} className="w-full">
      {items.map((item, index) => (
        <motion.div variants={animations.l2r} key={index} className={`${whiteText ? "bg-white" : "bg-cardBackgroundGradient odd:bg-cardBackgroundGradient2"} overflow-hidden mb-2 rounded-md px-4 py-4`}>
          <button
            className={`w-full text-left ${whiteText ? "text-titleColor" : "text-white"} font-semibold gap-3 tracking-widest text-lg`}
            onClick={() => toggleAccordion(index)}
          >
            {Icon}
            {item.title}
          </button>
          <motion.div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`${whiteText ? "text-textColor" : "text-white"} text-sm tracking-widest transition-all ease-in-out overflow-hidden py-0 h-0`}
            initial="hidden" whileInView={"visible"} variants={animations.container}
          >
            {typeof(item.content) !== "string" ? 
              item.content.map((point, index) => <motion.p key={index} variants={animations.l2r} className={`${whiteText ? "text-textColor" : "text-white"} mt-2`}>- {point}</motion.p>)
              :
              item.content
            }
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SolidAccordion