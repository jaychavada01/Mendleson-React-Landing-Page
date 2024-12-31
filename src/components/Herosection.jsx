import React from "react";
import asset3 from "../assets/Assets 3.png";
import asset4 from "../assets/Assets 4.png";
import graphic1 from "../assets/Graphic 1 2.png";
import vectorObject from "../assets/Vector Smart Object21 1.png";

const HeroSection = () => {
  return (
    <div
      id="homePage"
      className="relative w-full min-h-fit h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] max-h-[850px] mb-8"
    >
      {/* Background Images */}
      <img
        className="absolute -bottom-16 left-0 -z-40 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out"
        src={asset3}
        alt="Decorative Element Left"
      />
      <img
        className="absolute -bottom-16 right-0 -z-50 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out"
        src={asset4}
        alt="Decorative Element Right"
      />
      <img
        className="absolute -bottom-16 left-0 -z-50 hidden md:block"
        src={graphic1}
        alt="Background Graphic"
      />
      <img
        className="absolute -bottom-16 left-8 sm:left-16 md:left-20 lg:left-28 xl:left-36 -z-20 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[41rem] transition-all duration-300 ease-in-out"
        src={vectorObject}
        alt="Vector Graphic"
      />

      {/* Content */}
      <div className="flex flex-col justify-between gap-4 items-center sm:items-start px-6 sm:px-12 md:ml-[25%] lg:ml-[35%] xl:ml-[45%] mr-4 transition-all duration-1000 ease-in-out">
        {/* Title */}
        <div className="text-center sm:text-left w-full max-w-[459px] text-xl sm:text-2xl md:text-[40px] lg:text-[56px] lg:leading-[66px] leading-[33px] font-medium lg:-ml-[5px] lg:mt-[90px] sm:ml-[10px] sm:mt-[40px]">
          Mendleson Communication and Engagement
        </div>

        {/* Subtitle */}
        <div className="text-center sm:text-left w-full lg:max-w-[450px] font-normal text-base sm:text-lg leading-6 sm:leading-7 text-[#2C2C2C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
          ipsum, ut quam volutpat, tortor.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;