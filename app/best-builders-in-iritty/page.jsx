'use client'
import { formatDate } from "@/app/constants";
import Services from "../components/Services";
import Link from "next/link";
import { Motion } from "../components/AnimatedComponent";
import PortfolioItem from "../components/PortfolioItesm";
import { useEffect, useState } from "react";
import animations from "../animations";


export default function BestBuildersIritty({ params }) {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    // NOTE: Replace NEXT_PUBLIC_BACKEND_BASE_URL with your actual backend URL if running
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/portfolios`, {
      next: { revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_PERIOD) }, // Revalidate the data every X seconds
    });
    const portfolio = await res.json();
    setItems(portfolio)
  }
  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div className="p-6 lg:p-16 space-y-5 nav-padding">
      <div className="text-center space-y-5">
        {/* Title: Changed to "Best Builders in Iritty" */}
        <h1 className="text-2xl lg:text-3xl font-bold text-titleColor w-full lg:w-1/2 m-auto block capitalize tracking-wider leading-[1.3]">
          Best Builders in Iritty
        </h1>
      </div>

      <div>
        <img src={'https://www.park.edu/wp-content/uploads/2025/04/Construction-Management-Park-University-min.png'} alt="construction_image" className="m-auto block rounded-lg w-full lg:w-3/4" />
      </div>

      <div className="lg:p-16 space-y-5">
        {/* Introduction Heading with Primary Keyword */}
        <p className="text-xl font-bold tracking-wider border-l-4 border-primary pl-3">
          Your Search for the Best Builders in Iritty Ends Here
        </p>

        {/* Description Paragraph with SEO Copy and Internal Link */}
        <p className="text-lg tracking-wider leading-[1.8]">
          When it comes to constructing your dream home, choosing the <a href="https://www.riolivings.com" className="text-blue-600 hover:text-blue-800 underline font-medium">best builders in Iritty</a> is crucial. At Rio Livings, we stand out as the **top builders in Iritty** by offering a seamless design-and-build experience. We manage everything from innovative architectural design to transparent, high-quality construction. Our commitment is to deliver homes that are not only beautiful and functional but also built with lasting integrity. If you are looking for reliable **builders in Iritty**, partner with the experts. Learn more about our vision and company at our main site: <a href="https://www.riolivings.com" className="text-blue-600 hover:text-blue-800 underline font-medium">Rio Livings </a>.
        </p>
        
        {/* Secondary Heading for Keyword focus */}
        <h2 className="text-xl font-semibold mt-8 text-titleColor">Why Choose Our Building Services in Iritty?</h2>
        <p className="text-lg tracking-wider leading-[1.8]">
          We believe being the best builders in Iritty means more than just constructing walls; it means building trust. Our portfolio showcases diverse projects, each delivered on time and within budget, making us the preferred choice among **top builders in Iritty**. We ensure premium materials and meticulous craftsmanship in every build.
        </p>
      </div>
      
      {/* Existing content adapted for the new context */}
      <div>
        <p className="text-xl font-semibold"></p>
      </div>

      <Services />

      <div className="p-6 lg:px-16 lg:pt-6">
        <div className="w-full lg:w-3/4">
          <Motion type={"h2"} initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Projects Built by the Top Builders in Iritty</Motion>
          <Motion type={"p"} initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-lg tracking-wider leading-[1.8] mt-3">
            Explore the homes and commercial spaces we've built. These projects reflect the quality and dedication of the **best builders in Iritty**, where every detail is meticulously planned and executed.
          </Motion>
        </div>
       
        <div className="flex gap-5 flex-wrap mt-10">
          {items.map((item, index) => (
            // Internal link to portfolio items remains
            <Link key={index} href={`/portfolio/${item?._id}`}>
              <PortfolioItem item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}