import { useMediaQuery } from "react-responsive";
import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import car3 from "../../images/car3.jpg";
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";

function ClientReviews() {
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const sliderRef = useRef(null);


  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    // Initialize the carousel
    const $carousel = $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      navText: ['', ''], // Clear default text
    });

    // Save the carousel instance
    setCarousel($carousel);

    // Clean up on component unmount
    return () => {
      $carousel.trigger('destroy.owl.carousel');
      $carousel.off();
    };
  }, []);

  const handleClickPrev = () => {
    if (carousel) {
      carousel.trigger('prev.owl.carousel');
    }
  };

  const handleClickNext = () => {
    if (carousel) {
      carousel.trigger('next.owl.carousel');
    }
  };
  return (
    <div className="pt-20 pb-20 mx-3 sm:mx-4 md:mx-4 ">
      <div className="flex">
        {!isSmallScreen && (
          <div className="bg-red-600 h-20 w-1 lg:ml-4 lg:mr-12"></div>
        )}
        <h1 className="text-black  font-anton text-4xl sm:text-[2.5rem] md:text-[2.5rem] lg:text-6xl uppercase mb-7">
          client's reviews
        </h1>
      </div>
      <div className="lg:mx-[5%]">
      <OwlCarousel className="owl-theme owl-carousel" items={1} loop dots={false}>
        <div className="item">
          <Card
            image={car1}
            clientsName="ravi m."
            review="My car's paintwork was flawless after the service; scratches disappeared, turning it
from a damaged to a brand-new, shining one.
The staff was polite and professional, explaining car issues and replacing old bumpers. The sleek, modern design improved appearance and performance. Highly recommendable workshop."
            carName="Brezza"
            service="Paint"
          />
        </div>
        <div className="item">
          <Card
            image={car2}
            clientsName="sarah l."
            review="The workshop was clean, organized, and confidently performed quality work. Staff used
high-quality materials ensuring impressive
clarity and smooth finish.
My car was thoroughly cleaned with impressive attention to detail, including the dashboard, the
workshop team was attentive and caring about my vehicle."
            carName="Swift"
            service="Ceramic Coating"
          />
        </div>
        <div className="item">
          <Card
            image={car3}
            clientsName="roshan"
            review="I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!"
            carName="Fortuner"
            service="Ceramic Coating"
          />
        </div>
      </OwlCarousel>
      </div>
      
      
      <div className="flex justify-center sm:justify-end md:justify-end lg:justify-end my-3 lg:mr-20">
        <CiCircleChevLeft
          onClick={handleClickPrev}
          className="nav-prev text-6xl mr-4 cursor-pointer hover:-mt-1"
        />
        <CiCircleChevRight
          onClick={handleClickNext}
          className="nav-next text-6xl cursor-pointer hover:-mt-1"
        />
      </div>
    </div>
  );
}

export default ClientReviews;
