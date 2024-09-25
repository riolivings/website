const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => {

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <button onClick={toggleMenu}
      className="flex flex-col justify-center items-center">
      <span className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isMenuOpen ?
          'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`} >
      </span>
      <span className={`bg-primary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ?
          'opacity-0' : 'opacity-100'
        }`} >
      </span>
      <span className={`bg-primary block transition-all duration-300 ease-out
        h-0.5 w-6 rounded-sm ${isMenuOpen ?
          '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`} >
      </span>
    </button >
  );
};

export default Hamburger;
