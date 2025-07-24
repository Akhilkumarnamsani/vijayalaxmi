import React from "react";
import HeroImage from "../assets/Hero.png";

const HeroSection = ({ title, subtitle }) => {
  return (
    <div
      className="relative h-[70vh] bg-center bg-cover"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-amber-100">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;
