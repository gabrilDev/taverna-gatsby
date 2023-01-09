import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className=" bg-gray-800 w-full h-[512px] flex flex-col place-items-center justify-around">
      <StaticImage src="../assets/images/cover-rpg.jpg" alt="Rpg heroes" />
      <h1 className= "text-white text-center flex flex-col text-[64px] font-bold absolute">
        Taverna de Mordor
      </h1>
    </div>
  );
};

export default Hero;
