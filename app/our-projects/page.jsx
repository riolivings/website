import animations from "@/app/animations"
import { Motion } from "@/app/components/AnimatedComponent"
import PortfolioItem from "@/app/components/PortfolioItesm";
import Link from "next/link";

export const metadata = {
  title: "Portfolio - Rio Livings",
  description: "Discover your dream home with Rio Livings, the top house construction company in Kannur, Kerala.",
};


async function Portfolio() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/portfolios`,  {
    next: { revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_PERIOD) }, // Revalidate the data every 60 seconds
  });
  const portfolio = await res.json();

  return (
    <div className="p-6 lg:p-16 nav-padding">
      <div className="w-full lg:w-3/4">
        <Motion type={"h1"} initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Journeys We're Proud to Share</Motion>
        <Motion type={"p"} initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-lg tracking-wider leading-[1.8] mt-3">Every home has a unique story, and we're privileged to help bring them to life. From the first foundation stone to the final finishing touches, these spaces are where vision meets reality.
          Join us in exploring the thoughtful details and careful craftsmanship that go into each of these special projects, as we build not just homes, but lasting memories</Motion>
      </div>
      <div className="flex gap-5 flex-wrap mt-10">
        {portfolio.map((item, index) => (
          <Link href={`/portfolio/${item?._id}`}>
            <PortfolioItem key={index} item={item} />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Portfolio