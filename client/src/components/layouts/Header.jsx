import React, { useState, useEffect } from "react";
import logo from "../../images/auto-lavaado-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [opacity, setOpacity] = useState(0.4); // Initial opacity (40%)
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setOpacity(1); // Change opacity to 90% on scroll
      } else {
        setOpacity(0.4); // Default opacity (40%) when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 border-b border-white py-5 backdrop-blur-md"
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      >
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img
              src={logo}
              className="h-14 mr-20"
              alt="Auto Lavaado Logo"
            />
            <div className="hidden md:flex space-x-8 text-lg font-sans align-middle ">
              <NavLink to="/" className="text-white hover:text-red-400 text-xl">
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="text-white hover:text-red-400 text-xl "
              >
                Services
              </NavLink>
              <NavLink
                to="/paint-work"
                className="text-white hover:text-red-400 text-xl "
              >
                Paint Work
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/contact"
            className="hidden md:block px-8 py-2 border-2 border-red-800 bg-transparent text-white text-2xl font-bold font-bebas rounded-full hover:bg-red-500 transition duration-300"
          >
            CONTACT US
          </NavLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center text-white hover:text-red-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black`}>
          <ul className="flex flex-col text-lg font-sans">
            <li>
              <NavLink
                to="/"
                className="block px-4 py-2 text-white hover:text-red-400 text-xl"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block px-4 py-2 text-white hover:text-red-400 text-xl"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/paint-work"
                className="block px-4 py-2 text-white hover:text-red-400 text-xl"
                onClick={() => setIsOpen(false)}
              >
                Paint Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 text-white hover:text-red-400 text-xl"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
