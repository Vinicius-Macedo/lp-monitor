// React export function

import imageLoader from "../loader";
import { DefaultMarginSectionBg } from "./DefaultMarginSectionBg";

export default function FaleComAGenteSection() {
  return (
    <DefaultMarginSectionBg
      isBackgroundImage={true}
      imgAdress={"formulario-imagem.png"}
      imgAlt={"Mulher sorrindo olhando para você"}
      className="flex flex-col gap-16 lg:gap-32"
    >
      <div className="w-full max-w-[540px]">
        <h2 className="title-responsive text-blue font-bold text-center mb-16 lg:mb-32">
          FALE CONOSCO
        </h2>
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
          <button className="bg-[#4F9DE1] hover:bg-[#2178c4] active:bg-[#4F9DE1] text-center text-white font-bold py-8 mt-8 lg:mt-16">
            ENVIAR
          </button>
          <p className="text-center text-white font-bold text-[12px]">
            A Wise Investimentos é uma empresa de agentes autônomos de
            investimentos contratada pelo BTG Pactual, na forma de legislação da
            CVM. Prezando por uma relação de transparência com seus clientes, ao
            informar seus dados nesta página você será redirecionado ao site de
            nosso parceiro BTG PACTUAL para dar continuidade na abertura de
            conta.
          </p>
        </form>
      </div>
    </DefaultMarginSectionBg>
  );
}
