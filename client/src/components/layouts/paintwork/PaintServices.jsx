import React from "react";
import Header from "../Header";
// import paintGirl from "../../../images/paintgirl.png";
import paintG from "../../../images/paintg.png";
import paintbg from "../../../images/paintbg.jpg";
import paint1 from "../../../images/paint1.jpg";
import paint2 from "../../../images/paint2.jpg";
import Banner from "../Banner";
import AppointmentContainer from "../../../pages/Contact/Component/Appointment-Contact";
import Footer from "../Footer";

const PaintServices = () => {
  const paintWorkDetails = [
    {
      image: paint1,
      title: "Benefits of Our Car Paint Work Services",
      content: [
        {
          heading: "Enhanced appearance:",
          detail:
            "Our car paint work services will make your vehicle look brand new, increasing its value and appeal.",
        },
        {
          heading: "Protection:",
          detail:
            "Our paint protection and coating services will protect your vehicle's paint from damage caused by the elements, ensuring it looks great for years to come.",
        },
        {
          heading: "Customization:",
          detail:
            "Our custom paint designs and finishes will give your vehicle a unique look that reflects your personality.",
        },
      ],
    },
    {
      image: paint2,
      title: "What to Expect from Our Car Paint Work Services",
      content: [
        {
          heading: "",
          detail:
            "A thorough inspection of your vehicle to identify areas that need attention.",
        },
        {
          heading: "",
          detail:
            "Detailed consultation with our experts to discuss your needs and preferences.",
        },
        {
          heading: "",
          detail:
            "A state-of-the-art paint job that meets the highest standards.",
        },
        {
          heading: "",
          detail: "A comprehensive warranty that gives you peace of mind.",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div
        className="relative w-full h-screen bg-cover bg-no-repeat bg-center opacity-90"
        style={{ backgroundImage: `url(${paintbg})` }}
      >
        <Banner textcolor="text-black" />
      </div>

      <div className="bg-black text-white p-8 lg:p-16 rounded-lg mx-auto w-full">
        {/* <div className="bg-black absolute inset-0 transform -skew-y-4 rounded-lg -z-10"></div> */}
        
      <div className="absolute bottom-5 left-0 w-full h-24 bg-black transform -skew-y-2 translate-y-1/2"></div>
        {/*First section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Image Section with Red Border */}
          <div className="relative w-full lg:w-1/2 flex justify-center overflow-hidden aspect-w-16 aspect-h-9">
            <div className="relative z-8 overflow-hidden">
              <img
                src={paintG}
                alt="Car Paint Work"
                className="rounded-lg shadow-lg w-full h-full object-cover relative z-20"
              />

            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <span className="font-bold text-2xl lg:text-3xl text-red-600">
              Why Choose Autolavaado for Car Paint Work?
            </span>
            <p className="text-2lg lg:text-2xl">
              At Autolavaado, we pride ourselves on our attention to detail and
              commitment to excellence. Our team of experts has years of
              experience in providing high-quality car paint work services that
              meet the highest standards. We use only the best materials and the
              latest technology to ensure that your vehicle looks its best.
            </p>

            {/* Buttons Section */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
              <button className="bg-transparent hover:bg-red-600 text-white font-semibold py-3 px-5 border border-red-600 hover:border-transparent rounded-full text-lg lg:text-xl">
                Services
              </button>
              <button className="bg-transparent hover:bg-red-600 text-white font-semibold py-3 px-5 border border-red-600 hover:border-transparent rounded-full text-lg lg:text-xl">
                About
              </button>
            </div>
          </div>
        </div>

        {/* Remaining Sections */}
        {paintWorkDetails.map((detail, index) => (
          <div className="bg-black text-white py-20 px-4 lg:px-16" key={index}>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              {detail.title}
            </h1>

            <div className="flex flex-col justify-around lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 max-w-8xl mx-auto">
              {/* Image Section */}
              <div className="">
                <img
                  src={detail.image}
                  alt="Car Paint Work"
                  className="rounded-lg shadow-lg w-full h-1/2 object-cover"
                />
              </div>

              {/* Benefits Section */}
              <div className="not-italic text-4xl w-full lg:w-1/2 space-y-6">
                <ul className="list-disc list-inside">
                  {detail.content.map((x, idx) => (
                    <li key={idx} className="mb-4 ">
                      {x.heading === "" ? (
                        <span className="text-lg lg:text-3xl">{x.detail}</span>
                      ) : (
                        <span>
                          <span className="font-bold text-3xl">
                            {x.heading}
                          </span>
                          <span className="text-lg lg:text-3xl ml-2">
                            {x.detail}
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 md:py-16 lg:py-20 lg:ml-[2%]">
        <AppointmentContainer />
      </div>

      <div className="mx-[5%] lg:mx-[4%]">
        <Footer />
      </div>
    </>
  );
};

export default PaintServices;
