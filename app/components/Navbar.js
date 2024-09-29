'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import GradientGhostButton from '@/app/components/GradientGhostButton';
import { navItems } from '@/app/constants';
import { usePathname } from 'next/navigation';
import Hamburger from '@/app/components/Hamburger';

export default function Navbar() {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef(null);
  const buttonRef = useRef(null);

  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("lg:text-white");

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') { // Check if on the homepage
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          setBgColor('bg-white shadow-lg'); // Change to solid background
          setTextColor("lg:text-black")
        } else {
          setBgColor('bg-transparent'); // Keep transparent at the top
          setTextColor("lg:text-white")
        }
      } else {
        setBgColor('bg-white shadow-lg'); // Solid background for other pages
        setTextColor("lg:text-black")
      }
    };

    // Call handleScroll on initial load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]); // Depend on pathname to react to changes

  useEffect(() => {
    const handleClick = (event) => {
      if ((ref.current && !ref.current.contains(event.target)) && (buttonRef.current && !buttonRef.current.contains(event.target))) {        
        setIsMenuOpen(false)
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className={`${bgColor} transition-colors duration-300 ease-in-out fixed top-0 z-20 w-full`}>
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold leading-none w-fit">
          <img className={`w-1/3 lg:w-1/6 transition-all ${isMenuOpen ? "opacity-0" : "opacity-100"}`} src='/logo.png' alt='logo' />
        </Link>
        <div className="lg:hidden">
          <Hamburger ref={buttonRef} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        {/* Mobile menu */}
        <ul
          ref={ref}
          className={`fixed left-0 top-0 right-0 bottom-0 p-10 lg:p-0 space-y-5 lg:space-y-0 
          lg:static w-3/4 lg:flex lg:mx-auto lg:w-auto lg:space-x-6 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block
          shadow-xl lg:shadow-none bg-black/80 lg:bg-transparent
          `}>
          <Link href="/" className="text-3xl font-bold leading-none contents lg:hidden">
            <img className='w-1/2' src='/logo.png' alt='logo' />
          </Link>
          {navItems.map((item, index) => {
            return < NavItem color={textColor} label={item.label} path={item.path} active={item.path === pathname || (pathname.includes(item.path) && item.path !== '/')} key={index} />
          })}
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <GradientGhostButton label={"Download App"} path={'/'} />
          <Link href="/contact" className="py-1.5 px-6 bg-secondary text-sm text-white font-bold rounded-2xl border-2 border-secondary transition duration-200 hover:bg-transparent hover:text-primary hover:border-primary">
            Talk To Us
          </Link>
        </div>
      </nav>
    </div>
  );
}

const NavItem = ({ label, path, active, color }) => (
  <li><Link href={path} className={`text-lg lg:text-sm ${active ? 'text-primary font-bold' : `text-white ${color} hover:text-stone-300`}`}>{label}</Link></li>
)

