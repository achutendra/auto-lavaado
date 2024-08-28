import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,  faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-200 py-6">
      <div className="h-px w-full mb-10 bg-stone-400"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="text-center">
            <p className="text-stone-700">© Auto Lavaado. All Rights Reserved 2024. Licensing</p>
            <p className="text-gray-400">Keep In Touch With Us On - </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/Auto.Lavaado"
              target="_blank"
              rel="noopener noreferrer"
            >
               <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-blue-600" />
            </a>
            
            <a
              href="https://x.com/autolavaado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-blue-400" />    {/* rounded-full object-cover */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-pink-600" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-blue-700" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
