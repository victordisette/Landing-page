import React from "react";
import BenefitCard from "../ui/BenefitCard";

const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="bg-white flex w-full flex-col items-center -mt-2.5 pt-20 pb-60 px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <h2 className="text-[rgba(48,158,79,1)] text-[70px] font-semibold text-center max-md:max-w-full max-md:text-[40px]">
        Benefícios{" "}
        <span className="text-[rgba(0,63,13,1)]">dos nossos serviços</span>
      </h2>
      <div className="flex w-full max-w-[1567px] items-stretch gap-5 flex-wrap justify-between mt-[124px] max-md:max-w-full max-md:mt-10">
        <div className="flex flex-col items-stretch">
          <div className="bg-white self-center flex w-[221px] flex-col items-center justify-center aspect-[1] px-11 rounded-[50%] border-[rgba(39,124,48,1)] border-solid border-2 max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/9dd16e4e6a4371713e0468149460088fe49ef0ff?placeholderIfAbsent=true"
              alt="Redução de Custos"
              className="aspect-[1.09] object-contain w-[89px]"
            />
          </div>
          <h3 className="text-[rgba(39,124,48,1)] text-[32px] font-black text-center mt-[27px]">
            Redução de Custos
          </h3>
        </div>
        <div className="flex flex-col items-stretch">
          <div className="bg-white self-center flex w-[221px] flex-col items-center justify-center aspect-[1] px-11 rounded-[50%] border-[rgba(39,124,48,1)] border-solid border-2 max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/492487b2fd00c87ed917828865176debd0cf7a6c?placeholderIfAbsent=true"
              alt="Agilidade"
              className="aspect-[1.3] object-contain w-[87px]"
            />
          </div>
          <h3 className="text-[rgba(39,124,48,1)] text-[32px] font-black text-center mt-[27px]">
            Redução de Custos
          </h3>
        </div>
        <div className="flex flex-col items-stretch text-[32px] text-[rgba(39,124,48,1)] font-black text-center">
          <div className="bg-white flex shrink-0 h-[214px] aspect-[1] rounded-[50%] border-[rgba(39,124,48,1)] border-solid border-2" />
          <h3 className="self-center mt-[25px]">
            Visibilidade{" "}
          </h3>
        </div>
      </div>
      <div className="w-full max-w-[1738px] mt-[81px] -mb-12 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <p className="text-[rgba(48,158,79,1)] text-3xl font-normal tracking-[3px] text-center max-md:max-w-full max-md:mt-10">
              Elimine as despesas exorbitantes com consltorias e escritórios
              tradicionais.
            </p>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <p className="text-[rgba(48,158,79,1)] text-3xl font-normal tracking-[3px] text-center max-md:max-w-full max-md:mt-10">
              Garanta agilidade em fusões, aquisições e operações
              imobiliárias, com dados sempre atualizados e acessíveis.
            </p>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <p className="text-[rgba(48,158,79,1)] text-3xl font-normal tracking-[3px] text-center max-md:max-w-full max-md:mt-10">
              Forneça relatórios completos e certificados de forma fácil e
              rápida para análise de investidores interessados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
