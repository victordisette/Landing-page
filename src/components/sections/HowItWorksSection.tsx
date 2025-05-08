import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="bg-[rgba(39,124,48,1)] flex w-full gap-5 text-[22px] text-white text-center flex-wrap justify-between mt-2.5 px-20 py-[35px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex flex-col items-stretch font-medium">
        <h2 className="text-5xl font-bold max-md:text-[40px]">
          Como funciona?
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/cf331d54f03842a619be12f90ec615edafec7605?placeholderIfAbsent=true"
          alt="Upload Icon"
          className="aspect-[1] object-contain w-[74px] self-center mt-[26px]"
        />
        <h3 className="self-center">Upload</h3>
        <p className="mt-[37px]">
          Faça o upload dos documentos da sua startup e deixe a Flagr analisar
          tudo automaticamente.
        </p>
      </div>
      <div className="flex flex-col items-center mt-[105px] max-md:max-w-full max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/8ee2fdfc93df1c8342244af631f75d62d84e5a40?placeholderIfAbsent=true"
          alt="Velocidade Icon"
          className="aspect-[1.29] object-contain w-[53px]"
        />
        <h3 className="font-semibold mt-[21px]">Velocidade</h3>
        <p className="font-medium self-stretch mt-[45px] max-md:max-w-full max-md:mt-10">
          Tenha seus contratos e riscos jurídicos revisados com agilidade,
          economizando tempo e reduzindo erros.
        </p>
      </div>
      <div className="flex flex-col items-center mt-[99px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/b6a29382b7c5fa6e95f939854d2de31a92226323?placeholderIfAbsent=true"
          alt="Clareza Icon"
          className="aspect-[0.88] object-contain w-[43px]"
        />
        <h3 className="font-semibold mt-5">Clareza</h3>
        <p className="font-medium self-stretch mt-[38px]">
          Receba insights detalhados e <br />
          tome decisões estratégicas com confiança e transparência.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
