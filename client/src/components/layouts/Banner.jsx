import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full">
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-left text-white px-10">
        <h2 className="text-2xl mb-4 mt-20 font-sans tracking-widest">
          #1 Detailing Car Services in India
        </h2>
        <div>
        <h1 className="text-8xl font mb-4  leading-none font-anton ">
          KEEP YOUR CAR <br /> CLEAN ALWAYS
        </h1>
        </div>
        <p className="text-xl mt-10 font-sans">
          Auto Lavaado is a brand which is literally going to change <br />
          the way people think about car cleaning.
        </p>
        <button
          className="bg-red-600 hover:bg-white hover:text-red-600 text-white py-2 mt-10 px-8 text-xl font-bold rounded-full border border-transparent hover:border-red-600 transition duration-300"
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
