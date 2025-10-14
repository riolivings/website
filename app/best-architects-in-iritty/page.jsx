'use client'
import { formatDate } from "@/app/constants";
import Services from "../components/Services";
import Link from "next/link";
import { Motion } from "../components/AnimatedComponent";
import PortfolioItem from "../components/PortfolioItesm";
import { useEffect, useState } from "react";
import animations from "../animations";


export default function BestArchitectIritty({ params }) {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/portfolios`, {
      next: { revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_PERIOD) }, // Revalidate the data every 60 seconds
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
        {/* <p className="text-sm text-stone-500 tracking-wider font-bold">
          Published {formatDate(blog?.date)} | By {blog?.author}
        </p> */}

        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-bold text-titleColor w-full lg:w-1/2 m-auto block capitalize tracking-wider leading-[1.3]">
          Best Architects in Iritty
        </h1>
        {/* Ttiel Ends */}

      </div>
      <div>
        <img src={'https://www.park.edu/wp-content/uploads/2025/04/Construction-Management-Park-University-min.png'} alt="blog_image" className="m-auto block rounded-lg w-full lg:w-3/4" />
      </div>
      <div className="lg:p-16 space-y-5">
    {/* Introduction Heading with Primary Keyword */}
    <p className="text-xl font-bold tracking-wider border-l-4 border-primary pl-3">
  
    </p>

    {/* Description Paragraph with SEO Copy and Anchor Link */}
    <p>
        looking for the best architects in iritty? Look no further than Rio Livings. As Iritty's leading design and build firm, we seamlessly combine innovative architectural vision with premium, transparent construction. We don't just create blueprints; we craft homes that are aesthetically stunning, highly functional, and built to last for generations. Explore our projects and start your journey with the top builders in Kannur today: <a href="https://riolivings.com/portfolio" className="text-blue-600 hover:text-blue-800 underline font-medium">View Our Portfolio</a>.
    </p>
</div>
      <div>
        <p>Additional Description if required</p>
      </div>

      <Services />

      <div className="p-6 lg:px-16 lg:pt-6">
        <div className="w-full lg:w-3/4">
          <Motion type={"h1"} initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Journeys We're Proud to Share</Motion>
          <Motion type={"p"} initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-lg tracking-wider leading-[1.8] mt-3">Every home has a unique story, and we're privileged to help bring them to life. From the first foundation stone to the final finishing touches, these spaces are where vision meets reality.
            Join us in exploring the thoughtful details and careful craftsmanship that go into each of these special projects, as we build not just homes, but lasting memories</Motion>
        </div>
       
        <div className="flex gap-5 flex-wrap mt-10">
          {items.map((item, index) => (
            <Link href={`/portfolio/${item?._id}`}>
              <PortfolioItem key={index} item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
