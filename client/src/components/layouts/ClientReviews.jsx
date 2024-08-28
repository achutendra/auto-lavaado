import { useMediaQuery } from "react-responsive";
import React,{useState, useRef, useEffect} from "react";
import Card from "./Card";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import car3 from "../../images/car3.jpg";
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";

function ClientReviews() {
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const [currentIndex, setCurrentIndex] = useState(0);
    const [cardCount, setCardCount] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            setCardCount(sliderRef.current.children.length);
        }
    }, [sliderRef.current]);

    // Handle previous button click
    const handleClickPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            const box = sliderRef.current;
            let width = box.clientWidth;
            box.scrollLeft -= width;
        }
    };

     // Handle next button click
     const handleClickNext = () => {
      if (currentIndex < cardCount - 1) {
          setCurrentIndex(currentIndex + 1);
          const box = sliderRef.current;
          let width = box.clientWidth;
          box.scrollLeft += width;
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
      <div ref={sliderRef} className="flex overflow-hidden scroll-smooth slider lg:ml-20" >
        <div className="w-[100vw] mr-3 sm:mr-8 md:mr-10">
          <Card
            image={car1}
            clientsName="ravi m."
            review="My car's paintwork was flawless after the service; flaking and scratches disappeared, turning it
from a damaged to a brand-new, shining one.
The staff was polite and professional, explaining car issues and replacing old bumpers and side
skirts. The sleek, modern design improved appearance and performance, making the car
squeal. Highly recommendable workshop."
            carName="Brezza"
            service="Paint"
          />
        </div>
        <div
          className="w-[100vw] mr-5 sm:mr-8 md:mr-10"
          
        >
          <Card
            image={car2}
            clientsName="sarah l."
            review="The workshop was clean, organized, and confidently performed quality work. Staff used
high-quality PPF to protect my car from scratches, chips, and UV damage, ensuring impressive
clarity and smooth finish.
My car was thoroughly cleaned with impressive attention to detail, including the dashboard, the
workshop team was attentive and caring about my vehicle."
            carName="Swift"
            service="Ceramic Coating"
          />
        </div>
        <div className="w-[100vw]  sm:mr-8 md:mr-10">
          <Card
            image={car3}
            clientsName="roshan"
            review="I had my interior detailing done at CarWash, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!"
            carName="Fortuner"
            service="Ceramic Coating"
          />
        </div>
      </div>

      <div className="flex justify-center sm:justify-end md:justify-end lg:justify-end my-3 lg:mr-20">
        <CiCircleChevLeft onClick={handleClickPrev} disabled={currentIndex === 0} className="text-6xl mr-4 cursor-pointer hover:-mt-1" />
        <CiCircleChevRight onClick={handleClickNext} disabled={currentIndex >= cardCount - 1} className="text-6xl cursor-pointer hover:-mt-1" />
      </div>
    </div>
    
  );
}

export default ClientReviews;
