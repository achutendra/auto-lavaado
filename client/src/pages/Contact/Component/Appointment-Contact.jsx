import React from "react";
import "../Style/Appointment-Contact-style.css";
const AppointmentContainer = () => {
  return (
    <div className="bg-white pt-40 text-white w-full ">
      <div className="appointment-container text-4xl sm:text-6xl lg:text-5xl mx-auto lg:mx-auto -mt-36 w-full md:ml-2 sm:w-[80%] md:w-[100%] lg:w-[100%] text-left sm:text-center md:text-center lg:text-center bg-gray-50">
        <div className="appointment bg-white">
          <div className="appointment-form w-[93vw] mx-5 sm:w-[100%] md:w-[100%] lg:w-[60%]">
            <h1 className=" font-extrabold mb-6 text-white  lg:w-[80%]">
              LET'S BOOK AN APPOINTMENT
            </h1>
            <form className="font-bold" >
              <div className="lg:grid lg:grid-cols-2 lg:gap-3 ">
              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full p-2 mb-4 bg-gray-800  border border-gray-700"
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
                className="w-full p-2 mb-4 bg-gray-800 text-white border placeholder border-gray-700"
              />
             <input
                type="email"
                placeholder="Email*"
                required
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              />
              <input
                type="time"
                placeholder="Preferred service time*"
                required
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700"
              />
             </div>
              
              <textarea
                placeholder="Any additional requests regarding your car?"
                className="w-full p-7 mt-6 bg-gray-800 text-white border border-gray-700 placeholder:text-[#7e8895]"
              ></textarea>
              <button
                type="submit"
                className="w-40 sm:p-3 md:p-3 lg:p-3 mt-6 bg-red-600 hover:bg-red-700 text-white font-medium "
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="contact-us w-[100%] md:[50%] lg:w-[40%] lg:mr-[10%] sm:ml-4" >
            <h1 className=" font-extrabold">CONTACT US</h1>
            <div className="">
            <p className="leading-6 -mt-14 lg:-mt-0 md:-mt-0 sm:-mt-0 mb-7 lg:mb-8 sm:mb-14">
              <strong >PHONE</strong>
              <br />
              8960721000
            </p>
            <p className="sm:mb-5">
              <strong className="">AHIMAMAU WORKSHOP</strong>
            </p>
            <p className="mb-3 lg:-mt-4  -mt-1 sm:-mt-0 sm:mb-8">
              
             09:00 am - 06:00 pm
              
            </p>
            </div>
            <div >
            <p className="-mt-5 lg:-mt-7 lg:mb-8 mb-8 sm:mb-14">
              7800022226
            </p>
            <p className="sm:mb-5 ">
              <strong>ASHIYANA WORKSHOP</strong>
              
            </p>
            <p className="-mt-1 lg:-mt-4 sm:mt-0  sm:mb-4">
              09:00 am - 06:00 pm
              
              
            </p>
            </div>
            <div >
            <p className="-mt-1 mb-8 lg:-mt-3 lg:mb-8 sm:mb-14">
              <p className="-mt-4 sm:-mt-0">7800080666
              </p>
              
            </p>
            <p className="sm:mb-5">
              <strong>AUTO LAVAADO THE BODYSHOP</strong>
              
            </p>
            <p className="-mt-1 lg:-mt-4">
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
