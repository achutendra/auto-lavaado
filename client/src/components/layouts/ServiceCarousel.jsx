import React, { useState } from 'react';

const ServiceCarousel = () => {

    const cards = [
        {
          price: '$59',
          title: 'SPLASH & DASH',
          description: 'From side hustlers to enterprise leaders, Monly connects your work apps so you get more focus and less frustration.',
          buttonText: 'BOOK NOW',
          bgcolor:'bg-red-500',
          textcolor:'text-white'
        },
        {
          price: '$229',
          title: 'CERAMIC COATING',
          description: 'From side hustlers to enterprise leaders, Monly connects your work apps so you get more focus and less frustration.',
          buttonText: 'BOOK NOW',
          bgcolor:'bg-white',
          textcolor:'text-black'
        },
        {
          price: '$89',
          title: 'POLISH IT',
          description: 'From side hustlers to enterprise leaders, Monly connects your work apps so you get more focus and less frustration.',
          buttonText: 'BOOK NOW',
          bgcolor:'bg-white',
          textcolor:'text-black'
        },
        {
          price: '$99',
          title: 'DETAILING',
          description: 'Get your car in pristine condition with our full detailing service, ensuring it shines like new.',
          buttonText: 'BOOK NOW',
          bgcolor:'bg-white',
          textcolor:'text-black'
        },
        {
          price: '$149',
          title: 'INTERIOR CLEANING',
          description: 'Make your car’s interior look brand new with our deep cleaning services.',
          buttonText: 'BOOK NOW',
          bgcolor:'bg-white',
          textcolor:'text-black'
        },
      ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto py-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `${cards.length * 25}%`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-none w-1/4 ${card.bgcolor} p-8 rounded-lg mx-2 ${card.textcolor} text-center` }             style={{ height: '400px' }}
            >
              <h2 className="text-4xl font-bold">{card.price}</h2>
              <h3 className="text-2xl font-bold mt-4">{card.title}</h3>
              <p className="mt-4">{card.description}</p>
              <button className={`mt-8 ${card.bgcolor=='bg-white'?'bg-black':'bg-white'} text-red-500 font-bold py-2 px-4 rounded-full`}>
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default ServiceCarousel;
