import React from "react";
import PricingCard from "../ui/PricingCard";

const PricingSection: React.FC = () => {
  const startFeatures = [
    {
      title: "Dashboard",
      details: [
        "Contratos (elaboração ou revisão) :",
        "1 crédito/mês",
        "Consultória Jurídica: 30min/mês",
      ],
    },
    {
      title: "Data Room Jurídico",
      details: ["Relatório de Due Dilligence: 1x/ano"],
    },
    {
      title: "Assistente Virtual",
      details: ["para Dúvidas (24/7)"],
    },
  ];

  const essentialFeatures = [
    {
      title: "Dashboard",
      details: [
        "Contratos (elaboração ou revisão) :",
        "2 créditos/mês",
        "Consultória Jurídica: 1h/mês",
      ],
    },
    {
      title: "Data Room Jurídico",
      details: [
        "Relatório de Due Dilligence: 3x/ano",
        "Gestão de contratos: até 2",
        "Correção de Riscos do Relatório de",
        "Due Diligence: 3x/ano",
      ],
    },
    {
      title: "Assistente Virtual",
      details: [
        "para Dúvidas (24/7)",
        "Análise de Pitch Deck: 1x por mês",
      ],
    },
    {
      title: "Divulgação de score",
      details: ["para investidores"],
    },
  ];

  const masterFeatures = [
    {
      title: "Dashboard",
      details: [
        "Contratos (elaboração ou revisão) :",
        "3 créditos/mês",
        "Consultória Jurídica: 2h/mês",
      ],
    },
    {
      title: "Data Room Jurídico",
      details: [
        "Relatório de Due Dilligence: 6x/ano",
        "Gestão de contratos: até 4",
        "Correção de Riscos do Relatório de",
        "Due Diligence: 6x/ano",
      ],
    },
    {
      title: "Assistente Virtual",
      details: [
        "para Dúvidas (24/7)",
        "Análise de Pitch Deck: 1x por mês",
      ],
    },
    {
      title: "Divulgação de score",
      details: ["para investidores"],
    },
    {
      title: "Monitoramento de 1 (uma) Marca",
      details: [],
    },
  ];

  return (
    <section id="planos" className="bg-white flex flex-col items-center justify-center px-20 py-[72px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1362px] flex-col items-stretch max-md:max-w-full">
        <h2 className="text-[rgba(48,158,79,1)] text-[70px] font-semibold text-center self-center ml-[25px] max-md:max-w-full max-md:text-[40px]">
          <span className="text-[rgba(0,63,13,1)]">Conheça Nossos</span> Planos!
        </h2>
        <div className="mt-[61px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[33%] max-md:w-full max-md:ml-0">
              <PricingCard
                title="Start"
                price="R$ 1.650"
                bgColor="bg-[rgba(70,183,102,1)]"
                features={startFeatures}
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <PricingCard
                title="Essential"
                price="R$ 2.650"
                bgColor="bg-[rgba(39,124,48,1)]"
                features={essentialFeatures}
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <PricingCard
                title="Master"
                price="R$ 4.250"
                bgColor="bg-[rgba(70,183,102,1)]"
                features={masterFeatures}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
