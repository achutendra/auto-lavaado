import React from "react";
import ContactUs from "./Component/Loaction-Contact";
import ContentContainer from "./Component/Content-Contact";
import AppointmentContainer from "./Component/Appointment-Contact";
import Footer from "../../components/layouts/Footer";
import "./Style/Location-Footer-Contact-Style.css";
import "./Style/Appointment-Contact-style.css"; // Ensure the CSS file is properly linked
import "./Style/Content-Contact-Style.css";
import Header from "../../components/layouts/Header";

const Contact = () => {
  return (
    <div className="App">
      <Header />
      <ContactUs />
      <ContentContainer />
      <AppointmentContainer />
      <Footer />
    </div>
  );
};

export default Contact;
