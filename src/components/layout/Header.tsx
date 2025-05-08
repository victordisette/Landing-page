import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white flex flex-col overflow-hidden items-stretch pt-[31px]">
      <div className="self-center flex w-full max-w-[1799px] items-stretch gap-5 flex-wrap justify-between ml-[22px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/26645def9009b8c5eecb6a082a55ea3a05909fc3?placeholderIfAbsent=true"
          alt="Flagr Logo"
          className="aspect-[2.96] object-contain w-[234px] shrink-0 max-w-full"
        />
        <div className="flex items-stretch gap-[40px_44px] flex-wrap my-auto max-md:max-w-full">
          <nav className="flex items-stretch gap-[35px] text-2xl text-[rgba(0,63,13,1)] font-normal flex-wrap grow shrink basis-auto my-auto max-md:max-w-full">
            <a href="#inicio" className="hover:text-[rgba(48,158,79,1)] transition-colors">Início</a>
            <a href="#sobre" className="basis-auto hover:text-[rgba(48,158,79,1)] transition-colors">
              Sobre Nós
            </a>
            <a href="#beneficios" className="basis-auto my-auto hover:text-[rgba(48,158,79,1)] transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="basis-auto my-auto hover:text-[rgba(48,158,79,1)] transition-colors">
              Como Funciona
            </a>
            <a href="#planos" className="hover:text-[rgba(48,158,79,1)] transition-colors">Planos</a>
            <a href="#contato" className="hover:text-[rgba(48,158,79,1)] transition-colors">Contato</a>
          </nav>
          <div className="flex items-stretch gap-[17px] text-xl font-medium grow-0 shrink basis-auto">
            <button
              className="bg-[rgba(147,162,103,0)] border text-[rgba(0,63,13,1)] whitespace-nowrap px-[67px] py-3 rounded-[20px] border-[rgba(48,158,79,1)] border-solid max-md:px-5 hover:bg-[rgba(48,158,79,0.1)] transition-colors"
              aria-label="Entrar na conta"
            >
              Entrar
            </button>
            <button
              className="bg-[rgba(48,158,79,1)] text-[rgba(251,251,251,1)] px-[21px] py-3 rounded-[20px] max-md:px-5 hover:bg-[rgba(39,124,48,1)] transition-colors"
              aria-label="Começar a usar o Flagr"
            >
              Comece agora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
