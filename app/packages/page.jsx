import animations from "@/app/animations";
import { Motion } from "@/app/components/AnimatedComponent";
import SolidAccordion from "@/app/components/SolidAccordion";
import Tabs from "@/app/components/Tabs"

export const metadata = {
  title: "Plans - Rio Livings",
  description: "Discover your dream home with Rio Livings, the top house construction company in Kannur, Kerala.",
};


async function Packages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/packages`,  {
    next: { revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_PERIOD) }, // Revalidate the data every 60 seconds
  });
  const packages = await res.json();

  if(!packages || packages.length === 0){
    return <p>No packages added</p>
  }

  const tabs = packages.map((pkg, index) => (
    { id: index, label: pkg.plan, price: pkg.price, content: <SolidAccordion items={pkg.features} /> }
  ))

  return (
    <div className="p-6 lg:p-16 nav-padding">
      <div className="w-full lg:w-3/4">
        <Motion type={"h1"} initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Our Packages</Motion>
        <Motion type={"p"} initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-lg tracking-wider leading-[1.8] mt-3">
          Choose from our two comprehensive design packages, each tailored to meet your specific project needs and exceed your expectations.
          Let our expert team guide you through the process of turning your dream project into a stunning reality that will leave a lasting impression.
        </Motion>
      </div>
      <div className="w-full">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default Packages