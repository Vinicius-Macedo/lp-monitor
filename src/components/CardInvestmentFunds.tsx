import React from "react";
import Image from "next/image";
import imageLoader from "../loader";
import { FaFileDownload } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

type CardInvestmentFundsProps = {
  title: string;
  objetivo: string;
  prazoDeAplicao: string;
  prazoDeResgate: string;
  aplicaoInicial: string;
  movimentacaoMinima: string;
  saldoMinimo: string;
  taxaDeAdministracao: string;
  taxaDePerformance: string;
  certificaoAnbima: string;
  resgate: string;
  rentabilidade: string;
  RentabilidadeTipo?: number;
  risco: string;
  documentosArray: Documentos[];
  objetivoDescricao: string;
  isTextSmall?: boolean;

  rating: string;
};

type Documentos = {
  nome: string;
};

export default function CardInvestmentFunds(props: CardInvestmentFundsProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMobile()) {
      document.getElementsByTagName("body")[0].style.overflow = isModalOpen
        ? "hidden"
        : "auto";
    }
  }, [isModalOpen]);

  function removeSpacesAndAccents(str: string) {
    return str
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s/g, "-")
      .toLowerCase();
  }

  function isMobile() {
    return window.innerWidth <= 768;
  }

  return (
    <>
      <div
        className="w-[300px] lg:w-[380px] bg-darkblue flex flex-col lg:flex lg:flex-row-reverse cursor-pointer justify-self-center"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative">
          <Image
            className="hidden lg:block"
            src={"fundos/triangle.svg"}
            alt={"Vetor de triângulo"}
            loader={imageLoader}
            width={82}
            height={199}
            style={{ width: "100px", height: "auto", objectFit: "contain" }}
            unoptimized
          />
          <Image
            className="lg:hidden -mt-[1px]"
            src={"fundos/triangle-horizontal.svg"}
            alt={"Vetor de triângulo"}
            loader={imageLoader}
            width={82}
            height={199}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            unoptimized
          />
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={"fundos/plus.svg"}
            alt={"Vetor de mais"}
            width={43}
            height={43}
            loader={imageLoader}
            unoptimized
          />
        </div>
        <div className="py-8 px-16 lg:pr-0 lg:pl-8 flex flex-col lg:justify-between gap-4 text-white">
          <h1 className="text-white font-bold text-center text-[24px]  lg:text-left lg:w-[282px] h-36">
            {props.title}
          </h1>
          <div className="flex flex-col gap-4">
            <p className="font-semibold opacity-80">Resgate: {props.resgate}</p>
            <p
              className={
                "font-semibold opacity-80 h-36 lg:h-auto max-w-[282px]" +
                (props.isTextSmall ? " text-[14px]" : "")
              }
            >
              Rentabilidade{" "}
              {props.RentabilidadeTipo ? props.RentabilidadeTipo : "12"} meses:{" "}
              {props.rentabilidade}
            </p>
            <p className="text-white font-semibold text-[20px]">
              Risco: {props.risco}
            </p>
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <>
          <div
            onClick={() => setIsModalOpen(false)}
            className="bg-black w-screen h-screen fixed left-0 top-0 z-[1] opacity-50"
          ></div>
          <div className="fixed left-1/2 top-[55%] w-full max-w-[1110px] bg-white z-[2] -translate-x-1/2 -translate-y-1/2">
            <div className="px-16 py-24 gap-x-16 gap-y-8 grid lg:grid-cols-2 overflow-y-scroll h-full max-h-[75vh] relative">
              <div
                className="absolute right-0 top-0 w-24 h-24 flex justify-center items-center cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <AiFillCloseCircle size={24} color={"#EB5757"} />
              </div>
              <article className="flex flex-col gap-8">
                <Title title={"Informações Gerais"} />
                <div className="flex flex-col gap-4">
                  <Campo label={"Objetivo"} value={props.objetivo} />
                  <Campo
                    label={"Prazo de aplicação"}
                    value={props.prazoDeAplicao}
                  />
                  <Campo
                    label={"Prazo de resgate"}
                    value={props.prazoDeResgate}
                  />
                  <Campo
                    label={"Aplicação inicial"}
                    value={props.aplicaoInicial}
                  />
                  <Campo
                    label={"Movimentação mínima"}
                    value={props.movimentacaoMinima}
                  />
                  <Campo label={"Saldo mínimo"} value={props.saldoMinimo} />
                  <Campo
                    label={"Taxas de administração"}
                    value={props.taxaDeAdministracao}
                  />
                  <Campo
                    label={"Taxa de performance"}
                    value={props.taxaDePerformance}
                  />
                  <Campo
                    label={"Classificação ANBIMA"}
                    value={props.certificaoAnbima}
                  />

                  <Campo label={"Rating"} value={props.rating} />
                </div>
              </article>
              <div className="flex flex-col gap-8">
                {props.documentosArray.length > 0 ? (
                  <article className="flex flex-col gap-8">
                    <Title title={"Documentos"} />
                    <div className="flex flex-col gap-8">
                      {props.documentosArray.map((documento, i) => (
                        <a
                          href={removeSpacesAndAccents(documento.nome) + ".pdf"}
                          key={i}
                          className="flex justify-between items-center hover-p-style"
                        >
                          <p>{documento.nome}</p>
                          <FaFileDownload />
                        </a>
                      ))}
                    </div>
                  </article>
                ) : (
                  ""
                )}

                {props.objetivoDescricao ? (
                  <article className="flex flex-col gap-8">
                    <Title title={"Objetivos"} />
                    <p>
                      <span className="text-[18px] font-semibold">
                        Objetivo:{" "}
                      </span>

                      {props.objetivoDescricao}
                    </p>
                  </article>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

type CampoProps = {
  label: string;
  value: string;
};

function Campo(props: CampoProps) {
  return (
    <>
      {props.value ? (
        <div className="flex justify-between items-center w-full">
          <p className="text-[16px] text-[#444]">{props.label}</p>
          <p className="text-[18px] text-right text-darkblue">{props.value}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

type TitleProps = {
  title: string;
};

function Title(props: TitleProps) {
  return (
    <>
      {props.title ? (
        <h2 className="text-[22.5px] text-darkblue font-bold dotted-after">
          {props.title}
        </h2>
      ) : (
        ""
      )}
    </>
  );
}
