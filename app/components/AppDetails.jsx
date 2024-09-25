'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IPhoneMockup } from "react-device-mockup";
import GradientGhostButton from "@/app/components/GradientGhostButton";
import { motion } from 'framer-motion'
import animations from "@/app/animations";

gsap.registerPlugin(ScrollTrigger);

const GalleryScrollAnimation = () => {
  // Refs for the elements that GSAP will control
  const galleryRef = useRef(null);
  const rightRef = useRef(null);
  const detailsRef = useRef([]);
  const photosRef = useRef([]);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Only run this code on the client-side
    if (typeof window !== "undefined") {
      const details = gsap.utils.toArray(detailsRef.current.slice(1));
      const photos = gsap.utils.toArray(photosRef.current.slice(1));
      const allPhotos = gsap.utils.toArray(photosRef.current);

      gsap.set(photos, { xPercent: 0, autoAlpha: 0 });

      mm.add("(min-width: 600px)", () => {
        // Desktop setup
        console.log("desktop");

        // Pin the right section (assuming rightRef refers to the element to pin)
        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top 10%",
          end: "bottom bottom",
          pin: ".right",
        });

        // Create scroll triggers for each details section
        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");
          let animation = gsap.timeline()
            .to(photos[index], { xPercent: 0, autoAlpha: 1, duration: 1 })
            .set(allPhotos[index], { autoAlpha: 0, duration: 1 });

          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: false,
          });
        });

        return () => {
          console.log("cleanup desktop");
        };
      });
    }

    return () => {
      // Cleanup ScrollTriggers on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.revert(); // revert matchMedia
    };
  }, []);


  return (
    <div className="gallery circle_bg" ref={galleryRef} id="appdetails">
      <div className="left">
        <div className="desktopContent">
          {contents.map((content, i) => (
            <div
              key={i}
              className="desktopContentSection items-start"
              ref={(el) => (detailsRef.current[i] = el)}
            >
              <div className="border-l-2 border-stone-200 pl-5">
                <motion.p initial={'hidden'} whileInView="visible" variants={animations.l2r} className="text-primary font-bold text-sm">MOBILE APP</motion.p>
                <motion.h1 initial={'hidden'} whileInView="visible" variants={animations.r2l} className="font-bold text-4xl text-titleColor">{content.title}</motion.h1>
                <motion.p initial={'hidden'} whileInView="visible" variants={animations.l2r} className="mt-3 tracking-wider leading-[1.8] text-textColor">{content.description}</motion.p>
                <motion.div initial="hidden" whileInView={"visible"} variants={animations.r2l} className="mt-3">
                  <GradientGhostButton label={"Download App"} path="/" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right" ref={rightRef}>
        <div className="mobileContent">
          {contents.map((content, index) => (
            <div>
              <div className="mobilePhoto">
                <IPhoneMockup key={index} className="mobilePhoto flex items-center justify-center" screenWidth={150} hideNavBar hideStatusBar>
                  <img src={images[index] || ""} alt="" />
                </IPhoneMockup>
              </div>
              <div className="border-l-2 border-stone-200 pl-5">
                <motion.p initial={'hidden'} whileInView="visible" variants={animations.l2r} className="text-primary font-bold text-xs">MOBILE APP</motion.p>
                <motion.h1 initial={'hidden'} whileInView="visible" variants={animations.r2l} className="font-bold text-2xl text-titleColor">{content.title}</motion.h1>
                <motion.p initial={'hidden'} whileInView="visible" variants={animations.l2r} className="mt-3 tracking-wider leading-[1.8] text-textColor text-sm">{content.description}</motion.p>
                <motion.div initial="hidden" whileInView={"visible"} variants={animations.r2l} className="mt-3 block w-fit">
                  <GradientGhostButton label={"Download App"} path="/" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <motion.div initial="hidden" animate="visible" variants={animations.r2l} className="desktopPhotos">
          {images.map((src, i) => (
            <IPhoneMockup key={i} className="desktopPhoto flex items-center justify-center" screenWidth={250} hideNavBar hideStatusBar>
              <div
                ref={(el) => (photosRef.current[i] = el)}
              >
                <img src={src} alt={`photo-${i}`} />
              </div>
            </IPhoneMockup>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const images = ["/ss1.png", "/ss2.png", "/ss3.png", "/ss2.png"]
const contents = [
  {
    title: "Real-Time Construction Updates",
    description: "Get up-to-the-minute updates on your construction project. From the latest images to current status reports, keep track of every milestone without stepping on-site."
  },
  {
    title: "Comprehensive Payment Tracking",
    description: "View and manage all your payment details effortlessly. Access information on pending, upcoming, and paid schedules, ensuring you never miss a payment or get confused about your finances."
  },
  {
    title: "Live Camera Feeds",
    description: "Watch live video feeds from the construction site. Monitor progress in real-time, check work quality, and stay connected to your project from anywhere."
  },
  {
    title: "Interactive Project Timeline",
    description: "Explore a dynamic timeline that showcases the evolution of your project. Track completed phases, upcoming tasks, and visualize key milestones to see how your vision is coming to life."
  }
]

export default GalleryScrollAnimation;
