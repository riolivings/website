'use client'
import animations from "@/app/animations"
import { BlogItem } from "@/app/components/Blogs"
import { blogData } from "@/app/constants"
import { motion } from "framer-motion"

function Blogs() {
  return (
    <div className="p-6 lg:p-16">
      <motion.h1 initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Our Blogs</motion.h1>
      <motion.div initial="hidden" whileInView={"visible"} variants={animations.b2u} className="mt-10 flex-col lg:flex-row flex gap-10">
        {blogData.map((blog, index) => <BlogItem item={blog} key={index} />)}
      </motion.div>
    </div>
  )
}

export default Blogs