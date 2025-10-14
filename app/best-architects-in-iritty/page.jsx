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
        // components/ContactFormSection.jsx
'use client'
import { useState } from "react";
import emailjs from 'emailjs-com';
import Link from "next/link";

// --- Helper Components (Keep these in the same file or a separate helpers file) ---

const FormLabel = ({ text }) => (
  <label className="text-sm tracking-wider font-bold text-textColor">{text}</label>
);

const FormInput = ({ name, type = 'text', value, onChange, options, required = false }) => {
  if (type === 'select') {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border border-stone-400 text-titleColor rounded-sm focus-visible:outline-none focus-visible:border-primary py-1 px-3"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="border border-stone-400 text-titleColor rounded-sm focus-visible:outline-none focus-visible:border-primary py-1 px-3"
    />
  );
};

// --- Main Contact Component ---

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ownPlot: '',
    startTime: '',
    location: ''
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    if (loading) return
    setLoading(true)
    e.preventDefault();
    console.log('Form Data:', formData);
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_USER_ID;
    
    // Check if environment variables are set before sending
    if (!serviceID || !templateID || !userID) {
        console.error("EmailJS credentials are not set in environment variables.");
        alert("Form submission failed: Missing Email Service credentials.");
        setLoading(false);
        return;
    }

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully! We will contact you shortly.');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the email. Please try again or call us.');
      })
      .finally(() => {
        setLoading(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          ownPlot: '',
          startTime: '',
          location: ''
        })
      })
  };

  return (
    <div className="bg-[url('/house_sketch.jpeg')] bg-center bg-cover bg-fixed min-h-[100vh] relative flex items-center p-6 lg:p-16 nav-padding">
      <div className='absolute inset-0 bg-white/60'></div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-around w-full items-center gap-10">
        
        {/* Contact Info Section */}
        <div className="space-y-5">
          <h1 className="font-bold text-titleColor text-4xl">LET'S <br />DISCUSS <br />YOUR PROJECT <br />WITH US</h1>
          
          <div className="flex items-start gap-3">
            <img src="/phone.png" alt="phone_logo" className="w-6" />
            <div>
              <p className="font-bold tracking-widest"><Link href={"tel:+919947135878"}>+91 9947135878</Link></p>
              <p className="font-bold tracking-widest"><Link href={"tel:+919207135878"}>+91 9207135878</Link></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <img src="/email.png" alt="email_logo" className="w-6" />
            <p className="font-bold tracking-widest"><Link href={"mailto:riolivings@gmail.com"}>riolivings@gmail.com</Link></p>
          </div>
          
          <div className="flex items-start gap-3">
            <img src="/address.png" alt="address_logo" className="w-6" />
            <p className="font-bold tracking-widest">Keezhur Kunnu, <br /> Iritty, Kerala - 670703</p>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="bg-white shadow-lg p-8 rounded-lg text-titleColor w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name */}
            <div className="flex flex-col gap-1">
              <FormLabel text="Name" />
              <FormInput
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <FormLabel text="Email" />
              <FormInput
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <FormLabel text="Phone Number" />
              <FormInput
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Own Plot */}
            <div className="flex flex-col gap-1">
              <FormLabel text="Do you have/own a plot?*" />
              <FormInput
                name="ownPlot"
                type="select"
                value={formData.ownPlot}
                onChange={handleChange}
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
                required
              />
            </div>

            {/* Start Time */}
            <div className="flex flex-col gap-1">
              <FormLabel text="When are you planning to start your construction?*" />
              <FormInput
                name="startTime"
                type="select"
                value={formData.startTime}
                onChange={handleChange}
                options={[
                  { value: 'Immediately', label: 'Immediately' },
                  { value: 'In 3 months', label: 'In 3 months' },
                  { value: 'In 6 months', label: 'In 6 months' },
                  { value: 'After 6 months', label: 'After 6 months' },
                ]}
                required
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1">
              <FormLabel text="Where are you planning to construct?*" />
              <FormInput
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Submit Button */}
            <div>
              <button
                className={`w-full bg-white text-primary border-2 font-bold tracking-widest border-primary p-2 hover:bg-primary hover:text-white transition-all duration-500 ${loading && "bg-primary text-white opacity-50 cursor-not-allowed"}`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
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
