import React from "react";
import "../Style/Appointment-Contact-style.css";
const AppointmentContainer = () => {
  return (
    <div className="bg-[#F5F5F5] pt-40 text-white w-full lg:mx-[10%]">
      <div className="appointment-container text-4xl sm:text-6xl lg:text-5xl mx-auto lg:mx-auto -mt-36 w-full md:ml-2 sm:w-[80%] md:w-[100%] lg:w-[100%] text-left sm:text-center md:text-center lg:text-center bg-gray-50">
        <div className="appointment bg-[#F5F5F5]">
          <div className="appointment-form w-[93vw] mx-5 sm:w-[100%] md:w-[100%] lg:w-[40%]">
            <h1 className="text-5xl mb-6 text-white lg:w-[80%] lg:mx-auto">
              LET'S BOOK AN APPOINTMENT
            </h1>
            <form className="">
              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              />
              <input
                type="text"
                placeholder="Vehicle type*"
                required
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              />
              <input
                type="tel"
                placeholder="Phone number*"
                required
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              />
              <input
                type="date"
                placeholder="Preferred service date*"
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              />
              <input
                type="time"
                placeholder="Preferred service time*"
                required
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              />
              <textarea
                placeholder="Any additional requests regarding your car?"
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
          <div className="contact-us w-[100%] md:[50%] lg:w-[40%]  sm:ml-4" >
            <h1 className="text-5xl ">CONTACT US</h1>
            <div className="">
            <p className="leading-6 mb-7 sm:mb-14">
              <strong >PHONE</strong>
              <br />
              8960721000
            </p>
            <p className="sm:mb-5">
              <strong>AHIMAMAU WORKSHOP</strong>
              
            </p>
            <p className="mb-3 -mt-1 sm:-mt-0 sm:mb-8">
              <strong>OPENING HOURS</strong>
             <p className="-mt-4 sm:-mt-0">09:00 am - 06:00 pm</p>
              
            </p>
            </div>
            <div >
            <p className="-mt-5 mb-8 sm:mb-14">
              <strong >PHONE</strong>
              <p className="-mt-4 sm:mt-0">7800022226
              </p>
            </p>
            <p className="sm:mb-5">
              <strong>ASHIYANA WORKSHOP</strong>
              
            </p>
            <p className="-mt-1 sm:mt-0 sm:mb-4">
              <strong>OPENING HOURS</strong>
              <p className="-mt-4 sm:-mt-0">09:00 am - 06:00 pm
              </p>
              
            </p>
            </div>
            <div >
            <p className="-mt-1 mb-8 sm:mb-14">
              <strong >PHONE</strong>
              <p className="-mt-4 sm:-mt-0">7800080666
              </p>
              
            </p>
            <p className="sm:mb-5">
              <strong>AUTO LAVAADO THE BODYSHOP</strong>
              
            </p>
            <p className="-mt-1">
              <strong>OPENING HOURS</strong>
              <p className="-mt-4 sm:-mt-0">09:00 am - 06:00 pm
              </p>
              
            </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentContainer;
