import React from 'react'
import { IoIosStar } from "react-icons/io";
function Card({image, clientsName, review, carName, service}) {
  const nameFirstLetter = clientsName.toUpperCase().charAt(0);
  return (
    <div className='inline-block sm:flex md:flex lg:flex h-[60vh] w-[90vw]'>
      <div className='w-[100vw] sm:w-[60%] md:w-[60%] lg:w-[60%]'>
        <img className='h-[350px] w-full sm:h-auto sm:w-[370px] md:h-[95%] md:w-[390px] lg:h-[80%] lg:w-[65%]' src={image} alt="" />
      </div>
      <div className='sm:w-[50%] md:w-[50%] lg:w-[50%] sm:ml-7 lg:mr-8'>
      <div className='flex justify-start items-center my-10 sm:my-0 md:my-0 lg:my-0'>
        <div className='bg-red-600 text-white rounded-full size-[60px] flex justify-center items-center font-anton text-3xl mr-10 uppercase'>{nameFirstLetter}</div>
        <span className='text-black text-3xl font-anton uppercase'>{clientsName}</span>
      </div>
      <div className='my-8 '>
            <q className='text-stone-500 text-[1.15rem]'>{review}</q>
      </div>
      <div className='flex sm:mt-20 lg:mt-20 md:mt-20'>
      <IoIosStar className='text-[1.7rem] text-red-600' />
      <IoIosStar className='text-[1.7rem] text-red-600' />
      <IoIosStar className='text-[1.7rem] text-red-600' />
      <IoIosStar className='text-[1.7rem] text-red-600' />
      <IoIosStar className='text-[1.7rem] text-red-600' />
      </div>
      <span className='text-stone-400'>
        {carName} / {service}
      </span>
      </div>
      
    </div>
  )
}

export default Card
