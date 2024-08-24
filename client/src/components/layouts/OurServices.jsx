import React from "react";
import Service1 from "../../images/service1.jpeg";
import Service2 from "../../images/service2.jpeg";
import Service3 from "../../images/service3.jpeg";
import Service4 from "../../images/service4.jpeg";
import Service5 from "../../images/service5.jpeg";
import Service6 from "../../images/service6.jpeg";

const ServiceItem = ({ image, title, description, link }) => {
  return (
    <div className="w-full p-4">
      <div className="flex mb-8">
        <img src={image} alt={title} className="w-80 h-80 object-cover mr-5" />
        <div className="ml-6">
          <h3 className="text-5xl mt-4 mb-2 font-anton text-white">{title}</h3>
          <p className="mt-2 mb-5 font-sans text-gray-300">{description}</p>
          <a
            href={link}
            className="text-white mt-7 inline-block font-bebas text-2xl hover:text-red-600"
          >
            
            VIEW DETAILS
          </a>
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  const serviceItems = [
    {
      image: Service1,
      title: "CAR REPAIRS",
      description:
        "We provide quality car repair services and etc. Our car repair services include engine diagnostics, brake repair, transmission services, oil changes, tire rotations, suspension work, exhaust repair, battery replacement, air conditioning repair, and electrical system diagnostics.",
      link: "#",
    },
    {
      image: Service2,
      title: "BODY SHOP",
      description:
        "We have huge collection of accessories. Our body shop services include collision repair, dent removal, scratch repair, frame straightening, and paint refinishing. We handle bumper repair, fender repair, door panel repair, and alignment issues with precision. Our team also provides headlight restoration, trim and moldings repair, and comprehensive damage assessments to restore your vehicle to its pre-accident condition.",
      link: "#",
    },
    {
      image: Service3,
      title: "CAR DETAILINGS",
      description:
        "We are Car Detailing Professionals. Our car detailing services offer a thorough and meticulous clean for both the interior and exterior of your vehicle. We provide exterior washes, waxing, polishing, and clay bar treatments to enhance and protect your paint. Interior detailing includes vacuuming, shampooing, leather conditioning, and dashboard cleaning.",
      link: "#",
    },
    {
      image: Service4,
      title: "PAINT PROTECTION COATING",
      description:
        "We do paint protection coating for the car. A paint protection coating, also known as a clear bra or paint protection film (PPF), is a transparent layer that is applied to the exterior of a vehicle to safeguard the paint from scratches, chips, and other damage.",
      link: "#",
    },
    {
      image: Service5,
      title: "CAR RUBBING/ POLISHING",
      description:
        "It helps to maintain your car in original and neat look. Our car rubbing and polishing services rejuvenate your vehicle's appearance by removing scratches, swirl marks, and oxidation from the paint surface. We use professional-grade compounds and polishes to restore gloss and clarity, enhancing the depth and shine of your car’s finish. This process also helps to smooth the paint, providing a sleek, reflective surface and protecting against future damage.",
      link: "#",
    },
    {
      image: Service6,
      title: "ANTI-RUST COATING",
      description:
        "Anti-Rust is a hard coating on the underbody of the car. Our anti-rust coating service provides a protective layer to prevent rust and corrosion on your vehicle's undercarriage and exposed metal surfaces. Using high-quality, rust-resistant materials, we apply a durable coating that guards against moisture, salt, and other corrosive elements. This treatment helps to extend the lifespan of your vehicle and maintain its structural integrity, ensuring long-term protection and reliability.",
      link: "#",
    },
  ];

  return (
    <>
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 p-4 sticky top-20 self-start">
            <div className="border-l-4 border-red-600 pl-14">
              <h2 className="text-6xl font-anton text-white">COMPLEX</h2>
              <h2 className="text-6xl font-anton text-white">SERVICES</h2>
              <p className="mt-4 text-lg text-gray-400">
                Auto Lavaado offers a range of
              </p>
              <p className="mt-1 text-lg text-gray-400">
                customizable services to cater to your
              </p>
              <p className="mt-1 text-lg text-gray-400">specific needs.</p>
            </div>
          </div>
          <div
            className="col-span-2 md:col-span-2 p-4 overflow-y-scroll h-[calc(100vh-64px)]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {serviceItems.map((service, idx) => (
              <ServiceItem
                key={idx}
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
