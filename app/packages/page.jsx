'use client'
import animations from "@/app/animations";
import SolidAccordion from "@/app/components/SolidAccordion";
import Tabs from "@/app/components/Tabs"
import { CLASSIC_package, PRIME_package } from "@/app/constants";
import { motion } from "framer-motion";
function Packages() {
  return (
    <div className="p-6 lg:p-16">
      <div className="w-full lg:w-3/4">
        <motion.h1 initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Our Packages</motion.h1>
        <motion.p initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-lg tracking-wider leading-[1.8] mt-3">
          Choose from our two comprehensive design packages, each tailored to meet your specific project needs and exceed your expectations.
          Let our expert team guide you through the process of turning your dream project into a stunning reality that will leave a lasting impression.
        </motion.p>
      </div>
      <div className="w-full">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

const tabs = [
  { id: 0, label: 'PRIME', price: PRIME_package.price, content: <SolidAccordion items={PRIME_package.features} /> },
  { id: 1, label: 'CLASSIC', price: CLASSIC_package.price, content: <SolidAccordion items={CLASSIC_package.features} /> },
];

export default Packages