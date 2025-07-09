'use client'

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function ProjectsShowcase() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/portfolios`);
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        setProjects(data);
      } catch (e) {
        setProjects([]);
      }
    }
    fetchProjects();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (projects.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [projects]);

  const goTo = (idx) => setCurrentIndex(idx);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);

  return (
    <>
      <Head>
        <title>Modern Projects Showcase</title>
        <style>{`
       
          
          .project-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            perspective: 1000px;
          }
          
          .project-card:hover {
            transform: translateY(-10px);
          }
          
          .project-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .project-card:hover .project-card-inner {
            transform: rotateY(5deg);
          }
          
          .gradient-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
          }
          
          .nav-dot {
            transition: all 0.3s ease;
          }
          
          .nav-dot:hover {
            transform: scale(1.3);
          }
          
          .feature-box {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          }
        `}</style>
      </Head>

      <section className="relative py-20 px-4 lg:px-8 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Signature Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Where visionary design meets exceptional craftsmanship</p>
            <Link href="/portfolio" className="inline-block mt-8 px-8 py-3 bg-[rgb(245_28_39)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Our Portfolio
            </Link>
          </div>
          
          {/* Features Box */}
          <div className="feature-box rounded-2xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Clients Choose Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[rgba(245,28,39,0.1)] p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(245,28,39)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Innovative Design</h4>
                    <p className="text-sm text-gray-600">Cutting-edge architectural solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(245,28,39)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Timely Delivery</h4>
                    <p className="text-sm text-gray-600">Projects completed on schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Premium materials & craftsmanship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Transparent Pricing</h4>
                    <p className="text-sm text-gray-600">No hidden costs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative group">
                <Image 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a97d673-273d-4151-b8e7-367f690bd1cf.png" 
                  alt="Architect reviewing blueprints with client in modern office" 
                  className="rounded-xl shadow-lg w-full max-w-xs"
                  width={320}
                  height={240}
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md group-hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-2xl">150+</div>
                    <div className="text-gray-600 text-sm">Completed Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Projects Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            {projects.length > 1 && (
              <>
                <button onClick={prev} className="carousel-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={next} className="carousel-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            {/* Carousel Container */}
            <div className="carousel-container overflow-hidden">
              <div className="carousel-track flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {projects.map((item, idx) => (
                  <div key={item._id || idx} className="project-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                    <div className="project-card-inner h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                      <a href={item._id ? `/portfolio/${item._id}` : '#'} className="block relative h-80 overflow-hidden">
                        <Image 
                          src={item.images?.[0] ? process.env.NEXT_PUBLIC_S3_BASE_URL + item.images[0] : '/portfolio/anju.jpg'}
                          alt={item.name || 'Project'}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          width={400}
                          height={320}
                        />
                        <div className="gradient-overlay absolute inset-0 flex items-end p-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                            <div className="flex flex-wrap gap-2">
                              {item.place && <span className="bg-[rgb(245,28,39)] px-3 py-1 rounded-full text-white text-sm font-medium">{item.place}</span>}
                              {item.sqft && <span className="bg-gray-800/90 px-3 py-1 rounded-full text-white text-sm font-medium">{item.sqft} SQFT</span>}
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{item.description || ''}</p>
                        <a href={item._id ? `/portfolio/${item._id}` : '#'} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                          View Project
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, idx) => (
                <button key={idx} className={`nav-dot w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`} onClick={() => goTo(idx)}></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}