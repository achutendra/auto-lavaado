import React from 'react';
import '../../styles/Detailing.css';
import car_bg from "../../images/car-background-sh.avif";

const Detailing = () => {
  return (
    <div
      className="px-6 relative bg-cover bg-center text-white "
      style={{
       backgroundImage: `url(${car_bg})`,
        opacity: 0.9,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto py-16 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                WE HAVE MASTERED THE ART OF DETAILING
              </h2>
              <p className="text-lg">
                CarWash offers a range of customizable services to cater to your
                specific needs.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt odio vulputate commodo. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tincidunt odio vulputate commodo.
            </p>
            <h3 className="text-2xl font-bold mb-4">HIGH-END EQUIPMENT</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt odio vulputate commodo. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tincidunt odio vulputate commodo.
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
