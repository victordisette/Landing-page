import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(39,124,48,1)] z-10 overflow-hidden px-20 py-[46px] max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[62%] max-md:w-full max-md:ml-0">
          <a 
            href="/privacy-policy" 
            className="text-white text-[40px] font-medium text-center block max-md:mt-10 hover:underline"
            aria-label="Política de Privacidade"
          >
            Política de Privacidade
          </a>
        </div>
        <div className="w-[38%] ml-5 max-md:w-full max-md:ml-0">
          <a 
            href="/terms-of-use" 
            className="text-white text-[40px] font-medium text-center block max-md:mt-10 hover:underline"
            aria-label="Termos de Uso"
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
