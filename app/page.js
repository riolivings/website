import AppDetails from '@/app/components/AppDetails';
import Blogs from '@/app/components/Blogs';
import Hero from '@/app/components/Hero';
import PlanSection from '@/app/components/PlanSection';
import Testimonials from '@/app/components/Testimonials';

export default function Home() {


  return (
    <>
      <Hero />
      <AppDetails />
      <PlanSection />
      <Testimonials />
      <Blogs />
    </>
  );
}