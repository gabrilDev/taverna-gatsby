import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[174px] relative bg-gray-800 flex flex-col place-items-center justify-end ">
      <div className="h-3/4  flex flex-col border-t-[3px] w-[1170px] border-white ">
        <p className="text-white text-center my-auto relative">
          ©Copyright. 2021.Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
