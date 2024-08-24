import React, { useState, useEffect } from "react";
import logo from "../../images/auto-lavaado-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [opacity, setOpacity] = useState(0.4); // Initial opacity (40%)

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
        <div className="container mx-auto px-4 py-1 flex items-center">
          <img
            src={logo}
            className="h-14 ml-10 mr-20"
            alt="Auto Lavaado Logo"
          />
          <ul className="flex space-x-16 text-lg font-sans">
            <li>
              <NavLink to="/" className="text-white hover:text-red-400 text-xl ">
                Home
              </NavLink>
            </li>
            {/* <li>
              <a
                href="/about"
                className="text-white hover:text-red-400 text-xl"
              >
                About
              </a>
            </li> */}
            <li>
              <NavLink
                to="/services"
                className="text-white hover:text-red-400 text-xl"
              >
                Services
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/contact"
            className="mr-20 px-8 py-2 border-2 border-red-800 bg-transparent text-white text-2xl font-bold font-bebas rounded-full hover:bg-red-500 transition duration-300 ml-auto"
          >
            CONTACT US
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
