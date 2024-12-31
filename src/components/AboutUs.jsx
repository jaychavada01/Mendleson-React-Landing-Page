import React from "react";
import aboutUsImage from "../assets/about us 1.png";
import engagementIcon from "../assets/Enagagement icon 1.png";
import communicationIcon from "../assets/coomunication icon 1.png";
import groupBackground from "../assets/Group30.png";

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="relative w-full flex flex-col lg:flex-row py-6 px-4 sm:py-8 sm:px-12"
    >
      {/* Left Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center sm:p-8 p-4">
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full max-w-md lg:max-w-full object-contain"
        />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 flex flex-col gap-8 mt-6 lg:mt-0">
        {/* Title and Description */}
        <div>
          <h2
            className="font-medium text-2xl sm:text-4xl leading-[28px] sm:leading-[56px] bg-no-repeat bg-left-bottom w-fit pb-2"
            style={{
              backgroundImage: `url(${groupBackground})`,
            }}
          >
            ABOUT US
          </h2>
          <p className="font-normal text-base sm:text-lg leading-6 sm:leading-7 text-[#2C2C2C] mt-4">
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high-quality approach. We deliver value, creativity, results, and
            exceptional levels of customer service and professionalism. We
            specialize in infrastructure development, energy, and natural
            resources.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          {/* Engagement */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <div className="w-12 h-12">
              <img
                src={engagementIcon}
                alt="Engagement Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-2xl leading-5 sm:leading-7">
              Engagement
            </h3>
            <p className="font-normal text-sm sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
              We are engagement specialists, who have led projects at all
              levels of the IAP2 spectrum.{" "}
              <span className="text-pink-500">READ MORE</span>
            </p>
          </div>

          {/* Communications */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <div className="w-12 h-12">
              <img
                src={communicationIcon}
                alt="Communication Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-2xl leading-5 sm:leading-7">
              Communications
            </h3>
            <p className="font-normal text-sm sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
              We are award-winning leaders in communications and campaign
              management.{" "}
              <span className="text-pink-500">READ MORE</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
