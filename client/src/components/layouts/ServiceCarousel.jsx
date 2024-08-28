
  import React, { useState } from "react";

const ServiceCarousel = () => {
  const cards = [
    {
      title: "CHOOSE YOUR SERVICE",
      description: "We have a team that is highly skilled in detail.",
      buttonText: "BOOK NOW",
      bgcolor: "bg-white ",
      textcolor: "text-red",
    },
    {
      price: "$59",
      title: "CERAMIC COATING",
      description:
        "Provide a seamless interface for all types of work apps, from side tricksters to endeavor pioneers, resulting in greater focus and less dissatisfaction",
      buttonText: "BOOK NOW",
      bgcolor: "bg-white",
      textcolor: "text-black",
    },
    {
      price: "$229",
      title: "POLISH IT",
      description:
        "Affordable waxes need frequent reapplication, while durable ceramic and graphene coatings offer long-lasting, professional-grade protection.",
      buttonText: "BOOK NOW",
      bgcolor: "bg-white",
      textcolor: "text-black",
    },
    {
      price: "$99",
      title: "DETAILING",
      description:
        "Get your car in pristine condition with our full detailing service, ensuring it shines like new.",
      buttonText: "BOOK NOW",
      bgcolor: "bg-white",
      textcolor: "text-black",
    },
    {
      price: "$149",
      title: "INTERIOR CLEANING",
      description:
        "Make your car’s interior look brand new with our deep cleaning services.",
      buttonText: "BOOK NOW",
      bgcolor: "bg-white",
      textcolor: "text-black",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto bg-black py-12">
      <div className="overflow-x-auto md:overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
            width: "100%",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-none w-full sm:w-3/4 md:w-1/2 lg:w-1/4 ${
                index === 0 && window.innerWidth > 738 ? "bg-gray-700" : card.bgcolor
              } p-8 rounded-lg mx-2 ${card.textcolor} text-center relative`}
              style={{ height: "400px" }}
            >
              <h2
                className={`text-5xl font-bold text-red-500 ${
                  index === 0 ? "font-extrabold text-8xl" : card.bgcolor
                }`}
              >
                {card.price}
              </h2>
              <h3 className={`text-2xl font-bold mt-4 ${index === 0 ? "text-[40px]" : ""}`}>{card.title}</h3>
              <p className="mt-4">{card.description}</p>
              <button
                className={`bg-transparent hover:bg-black font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent absolute bottom-4 w-32 left-1/2 transform -translate-x-1/2 ${
                  card.bgcolor === "bg-white" ? "bg-black" : "bg-white"
                } text-red-500 font-bold py-2 px-4 rounded-full`}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Hide these buttons on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default ServiceCarousel;
