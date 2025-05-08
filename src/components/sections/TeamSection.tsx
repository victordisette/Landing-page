import React from "react";
import TeamMemberCard from "../ui/TeamMemberCard";

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white z-10 flex w-full flex-col items-center pt-[41px] pb-[110px] max-md:max-w-full max-md:pb-[100px]">
      <h2 className="text-[rgba(39,124,48,1)] text-[70px] font-semibold text-center max-md:max-w-full max-md:text-[40px]">
        <span className="text-[rgba(39,124,48,1)]">Conheça Nosso</span> Time!
      </h2>
      <div className="z-10 flex w-[1114px] max-w-full items-stretch gap-5 flex-wrap justify-between ml-[15px] mt-[131px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/9d277624ee715fdadc6d9e4f524bb950c63421e5?placeholderIfAbsent=true"
          alt="Renata Oliveira"
          className="aspect-[0.87] object-contain w-[225px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] shrink-0 max-w-full rounded-[200px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/07a63ef4966f2df82e54246eef686288cab2b802?placeholderIfAbsent=true"
          alt="Marcela Ventura"
          className="aspect-[0.87] object-contain w-[225px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] shrink-0 max-w-full rounded-[200px]"
        />
      </div>
      <div className="self-stretch mb-[-22px] w-full max-md:max-w-full max-md:mb-2.5 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[79%] max-md:w-full max-md:ml-0">
            <div className="mr-[-753px] grow max-md:max-w-full">
              <TeamMemberCard
                name="Renata Oliveira"
                role="CEO"
                description="Fundadora e CEO da Flagr e Especialista em Direito Empresaria/Societário, com foco em startups."
                imageUrl="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/9d277624ee715fdadc6d9e4f524bb950c63421e5?placeholderIfAbsent=true"
              />
            </div>
          </div>
          <div className="w-[21%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(217,217,217,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex grow flex-col items-center text-[32px] text-[rgba(39,124,48,1)] text-center w-full pt-[139px] pb-[47px] px-6 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
              <h3 className="font-black">Marcela Ventura</h3>
              <p className="text-4xl font-light mt-2.5">COO</p>
              <p className="font-normal self-stretch mt-[109px] max-md:max-w-full max-md:mt-10">
                Fundadora e COO da Flagr e <br />
                Especialista em Direito Tributário, com foco em startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
