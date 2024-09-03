
  import React, { useState, useEffect, useRef } from "react";
  import person1 from "../../images/person1.jpg";
  import person2 from "../../images/person2.jpg";
  import person3 from "../../images/person3.jpg";
  import person4 from "../../images/person4.jpg";
  import person5 from "../../images/person5.jpg";
  import person6 from "../../images/person6.jpg";
  import person7 from "../../images/person7.jpg";

  
  const TeamDetails = () => {
    const serviceItems = [
      { image: person1, name: "MANISH SHUKLA", position: "FOUNDER OF CARWASH" },
      { image: person4, name: "NEERAJ PRAJAPATI", position: "OPERATIONS MANAGER" },
      { image: person3, name: "ANKUR MISHRA", position: "" },
      { image: person5, name: "AMIT", position: "HEAD MECHANIC" },
      { image: person2, name: "AMIT MISHRA", position: "" },
      { image: person6, name: "VED MISHRA", position: "BODYSHOP MANAGER" },
      { image: person7, name: "NITISH RAJPUT", position: "OPERATIONS MANAGER" }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceItems.length);
      }, 3000); // Auto change every 3 seconds
  
      return () => clearInterval(intervalId);
    }, [serviceItems.length]);
  
    useEffect(() => {
      const scrollIntervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft +=
            scrollContainerRef.current.offsetWidth / 2; // Scroll by half the width of the container
          if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
            scrollContainerRef.current.scrollLeft = 0; // Reset scroll position
          }
        }
      }, 3000); // Auto scroll every 3 seconds
  
      return () => clearInterval(scrollIntervalId);
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
      <div className="px-4 pb-6 mx-auto bg-black text-white">
        <div className="container mx-auto py-12 text-center">
          <h2 className="text-4xl font-bold mb-10">OUR EXCELLENT TEAM</h2>
  
          <div className="relative">
            {/* Carousel container for desktop */}
            <div className="hidden md:flex justify-between items-center">
              <button className="text-2xl font-bold" onClick={prevPerson}>
                &lt;
              </button>
  
              <div className="flex items-center justify-center space-x-4 my-4">
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
  
            {/* Mobile carousel */}
            <div className="md:hidden overflow-x-auto flex space-x-4" ref={scrollContainerRef}>
              {serviceItems.map((person) => (
                
                <div
                  key={person.name}
                  className="flex-shrink-0  p-2 text-center"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    // className="rounded-full mx-auto"
                    className={`rounded-full mx-auto ${
                       "border-4 border-blue-500" 
                    }`}
                    style={{
                      width: "200px",
                      height: "200px",
                    }}
                  />
                  <h3 className="text-lg font-bold mt-4">{person.name}</h3>
                  <p className="text-sm">{person.position}</p>
                </div>
              ))}
            </div>
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
  
