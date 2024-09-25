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

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="bg-blue-500 sticky top-0 z-20">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link href="/" className="text-3xl font-bold leading-none w-fit">
          <img className='w-1/6' src='/logo.png' alt='logo' />
        </Link>
        <div className="lg:hidden">
          {/* <button onClick={toggleMenu} className="navbar-burger flex items-center text-blue-600 p-3">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button> */}
          <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        {/* Mobile menu */}
        <ul
         ref={ref}
         className={`fixed left-0 top-0 right-0 bottom-0 p-10 lg:p-0 bg-white space-y-5 lg:space-y-0 
          lg:static w-3/4 lg:flex lg:mx-auto lg:w-auto lg:space-x-6 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block
          shadow-xl lg:shadow-none
          `}>
          <Link href="/" className="text-3xl font-bold leading-none contents lg:hidden">
            <img className='w-1/2' src='/logo.png' alt='logo' />
          </Link>
          {navItems.map((item, index) => {
            return < NavItem label={item.label} path={item.path} active={item.path === pathname || (pathname.includes(item.path) && item.path !== '/')} key={index} />
          })}
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <GradientGhostButton label={"Download App"} path={'/'} />
          <Link href="/contact" className="py-1.5 px-6 bg-primaryGradient text-sm text-white font-bold rounded-2xl border-2 border-primary transition duration-200 hover:bg-whiteGradient hover:text-primary">
            Talk To Us
          </Link>
        </div>
      </nav>
    </div>
  );
}

const NavItem = ({ label, path, active }) => (
  <li><Link href={path} className={`text-lg lg:text-sm ${active ? 'text-primary font-bold' : 'text-gray-400 hover:text-gray-500'}`}>{label}</Link></li>
)

