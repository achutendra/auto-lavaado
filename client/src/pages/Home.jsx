import Header from "../components/layouts/Header";
import bg from "../images/bg4.jpg";
import Footer from "../components/layouts/Footer";
import OurServices from "../components/layouts/OurServices";
import AppointmentContainer from "./Contact/Component/Appointment-Contact";
import Banner from "../components/layouts/Banner";
import Detailing from "../components/layouts/Detailing";
import TeamDetails from "../components/layouts/TeamDetails";
import ServiceCarousel from "../components/layouts/ServiceCarousel";
import ClientReviews from "../components/layouts/ClientReviews";
import PaintServices from "../components/layouts/paintwork/PaintServices";

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="relative w-full h-screen bg-cover bg-no-repeat bg-center opacity-90"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Banner textcolor="text-white" />
      </div>
     
      <div className="py-10 md:py-16 lg:py-20">
        <OurServices />
      </div>

      <div className="py-10 md:py-16 lg:py-20">
        <Detailing />
      </div>

      <div className="py-10 md:py-16 lg:py-20">
        <ServiceCarousel />
      </div>

      <div className="py-10 md:py-16 lg:py-20 bg-white">
        <TeamDetails />
      </div>

      <div className=" bg-white">
        <ClientReviews />
      </div>

      <div className=" lg:ml-[2%]">
        <AppointmentContainer />
      </div>

      <div className="">
      <Footer />
      </div>
    </>
  );
};

export default Home;
