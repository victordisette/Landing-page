import React from "react";

interface PricingFeature {
  title: string;
  details: string[];
}

interface PricingCardProps {
  title: string;
  price: string;
  bgColor: string;
  features: PricingFeature[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  bgColor,
  features,
}) => {
  return (
    <div className={`${bgColor} shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col self-stretch font-semibold text-center w-full py-[27px] px-5`}>
      <div className="self-center flex w-full max-w-[301px] flex-col items-center text-white">
        <h3 className="text-[32px]">{title}</h3>
        <p className="text-5xl mt-[34px] max-md:text-[40px]">{price}</p>
        <p className="text-xl mt-5">por mês</p>
        {title !== "Start" && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/5fb36f385de9e4e12cdb2c71f45dbf7dc74c9342?placeholderIfAbsent=true"
            alt="Divider"
            className="aspect-[333.33] object-contain w-full self-stretch mt-[35px]"
          />
        )}
      </div>
      
      {features.map((feature, index) => (
        <div key={index} className="text-white text-xl mt-[19px] max-md:max-w-full">
          {feature.title}
          <br />
          {feature.details.map((detail, detailIndex) => (
            <span key={detailIndex} className="text-[15px]">
              {" "}
              {detail}
              <br />
            </span>
          ))}
        </div>
      ))}
      
      <button 
        className="bg-white text-2xl text-[rgba(39,124,48,1)] whitespace-nowrap self-center mt-[37px] px-[37px] py-[9px] hover:bg-gray-100 transition-colors"
        aria-label={`Obter plano ${title}`}
      >
        Obter
      </button>
    </div>
  );
};

export default PricingCard;
