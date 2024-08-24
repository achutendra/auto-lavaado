import React, { useState, useEffect } from "react";
import person1 from "../../images/person1.jpg"
import person2 from "../../images/person2.jpg"
import person3 from "../../images/person3.jpg"
import person4 from "../../images/person4.jpg"
import person5 from "../../images/person5.jpg"
import person6 from "../../images/person6.jpg"
import person7 from "../../images/person7.jpg"
import person8 from "../../images/person8.jpg"

const TeamDetails = () => {
  const serviceItems = [
    {
      image: person1,
      name: "Amit Mishra",
      position: "Founder of CarWash",
    },
    {
      image: person2,
      name: "Neeraj Prajapati",
      position: "Service Advisor",
    },
    {
      image: person3,
      name: "Ved Mishra",
      position: "Body Shop Manager",
    },
    {
      image: person4,
      name: "Amit",
      position: "Head Mechanic",
    },
    {
      image: person5,
      name: "Person 5",
      position: "Assistant Manager",
    },
    {
      image:person6,
       name: "Person 6",
      position: "Customer Service",
    },
    {
      image : person7, 
       name: "Person 7",
      position: "Detailing Expert",
    },
    {
      image:person8,
      name: "Person 8",
      position: "Technician",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceItems.length);
    }, 3000); // Auto change every 3 seconds

    return () => clearInterval(intervalId);
  }, [serviceItems.length]);

  const nextPerson = () => {
    setCurrentIndex((currentIndex + 1) % serviceItems.length);
  };

  const prevPerson = () => {
    setCurrentIndex(
      (currentIndex - 1 + serviceItems.length) % serviceItems.length
    );
  };

  const getCircularIndex = (index) => {
    return (index + serviceItems.length) % serviceItems.length;
  };

  return (
    <div className="px-14 pb-6 mx-auto bg-black text-white">
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-4xl font-bold mb-10">OUR EXCELLENT TEAM</h2>

        <div className="flex justify-between items-center">
          <button className="text-2xl font-bold" onClick={prevPerson}>
            &lt;
          </button>

          <div className="flex items-center justify-center space-x-4">
            {[-1, 0, 1].map((offset) => {
              const person =
                serviceItems[getCircularIndex(currentIndex + offset)];
              const isHighlighted = offset === 0;
              return (
                <div
                  key={person.name}
                  className={`text-center ${
                    isHighlighted ? "scale-110" : "scale-90"
                  }`}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className={`rounded-full ${
                      isHighlighted ? "border-4 border-blue-500" : ""
                    }`}
                    style={{
                      width: isHighlighted ? "250px" : "200px",
                      height: isHighlighted ? "250px" : "200px",
                    }}
                  />
                  <h3
                    className={`text-lg font-bold mt-4 ${
                      isHighlighted ? "text-blue-500" : ""
                    }`}
                  >
                    {person.name}
                  </h3>
                  <p className="text-sm">{person.position}</p>
                </div>
              );
            })}
          </div>

          <button className="text-2xl font-bold" onClick={nextPerson}>
            &gt;
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {serviceItems.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;

{
  /* <div className="container mx-auto py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          bgColor=" bg-slate-900 "
          title="CHOOSE ONE OF OUR SERVICE"
          description="Our team of skilled professionals pays meticulous attention to detail."
          btnText="VIEW ALL"
        />
        <ServiceCard
          bgColor="bg-white text-black"
          price="$59"
          title="SPLASH & DASH"
          description="From side hustlers to enterprise leaders, Monly connects your work apps so you get more focus and less frustration."
          btnText="BOOK NOW"
        />
        <ServiceCard
          bgColor="bg-white text-black"
          price="$229"
          title="CERAMIC COATING"
          description="From side hustlers to enterprise leaders, Monly connects your work apps so you get more focus and less frustration."
          btnText="BOOK NOW"
        />
        <ServiceCard
          bgColor="bg-white text-black"
          price="$89"
          title="POLISH IT"
          description="From side hustlers to enterprise leaders, Monly connects your work apps so you get more focus and less frustration."
          btnText="BOOK NOW"
        />
      </div>
    </div>  */
}
