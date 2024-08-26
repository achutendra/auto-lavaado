import React from "react";
import Header from "../components/layouts/Header";
import bg from "../images/bg4.jpg";
import Footer from "../components/layouts/Footer";
import OurServices from "../components/layouts/OurServices";
import AppointmentContainer from "./Contact/Component/Appointment-Contact";
import Banner from "../components/layouts/Banner";
import Detailing from "../components/layouts/Detailing";
import TeamDetails from "../components/layouts/TeamDetails";
import ServiceCarousel from "../components/layouts/ServiceCarousel";
import ClientReviews from "../components/layouts/ClientReviews.jsx"


const Home = () => {
  return (
    <>
      <Header />
      <div
        className="relative w-full h-[100vh] bg-cover bg-no-repeat bg-center opacity-90"
        style={{ backgroundImage: `url(${bg})` }}
      >
        
        <Banner />
      </div>
      <OurServices />

      <div style={{ marginTop: "100px" }} >
      <Detailing />
      </div>


      <div style={{ marginTop: "100px" }}>
        <ServiceCarousel />
      </div>

      <div style={{ marginTop: "100px" }}>
        <TeamDetails />
      </div>


      <div className="bg-white mx-auto">

     

      <ClientReviews/>

      </div>
      <div className="" style={{ marginTop: "100px"}}>
        <AppointmentContainer />
      </div>
      <Footer />
    </>
  );
};

export default Home;
