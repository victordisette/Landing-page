import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  imageUrl,
  isReversed = false,
}) => {
  return (
    <div className={`gap-5 flex max-md:flex-col max-md:items-stretch ${isReversed ? 'flex-row-reverse' : ''}`}>
      <div className="w-[79%] max-md:w-full max-md:ml-0">
        <div className="bg-[rgba(39,124,48,1)] flex shrink-0 h-[243px] mt-[70px] max-md:max-w-full max-md:mt-10" />
      </div>
      <div className="w-[21%] ml-5 max-md:w-full max-md:ml-0">
        <div className="bg-[rgba(217,217,217,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex grow flex-col items-center text-[32px] text-[rgba(39,124,48,1)] text-center w-full pt-[136px] pb-[47px] px-[49px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
          <h3 className="font-black">{name}</h3>
          <p className="text-4xl font-light mt-2.5">{role}</p>
          <p className="font-normal self-stretch mt-[109px] max-md:mt-10">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
