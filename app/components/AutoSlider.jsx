import React, { useEffect, useState } from 'react';

const AutoSlider = ({children}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>

      {/* Content Overlay (Optional) */}
      {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Hero Slider</h1>
        <p className="text-lg md:text-2xl mt-4">This is an amazing hero section with auto sliding background.</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
          Learn More
        </button>
      </div> */}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {children.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
