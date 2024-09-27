"use client"
import animations from "@/app/animations"
import { Motion } from "@/app/components/AnimatedComponent"

const PortfolioItem = ({ item, action }) => (
  <Motion initial="hidden" animate={"visible"} variants={animations.u2b} className="w-[25em] relative overflow-hidden border border-stone-300" onClick={action}>
    {item?.images?.length > 0 && <img src={process.env.NEXT_PUBLIC_S3_BASE_URL+item?.images[0]} alt="portfolio image" className="w-full hover:scale-105 transition-all duration-500" />}
    <div className="p-3">
      <p className="mb-1">Client: <strong>{item.name}</strong></p>
      <p className="mb-1">Location: <strong>{item.place}</strong></p>
      <p className="mb-1">Project Details: <strong>{item.sqft || "2,500 SQFT"}</strong></p>
    </div>
  </Motion>
)

export default PortfolioItem