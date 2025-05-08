import React from "react";

const ForYouSection: React.FC = () => {
  return (
    <section className="bg-[rgba(39,124,48,1)] flex flex-col items-stretch text-white pt-9 pb-16 px-[78px] max-md:max-w-full max-md:px-5">
      <h2 className="text-5xl font-bold text-center max-md:max-w-full max-md:text-[40px]">
        Somos para você!
      </h2>
      <p className="text-4xl font-normal mt-[29px] max-md:max-w-full">
        Se você é uma startup em fase de desenvolvimento e expansão, que busca
        estruturar sua base jurídica com segurança e eficiência ou
        empreendedor que desejam evitar riscos legais desde os primeiros
        passos, somos a plataforma certa para você!
      </p>
    </section>
  );
};

export default ForYouSection;
