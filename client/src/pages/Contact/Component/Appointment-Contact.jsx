import React from "react";
import "../Style/Appointment-Contact-style.css";
const AppointmentContainer = () => {
  return (
    <div className="bg-[#F5F5F5] pt-36 text-white">
      <div className="appointment-container bg-gray-50">
        <div className="appointment bg-[#F5F5F5]">
          <div className="appointment-form">
            <h1 className="text-3xl mb-6 text-white">
              LET'S BOOK AN APPOINTMENT
            </h1>
            <form>
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
                className="w-full p-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
          <div className="contact-us" >
            <h1 className="text-3xl mb-6" style={{ textAlign: "center"}}>CONTACT US</h1>
            <div className="">
            <p style={{ textAlign: "center"}}>
              <strong >PHONE</strong>
              <br />
              8960721000
            </p>
            <p className="mb-4" style={{ textAlign: "center"}}>
              <strong>AHIMAMAU WORKSHOP</strong>
              
            </p>
            <p style={{ textAlign: "center"}}>
              <strong>OPENING HOURS</strong>
              <br />
              09:00 am - 06:00 pm
            </p>
            </div>
            <div >
            <p className="" style={{ textAlign: "center"}}>
              <strong >PHONE</strong>
              <br />
              7800022226
            </p>
            <p className="mb-4" style={{ textAlign: "center"}}>
              <strong>ASHIYANA WORKSHOP</strong>
              
            </p>
            <p style={{ textAlign: "center"}}>
              <strong>OPENING HOURS</strong>
              <br />
              09:00 am - 06:00 pm
            </p>
            </div>
            <div >
            <p className="" style={{ textAlign: "center"}}>
              <strong >PHONE</strong>
              <br />
              7800080666
            </p>
            <p className="mb-4" style={{ textAlign: "center"}}>
              <strong>AUTO LAVAADO THE BODYSHOP</strong>
              
            </p>
            <p style={{ textAlign: "center"}}>
              <strong>OPENING HOURS</strong>
              <br />
              09:00 am - 06:00 pm
            </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentContainer;
