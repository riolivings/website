'use client'
import { useState } from "react";
import emailjs from 'emailjs-com';
import Link from "next/link";

function Contact() {
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
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the email.');
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
    // You can perform API call or other actions here
  };

  return (
    <div className="bg-[url('/house_sketch.jpeg')] bg-center bg-cover bg-fixed min-h-[100vh] relative flex items-center p-6  lg:p-16 nav-padding">
      <div className='absolute inset-0 bg-white/60'></div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-around w-full items-center gap-10">
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
            <img src="/address.png" alt="phone_logo" className="w-6" />
            <p className="font-bold tracking-widest">Keezhur Kunnu, <br /> Iritty, Kerala - 670703</p>
          </div>
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg text-titleColor">
          <form onSubmit={handleSubmit} className="space-y-5">
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
            <div>
              <button
                className={`w-full bg-white text-primary border-2 font-bold tracking-widest border-primary p-1 hover:bg-primary hover:text-white transition-all duration-500 ${loading && "bg-primary text-white opacity-50 cursor-not-allowed"}`}
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

export default Contact