import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="bg-[rgba(39,124,48,1)] flex flex-col text-white px-[77px] py-12 max-md:max-w-full max-md:px-5">
      <h2 className="text-5xl font-bold text-center max-md:text-[40px]">
        Sobre nós
      </h2>
      <p className="text-4xl font-normal mt-[30px] max-md:max-w-full">
        A Flagr revoluciona o processo de due diligence jurídica, oferecendo
        uma solução automatizada que é rápida, eficiente e acessível. Evite os
        altos custos e a demora tradicionalmente associados ao processo,
        mantendo sua empresa pronta para investimentos e transações a qualquer
        momento.
      </p>
    </section>
  );
};

export default AboutSection;
