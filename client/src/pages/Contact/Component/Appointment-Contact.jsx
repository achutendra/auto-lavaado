import React from "react";
import "../Style/Appointment-Contact-style.css";
const AppointmentContainer = () => {
  return (
    <div className="bg-white pt-40 text-white w-[100vw]">
      <div className="appointment-container text-4xl sm:text-6xl lg:text-5xl mx-auto lg:mx-auto -mt-36 w-full md:ml-2 sm:w-[80%] md:w-[100%] lg:w-[100%] text-left sm:text-center md:text-center lg:text-center bg-gray-50">
        <div className="appointment bg-white">
          <div className="appointment-form w-[93vw] mx-5 sm:w-[100%] md:mx-0 md:w-[45%] lg:w-[60%]">
            <h1 className=" font-extrabold mb-6 md:text-4xl lg:text-5xl text-white  lg:w-[80%]">
              LET'S BOOK AN APPOINTMENT
            </h1>
            <form className="font-bold -mt-6 md:-mt-0 sm:-mt-0 lg:-mt-0">
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
          <div className="contact-us w-[100%] md:w-[45%] lg:w-[50%] -ml-8 lg:ml-20  md:-ml-0 lg:mr-[10%] sm:ml-4">
            <h1 className=" font-extrabold md:text-4xl lg:text-5xl ">CONTACT US</h1>
            <div className="text-left grid grid-cols-1 gap-8 leading-8 sm:leading-7 md:leading-7 lg:leading-6 lg:gap-12 -mt-20 md:-mt-0 sm:-mt-0 lg:-mt-0">
            <div className="">
              <strong className="">AHIMAMAU WORKSHOP</strong>
              <p className="">
                09:00 am - 06:00 pm <br /> 8960721000
              </p>
            </div>
            <div className="">
              <strong className="">ASHIYANA WORKSHOP</strong>
              <p className="">
                09:00 am - 06:00 pm <br /> 7800022226
              </p>
            </div>
            <div className="">
              <strong className="">AUTO LAVAADO THE BODYSHOP</strong>
              <p className="">
              09:00 am - 06:00 pm <br /> 7800080666
              </p>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentContainer;
