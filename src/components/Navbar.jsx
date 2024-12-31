import React, { useState } from "react";
import logo from "../assets/logo.png";
import asset1 from "../assets/Asset 1.png";
import asset2 from "../assets/Asset 2.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center w-full px-6 sm:px-10 lg:px-36 py-4 lg:py-6 z-10">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="ml-2 h-12 md:h-16 lg:h-20" />
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden lg:flex space-x-6 text-gray-700 font-medium">
        <a href="#aboutUs" className="hover:text-pink-500 transition">About Us</a>
        <a href="#services" className="hover:text-pink-500 transition">Services</a>
        <a href="#ourTeam" className="hover:text-pink-500 transition">Team</a>
        <a href="#ourClients" className="hover:text-pink-500 transition">Clients</a>
        <a href="#contactUs" className="hover:text-pink-500 transition">Contact Us</a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden focus:outline-none text-gray-700 mt-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "grid" : "hidden"
        } lg:hidden space-y-4 text-white font-medium mt-4 w-full bg-gray-800 rounded-md px-4 py-6 transition`}
      >
        <a href="#aboutUs" className="hover:text-pink-500 transition">About Us</a>
        <a href="#services" className="hover:text-pink-500 transition">Services</a>
        <a href="#ourTeam" className="hover:text-pink-500 transition">Team</a>
        <a href="#ourClients" className="hover:text-pink-500 transition">Clients</a>
        <a href="#contactUs" className="hover:text-pink-500 transition">Contact Us</a>
      </div>

      {/* Decorative Images */}
      <img
        className="absolute top-0 left-0 -z-50 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 transition-all duration-300 ease-in-out"
        src={asset1}
        alt="Top Left Decoration"
      />
      <img
        className="absolute top-0 right-0 -z-50 w-28 sm:w-36 md:w-48 lg:w-60 xl:w-72 transition-all duration-300 ease-in-out"
        src={asset2}
        alt="Top Right Decoration"
      />
    </div>
  );
}

export default Navbar;