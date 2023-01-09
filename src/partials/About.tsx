import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full h-full flex bg-gray-600 justify-center item-center gap-6 py-[70px]">
      <div className="flex flex-col w-[570px] h-[382px] relative">
        <StaticImage src="../assets/images/dice.jpg" alt="dice image" />
        <div className="text-white text-center flex justify-center items-center absolute inset-0 z-10">
          <p className="text-start">
            <strong>A Regra de Ouro do RPG:</strong> 'Para o Bem e para o <br />
            Mal...Diversão até o final'
          </p>
        </div>
      </div>
      <div className="w-[570px] h-[382px]  bg-gray-700 px-[60px] py-[50px]">
        <div className="flex flex-col gap-[66px]">
          <div className="text-white text-start flex flex-col gap-5 ">
            <h2 className="font-bold ">O que fazemos?</h2>
            <p>
              O site da Taverna de Mordor surgiu com o objetivo de unir jogar
              com organizar os jogos, gerenciar mesas e participar de eventos
            </p>
          </div>
          <div className="text-white text-start flex flex-col gap-5">
            <h2 className="font-bold ">Qual a nossa meta?</h2>
            <p>
              Dar total autonomia para o mestre gerenciar sua mesa e para os
              administradores terem uma visão geral sobre os jogadores quanto os
              mestres e as mesas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
