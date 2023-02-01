import React from "react";
import { DefaultMarginSectionBg } from "../components/DefaultMarginSectionBg";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";
import Image from "next/image";
import imageLoader from "../loader";
import FaleComAGenteSection from "../components/FaleComAGenteSection";

export default function Contato() {
  return (
    <main>
      <HeroSectionGeneric
        title={"FALE CONOSCO"}
        text={""}
        imgAdress={"trabalhe-conosco/trabalhe-conosco.webp"}
        imgAlt={"Imagem abstrata de tecnologia sobre trabalho em quipe"}
      />
      <FaleComAGenteSection />
      <DefaultMarginSectionBg
        className="flex justify-center items-center xl:gap-16"
        backgroundClass="bg-darkblue"
        isBackgroundImage={false}
      >
        <div className="w-full max-w-[540px] bg-darkblue">
          <h2 className="title-responsive text-blue font-bold text-center">
            CONTATO
          </h2>
          <p className="text-center text-white my-8">
            Nossos valores: Combinamos diferentes expertises pautadas em
            princípios éticos que nos guiam e criam uma cultura única. Dessa
            forma, ampliamos nosso potencial na busca de soluções flexíveis e
            ágeis para clientes e parceiros, gerando valor de longo prazo para
            nossos investidores
          </p>
          <form className="flex flex-col gap-8">
            <div className="input-container">
              <label htmlFor="name">NOME</label>
              <input type="text" id="name" />
            </div>
            <div className="input-container">
              <label htmlFor="phone">CELULAR</label>
              <input type="text" id="phone" />
            </div>
            <div className="input-container">
              <label htmlFor="email">EMAIL</label>
              <input type="text" id="email" />
            </div>
            <div className="input-container">
              <label htmlFor="message">ASSUNTO/MENSAGEM</label>
              <textarea id="message" rows={5}></textarea>
            </div>
            <button className="bg-[#4F9DE1] hover:bg-[#2178c4] active:bg-[#4F9DE1] text-center text-white font-bold py-8">
              ENVIAR
            </button>
            <p className="text-justify text-white font-bold text-[12px]">
              A Titan preza por uma relação de transparência. Enviando seu
              contato, está ciente de que seus dados podem ser utilizados para
              fins comerciais da Titan e demais empresas do grupo.
            </p>
          </form>
        </div>
        <div>
          <Image
            src={"trabalhe-conosco/formulario-image.png"}
            alt={"Reunião de time equipe"}
            className="hidden xl:block"
            loader={imageLoader}
            width={0}
            height={0}
            style={{
              objectFit: "fill",
              width: "600px",
              height: "100%",
            }}
            unoptimized
          />
        </div>
      </DefaultMarginSectionBg>
    </main>
  );
}
