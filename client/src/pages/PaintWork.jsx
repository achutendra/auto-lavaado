import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import bg2 from '../images/bg2.jpg'
import AppointmentContainer from './Contact/Component/Appointment-Contact'

const PaintWork = () => {
  return (
    <>
        <Header />
        <div className="bg-black text-gray-200">
        <div
          className="relative bg-cover bg-center h-96 opacity-100"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white  text-8xl font-extrabold mt-20 font-anton ">
              Paint Work
            </h1>
          </div>
        </div>
        </div>
        <div className=" lg:ml-[2%]">
        <AppointmentContainer />
      </div>
        <Footer />
    </>
  )
}

export default PaintWork