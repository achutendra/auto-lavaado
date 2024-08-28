import React from "react";
import "./Detailing.css";
import car_bg from "../../images/car-background-sh.avif";
import car_bg_mobile from "../../images/bs_services.jpg";

const Detailing = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${car_bg})`,
        opacity: 0.9,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Mobile background image */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${car_bg_mobile})`,
          opacity: 0.9,
        }}
      ></div>

      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto py-16 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4">
                We mastered every detail to give perfection in every shine
              </h2>
              <p className="text-lg">
                Auto-lavaado offers a range of customizable services to cater to
                your specific needs.
              </p>
            </div>
          </div>

          <div className="bg-black bg-opacity-70 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">12+</h2>
              <p className="ml-2 text-sm">Years Experience</p>
            </div>
            <h3 className="text-2xl font-bold mb-4">PROFESSIONAL SERVICES</h3>
            <p className="text-gray-400 mb-4">
              Our experts care to maintain and enhance your vehicle's
              performance, appearance, and longevity, including comprehensive
              maintenance such as oil changes, brake checks, and tire rotations,
              as well as detailing services like washing, polishing, and
              interior cleaning.
            </p>
            <h3 className="text-2xl font-bold mb-4">HIGH-END EQUIPMENT</h3>
            <p className="text-gray-400 mb-4">
              Tools ensure optimal performance, accurate repairs, and a flawless
              finish, providing superior care and enhancing the vehicle’s
              longevity and appearance.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailing;
