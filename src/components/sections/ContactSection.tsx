import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    // Show success message
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section id="contato" className="flex w-full flex-col items-stretch pt-[189px] max-md:max-w-full max-md:pt-[100px]">
      <div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] self-center w-[1415px] max-w-full pl-8 pr-[76px] py-[39px] rounded-[40px] max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[37%] max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(48,158,79,1)] flex w-full flex-col items-stretch text-[22px] text-white font-medium mx-auto pt-[70px] pb-[129px] px-[45px] rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
              <h2 className="text-3xl font-semibold text-center">
                Informações de Contato
              </h2>
              <div className="flex items-stretch gap-[7px] text-[rgba(234,234,234,1)] mt-[62px] max-md:ml-1.5 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/4b832c03dafce5a0dd3cb7e4d6cb9c3765d60242?placeholderIfAbsent=true"
                  alt="WhatsApp Icon"
                  className="aspect-[1] object-contain w-[59px] shrink-0"
                />
                <p className="basis-auto grow shrink my-auto">
                  WhatsApp: (11) 91441-5130
                </p>
              </div>
              <div className="self-center flex w-[341px] max-w-full items-stretch gap-[15px] mt-[68px] max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/8cb7aaccce85f571f62d9e9003f92ff6e7130c19?placeholderIfAbsent=true"
                  alt="Email Icon"
                  className="aspect-[1.33] object-contain w-11 shrink-0"
                />
                <p className="grow shrink w-[273px] basis-auto mt-3">
                  E-mail: renata@flagrdd.com.br
                </p>
              </div>
              <div className="flex items-stretch gap-3 ml-[13px] mt-[62px] max-md:ml-2.5 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/766fa037d6468d525bb5ad1e192f6c044b968508?placeholderIfAbsent=true"
                  alt="LinkedIn Icon"
                  className="aspect-[1] object-contain w-[47px] shrink-0"
                />
                <p className="basis-auto my-auto">
                  Linkedin: Renataoliveirarau
                </p>
              </div>
            </div>
          </div>
          <div className="w-[63%] ml-5 max-md:w-full max-md:ml-0">
            <form 
              onSubmit={handleSubmit}
              className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10"
            >
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch text-2xl text-[rgba(48,158,79,1)] font-medium max-md:mt-10">
                      <label htmlFor="name">Nome: </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-b border-[rgba(200,200,200,1)] border-solid mt-[45px] pb-2 outline-none focus:border-[rgba(48,158,79,1)] transition-colors max-md:mr-2 max-md:mt-10"
                      />
                    </div>
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch text-2xl text-[rgba(48,158,79,1)] font-medium mt-[78px] max-md:mt-10">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="border-b border-[rgba(200,200,200,1)] border-solid pb-2 outline-none focus:border-[rgba(48,158,79,1)] transition-colors"
                      />
                      <label htmlFor="phone" className="mt-[57px] max-md:mt-10">Telefone: </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-b border-[rgba(200,200,200,1)] border-solid mt-12 pb-2 outline-none focus:border-[rgba(48,158,79,1)] transition-colors max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label htmlFor="message" className="text-[rgba(48,158,79,1)] text-2xl font-medium mt-[62px] max-md:mt-10">
                Mensagem:{" "}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border-b-4 border-[rgba(52,168,83,1)] border-solid mt-[125px] pb-2 outline-none focus:border-[rgba(48,158,79,1)] transition-colors h-32 max-md:max-w-full max-md:mt-10"
              ></textarea>
              <button
                type="submit"
                className="bg-[rgba(52,168,83,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-2xl text-white font-medium mt-[33px] px-[51px] py-[9px] rounded-[10px] border-[rgba(52,168,83,1)] border-solid border-2 self-start hover:bg-[rgba(39,124,48,1)] transition-colors max-md:px-5"
              >
                Enviar{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
