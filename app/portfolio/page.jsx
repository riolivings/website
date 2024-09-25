'use client'
import animations from "@/app/animations"
import ImageViewer from "@/app/components/ImageViewer"
import { portfolioItems } from "@/app/constants"
import { motion } from "framer-motion"
import { useState } from "react"
function page() {
  const [previewImage, setPreviewImage] = useState(null)
  return (
    <div className="p-6 lg:p-16">
      <div className="w-full lg:w-3/4">
        <motion.h1 initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Journeys We're Proud to Share</motion.h1>
        <motion.p initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-lg tracking-wider leading-[1.8] mt-3">Every home has a unique story, and we're privileged to help bring them to life. From the first foundation stone to the final finishing touches, these spaces are where vision meets reality. 
          Join us in exploring the thoughtful details and careful craftsmanship that go into each of these special projects, as we build not just homes, but lasting memories</motion.p>
      </div>
      <div className="flex gap-5 flex-wrap mt-10">
        {portfolioItems.map((item, index) => (
          <PortfolioItem action={()=>{setPreviewImage(item.image)}} key={index} item={item} />
        ))}
      </div>
      {previewImage && <ImageViewer image={previewImage} onClose={setPreviewImage} />}
    </div>
  )
}

const PortfolioItem = ({item, action})=> (
  <motion.div initial="hidden" animate={"visible"} variants={animations.u2b} className="w-[25em] relative overflow-hidden" onClick={action}>
    <img src={item.image} alt="portfolio image" className="w-full h-full rounded-lg hover:scale-105 transition-all duration-500" />
    <p className="absolute bottom-2 left-2 right-2 bg-gray-50/80 rounded-md p-3">{item.name}, {item.place}</p>
  </motion.div>
)

export default page