import animations from '@/app/animations'
import Accordion from '@/app/components/Accordion'
import { Motion } from '@/app/components/AnimatedComponent'

async function PlanSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/packages`, {
    next: { revalidate: parseInt(process.env.REVALIDATE_PERIOD) }, // Revalidate the data every 60 seconds
  });
  const packages = await res.json();

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 p-6 lg:p-16 gap-10 mt-10'>
      <div>
        <Motion type={"h1"} initial="hidden" whileInView="visible" variants={animations.l2r} className='font-bold text-4xl'>Choose a package to build your dream project</Motion>
        <Motion type={"p"} initial="hidden" whileInView="visible" variants={animations.r2l} className='tracking-wider leading-[1.8] mt-5 text-lg'>At Rio Livings, our team is a close-knit group of professionals who are deeply committed to bringing your vision to life.
          Every project starts with your dream, and our expert architects, engineers, and designers work together to transform that dream into a lasting reality.
          From innovative designs to quality craftsmanship, our team's dedication ensures that each home we build reflects our passion for excellence.</Motion>
      </div>
      {packages.map((pkg, index) => (
        <Motion key={index} initial="hidden" whileInView="visible" variants={animations.b2u} className={`rounded-lg ${index === 0 ? "bg-cardBackgroundGradient" : "border border-stone-200"} p-10 shadow-xl`}>
          <div>
            <h1 className={`${index === 0 ? "text-white" : "text-titleColor"} font-bold text-lg tracking-widest`}>{pkg.plan}</h1>
            <p className={`${index === 0 ? "text-white" : "text-titleColor"}`}><strong>{pkg.price}</strong></p>
          </div>
          <div className='mt-5 space-y-5'>
            <p className={`${index === 0 ? "text-white" : "text-titleColor"} text-sm font-bold`}>What's Included</p>
            <Accordion whiteText={index === 0} Icon={index === 0 ? <TickIcon /> : <TickIconColor />} items={pkg.features} />
          </div>
        </Motion>
      ))}
    </div>
  )
}

const TickIcon = () => (
  <img src="/check.png" className='w-[20px] bg-white rounded-full p-1' alt="check_icon" />
)

const TickIconColor = () => (
  <img src="/check_white.png" className='w-[20px] bg-[#FF9E70] rounded-full p-1' alt="check_icon" />
)

export default PlanSection