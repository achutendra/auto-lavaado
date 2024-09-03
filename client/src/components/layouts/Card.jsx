import React from "react";
import { IoIosStar } from "react-icons/io";
function Card({ image, clientsName, review, carName, service }) {
  const nameFirstLetter = clientsName.toUpperCase().charAt(0);
  return (
    <div className="inline-block sm:flex md:flex lg:flex lg:justify-between h-auto w-[90vw] lg:w-[87vw] xl:w-[93vw] xl:h-[55vh] sm:mr-0 lg:mr-2 md:mr-0">
      <div className="w-[100vw] sm:w-[60%] md:w-[60%] lg:w-[40%]">
        <img
          className="h-[350px] w-full sm:h-[100%] sm:w-[370px] md:h-[60%] md:w-[390px] lg:h-[100%] lg:w-[100%] xl:w-[60%] "
          src={image}
          alt=""
        />
      </div>
      <div className="sm:w-[50%] md:w-[50%] lg:w-[45%] sm:ml-7 lg:mr-8 lg:pr-20">
        <div className="flex justify-start items-center my-10 sm:my-0 md:my-0 lg:my-0">
          <div className="bg-red-600 text-white rounded-full size-[60px] flex justify-center items-center font-anton text-3xl mr-10 uppercase">
            {nameFirstLetter}
          </div>
          <span className="text-black text-3xl font-anton uppercase">
            {clientsName}
          </span>
        </div>
        <div className="mt-8 mb-3">
          <q className="text-stone-500 leading-6 text-[1.15rem]">{review}</q>
        </div>
        <div className="">
        <div className="flex flex-wrap ">
          <IoIosStar className="text-[1.7rem] text-red-600" />
          <IoIosStar className="text-[1.7rem] text-red-600" />
          <IoIosStar className="text-[1.7rem] text-red-600" />
          <IoIosStar className="text-[1.7rem] text-red-600" />
          <IoIosStar className="text-[1.7rem] text-red-600" />
        </div>
        <span className="text-stone-400 mb-5">
          {carName} / {service}
        </span>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
