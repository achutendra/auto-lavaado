import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = (props) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden">
      <div className={`absolute top-1/2 transform -translate-y-1/2 w-full text-left ${props.textcolor} px-6 sm:px-12 lg:px-16`}>
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 mt-6 lg:mt-20 font-sans tracking-widest">
          #1 Detailing Car Services in India
        </h2>
        <div>
          <h1 className={`text-7xl ${props.textcolor} sm:text-7xl md:text-7xl lg:text-8xl font-anton mb-4 leading-none`}>
            KEEP YOUR CAR <br /> CLEAN ALWAYS
          </h1>
        </div>
        <p className="text-base sm:text-xl md:text-xl lg:text-2xl mt-12 sm:mt-12 lg:mt-10 font-sans">
          Auto Lavaado is a brand which is literally going to change <br />
          the way people think about car cleaning.
        </p>
        <button
          className={`bg-red-600 hover:bg-white hover:text-red-600 ${props.textcolor} py-2 px-6 sm:py-3 sm:px-8 text-lg sm:text-xl font-bold rounded-full border border-transparent hover:border-red-600 transition duration-300 mt-6 sm:mt-8 lg:mt-10`}
          onClick={() => navigate("/contact")}
        >
          GET AN APPOINTMENT
        </button>
      </div>
      <div className="absolute bottom-5 left-0 w-full h-24 bg-white transform -skew-y-2 translate-y-1/2"></div>
      <div className="absolute bottom-20 right-0 w-1/2 h-7 bg-red-800 transform -skew-y-3 translate-y-1/2"></div>
      <div className="absolute bottom-20 right-0 w-2/3 h-4 bg-red-600 transform -skew-y-3 translate-y-1/2"></div>
    </div>
  );
};

export default Banner;
