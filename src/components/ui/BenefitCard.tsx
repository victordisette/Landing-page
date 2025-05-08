import React from "react";

interface BenefitCardProps {
  title: string;
  iconUrl: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, iconUrl, description }) => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="bg-white self-center flex w-[221px] flex-col items-center justify-center aspect-[1] px-11 rounded-[50%] border-[rgba(39,124,48,1)] border-solid border-2 max-md:px-5">
        <img
          src={iconUrl}
          alt={title}
          className="aspect-[1.09] object-contain w-[89px]"
        />
      </div>
      <h3 className="text-[rgba(39,124,48,1)] text-[32px] font-black text-center mt-[27px]">
        {title}
      </h3>
      <p className="text-[rgba(48,158,79,1)] text-3xl font-normal tracking-[3px] text-center mt-5">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
