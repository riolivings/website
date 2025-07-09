import AppDetails from '@/app/components/AppDetails';
import Blogs from '@/app/components/Blogs';
import Hero from '@/app/components/Hero';
import PlanSection from '@/app/components/PlanSection';
import Projects from '@/app/components/Projects';
import Services from '@/app/components/Services';
import Testimonials from '@/app/components/Testimonials';

export default function Home() {


  return (
    <>
      <Hero />
      <Services />
      {/* <AppDetails /> */}
      <PlanSection />
      <Projects />
      <Testimonials />
      <Blogs />
    </>
  );
}