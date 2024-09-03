import React from "react";

import Video from "../Images/ContactUS-Background-video.mp4";

const ContentContainer = () => {
  return (
    <div className="background-video h-[100vh]">
      <video autoPlay muted loop className="h-[90vh]" id="myVideo" src={Video} type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      <div className="content-container px-4">
        <h1 className="title">OUR PROCESS</h1>
        <p className="description text-left">
          Visit Sparkling Suds Carwash today and treat your car to the care it
          deserves. Experience the difference of a professional car wash that
          leaves your vehicle looking pristine, inside and out.
        </p>
        <div className="process-steps grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-name">BOOKING</div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-name">INSPECTION</div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-name">VALUATION</div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-name">COMPLETION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;