'use client'
import animations from "@/app/animations"
import { blogData } from "@/app/constants"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

function Blogs() {
  const router = useRouter()
  return (
    <div className="p-6 lg:p-16 mt-10">
      <div className="text-center">
        <motion.h1 initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-4xl text-titleColor font-bold tracking-wider">Blogs</motion.h1>
        <motion.p initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-textColor tracking-wide mt-3 text-lg">Rio Livings builds on a foundation of trust and quality, crafting homes designed to last for generations</motion.p>
      </div>
      <motion.div initial="hidden" whileInView={"visible"} variants={animations.b2u} className="mt-10 flex-col lg:flex-row flex justify-center gap-10">
        {blogData.slice(0, 3)?.map((blog, index) => <BlogItem item={blog} key={index} />)}
      </motion.div>
      <button onClick={()=>{router.push('/blog')}} className="bg-primaryGradient text-white font-bold text-sm px-4 py-2 rounded-full tracking-wider m-auto block mt-10 border border-primary hover:bg-whiteGradient hover:bg- hover:text-primary transition-all">Read More</button>
    </div>
  )
}

export const BlogItem = ({ item: { image, title, content, date, id } }) => {
  const router = useRouter()
  return <div
    className="w-full lg:w-1/4 bg-white shadow-xl border border-stone-200 rounded-lg group hover:scale-110 transition-all overflow-hidden duration-500 cursor-pointer"
    onClick={()=>{router.push(`/blog/${id}`)}}
  >
    <img src={image} alt="" className="rounded-t-lg group-hover:scale-105 transition-all duration-500" />
    <div className="p-5">
      <h1 className="font-bold text-titleColor text-lg">{title}</h1>
      <p className="line-clamp-3 text-sm text-textColor tracking-wider leading-[1.8] mt-3">{content.length > 0 && content[0]}</p>
      <p className="mt-3 text-sm font-bold text-primary">{date}</p>
    </div>
  </div>
}
export default Blogs