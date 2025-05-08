import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="bg-white mt-8 pt-[173px] px-[70px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[46%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col self-stretch items-stretch text-[70px] font-semibold my-auto max-md:max-w-full max-md:text-[40px] max-md:mt-10">
            <h1 className="text-[rgba(39,124,48,1)] z-10 max-md:max-w-full max-md:text-[40px]">
              Flagr, automatizando sua StartUp
            </h1>
            <div className="text-white mt-[-163px] max-md:max-w-full max-md:text-[40px]" aria-hidden="true">
              Flagr, automatizando sua StartUp
            </div>
            <p className="text-[rgba(0,63,13,1)] text-3xl font-normal w-[607px] mt-[52px] max-md:max-w-full max-md:mt-10">
              Transformamos a Due Diligence da sua startup em um processo
              rápido, preciso e seguro. Reduza riscos e tome decisões com mais
              confiança.
            </p>
            <button 
              className="bg-[rgba(48,158,79,1)] text-xl text-[rgba(251,251,251,1)] font-bold text-center mt-[39px] px-[23px] py-3 rounded-[15px] max-md:max-w-full max-md:px-5 hover:bg-[rgba(39,124,48,1)] transition-colors"
              aria-label="Agendar demonstração gratuita"
            >
              Agende uma demonstração gratuita!
            </button>
          </div>
        </div>
        <div className="w-[54%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/8a1b3ee9c1951028e0cbb22ab2eb27d40074ad08?placeholderIfAbsent=true"
            alt="Plataforma Flagr"
            className="aspect-[1] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
