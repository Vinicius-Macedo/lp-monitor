import React from "react";
import { DefaultMarginSectionBg } from "../components/DefaultMarginSectionBg";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";
import Image from "next/image";
import imageLoader from "../loader";

export default function Contato() {
  return (
    <main>
      <HeroSectionGeneric
        title={"TRABALHE CONOSCO"}
        text={"Construa sua carreira na Titan"}
        imgAdress={"trabalhe-conosco/trabalhe-conosco.webp"}
        imgAlt={"Imagem abstrata de tecnologia sobre trabalho em quipe"}
      />
      <DefaultMarginSectionBg
        className="flex justify-center items-center xl:gap-16"
        backgroundClass="bg-darkblue"
        isBackgroundImage={false}
      >
        <div className="w-full max-w-[540px] bg-darkblue">
          <h2 className="title-responsive text-blue font-bold text-center">
            TRABALHE COM A GENTE
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
            <p className="text-center text-white font-bold text-[12px]">
              A Wise Investimentos é uma empresa de agentes autônomos de
              investimentos contratada pelo BTG Pactual, na forma de legislação
              da CVM. Prezando por uma relação de transparência com seus
              clientes, ao informar seus dados nesta página você será
              redirecionado ao site de nosso parceiro BTG PACTUAL para dar
              continuidade na abertura de conta.
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
