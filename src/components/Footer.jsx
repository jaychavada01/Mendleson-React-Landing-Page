import React from "react";
import facebookIcon from "../assets/facebook 1.png";
import linkedinIcon from "../assets/linkedin 1.png";
import googleIcon from "../assets/Group 20.png";

const Footer = () => {
  return (
    <div id="contactUs" className="mt-20 w-full flex justify-center px-4 sm:px-8 lg:px-16">
      <div className="bg-[#BFDBFF] p-6 sm:p-8 md:p-12 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 w-full max-w-[1260px] min-w-fit text-sm leading-7 rounded-lg">
        {/* Social Section */}
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Social</p>
          <a href="#" className="flex items-center relative hover:text-pink-500">
            Facebook
            <img
              className="absolute -left-5 w-4 h-4 rounded-md"
              src={facebookIcon}
              alt="Facebook"
            />
          </a>
          <a href="#" className="flex items-center relative hover:text-pink-500">
            Linkedin
            <img
              className="absolute -left-5 w-4 h-4 rounded-md"
              src={linkedinIcon}
              alt="Linkedin"
            />
          </a>
          <a href="#" className="flex items-center relative hover:text-pink-500">
            Google +
            <img
              className="absolute -left-5 w-4 h-4 rounded-md"
              src={googleIcon}
              alt="Google Plus"
            />
          </a>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Explore</p>
          <a href="#" className="hover:text-pink-500">Services</a>
          <a href="#" className="hover:text-pink-500">Team</a>
          <a href="#" className="hover:text-pink-500">Clients</a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Contact</p>
          <a href="#" class="hover:text-pink-500">Lorem Ipsum dummy address</a>
          <a href="#" class="hover:text-pink-500">Used for display</a>
          <a href="#" class="hover:text-pink-500">1234567890</a>
        </div>

        {/* Email Section */}
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Email</p>
          <a
            href="mailto:mendlesoncommunication@email.com"
            className="text-xs sm:text-sm hover:text-pink-500 transition duration-200"
          >
            mendlesoncommunication@email.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;