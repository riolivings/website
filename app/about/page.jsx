import animations from "@/app/animations"
import { Motion } from "@/app/components/AnimatedComponent";

export const metadata = {
  title: "About Us - Rio Livings",
  description: "Discover your dream home with Rio Livings, the top house construction company in Kannur, Kerala.",
};

function About() {  
  return (
    <div className="">
      <div className='bg-[url("/about.jpeg")] bg-center bg-cover bg-fixed min-h-[70vh] relative flex items-center p-6 lg:p-16 nav-padding'>
        <div className='absolute inset-0 bg-white/60'></div>
        <div className='relative z-10 flex gap-5 lg:items-center justify-center flex-col lg:flex-row'>
          <div className='flex-1'>
            <Motion type={"h1"} initial="hidden" whileInView={"visible"} variants={animations.r2l} className='text-4xl lg:text-6xl text-titleColor font-bold w-fit pl-0 lg:pl-16'>About Us.</Motion>
          </div>
          <div className='flex-1 p-0 lg:p-5'>
            <Motion initial="hidden" whileInView={"visible"} variants={animations.b2u} className='bg-stone-100 rounded-lg shadow-xl p-5 lg:p-10 relative overflow-hidden'>
              <p className='tracking-wide lg:tracking-widest lg:leading-[1.8] text-lg text-textColor relative z-10'>
                At Rio Livings, we are dedicated to turning your dream home into a reality. With a focus on quality craftsmanship, innovative design, and transparent communication, we build homes that stand the test of time. Our team of skilled professionals works closely with you, ensuring every detail reflects your vision,
                while our real-time tracking app keeps you updated every step of the way. At Rio Livings, we don't just build homes - we create lasting legacies.
              </p>
            </Motion>
          </div>
        </div>
      </div>
      <div className="p-6 lg:p-20 space-y-10 lg:space-y-20 circle_bg">
        {features.map((feature, index)=>(
          <div key={index} className="flex-col lg:flex-row flex lg:odd:flex-row-reverse gap-5 lg:gap-[10em] items-center">
            <Motion type={"img"} initial="hidden" whileInView={"visible"} variants={animations.r2l} className="w-full lg:w-1/3 rounded-md" src={`/feature${index+1}.jpg`} alt={"feature"+index} />
            <Motion initial="hidden" whileInView={"visible"} variants={animations.l2r}>
              <h1 className="text-2xl lg:text-3xl text-titleColor font-bold mb-3">{feature.title}</h1>
              <p className="text-sm text-textColor tracking-wider leading-[1.8] lg:text-lg text-justify">{feature.description}</p>
            </Motion>
          </div>
        ))}
      </div>
    </div>
  )
}

const features = [
  {
    "title": "Timeless Craftsmanship",
    "description": "At Rio Livings, we pride ourselves on building homes that are as durable as they are beautiful. Our team blends modern architecture with traditional craftsmanship, ensuring that each home is not just a place to live but a legacy to pass down through generations. We use only premium materials and rigorous quality control processes to guarantee lasting value."
  },
  {
    "title": "Real-Time Progress Tracking",
    "description": "Stay fully connected to your project no matter where you are. Our user-friendly app allows you to track every stage of your construction with live camera feeds, regularly updated images, and detailed reports. With Rio Livings, you’re always informed and in control, seeing your dream home come to life in real time."
  },
  {
    "title": "Personalized Attention",
    "description": "We know that no two homes are the same, which is why we tailor every project to your unique vision. Our dedicated team works hand-in-hand with you throughout the entire process, from initial design discussions to the final touches, ensuring that every detail reflects your style, preferences, and lifestyle needs."
  },
  {
    "title": "Transparent Payment Plans",
    "description": "Financial clarity is at the heart of our business. Rio Livings offers flexible, transparent payment plans with a clear breakdown of all costs, including upcoming, pending, and paid installments. We believe in complete transparency, ensuring there are no hidden fees or surprises, giving you peace of mind throughout the entire process."
  },
  {
    "title": "Innovative Design",
    "description": "Combining modern aesthetics with practical functionality, Rio Livings creates homes that are both stylish and future-proof. Our designs incorporate the latest trends while ensuring longevity and adaptability, so your home remains a perfect fit for your family’s needs for years to come. Each space is thoughtfully designed for comfort, elegance, and efficiency."
  }
]

export default About