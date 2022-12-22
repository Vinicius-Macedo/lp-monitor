import React from "react";
import CardDePdfs from "../components/CardDePdfs";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";

export default function Documentos() {
  return (
    <main>
      <HeroSectionGeneric
        title={"DOCUMENTOS"}
        imgAdress={"documentos/hero-documentos.png"}
        imgAlt={
          "Imagem abstrata de calculadora e globo terreste simulando ambiente de escritório"
        }
        titleIsBig={true}
      />
      <DefaultMarginSection className="flex flex-wrap gap-16">
        <CardDePdfs
          cardTitle={"POLÍTICAS E MANUAIS"}
          pdfs={[
            { title: "Lâmina - DEEP BLUE" },
            { title: "Lâmina - FIA ADVANCED" },
            { title: "Lâmina - FIA CHRONOS" },
            { title: "Lâmina - FIC FIM TITAN CAPITAL" },
            {
              title: "Lâmina - FIQ FIDC VIA",
            },
            {
              title: "Lâmina - WISE SELECTION",
            },
            { title: "Regulamento - DEEP BLUE" },
            { title: "Regulamento - FIA ADVANCED" },
            {
              title: "Regulamento - FIA CHRONOS",
            },
            {
              title: "Regulamento - FIC FIM TITAN CAPITAL",
            },
            { title: "Regulamento - FIQ FIDC VIA" },
            { title: "Regulamento - WISE CASH" },
            { title: "Regulamento - WISE PREV" },
            { title: "Regulamento - WISE SELECTION" },
          ]}
        />
        {/* <CardDePdfs
          cardTitle={"POLÍTICAS E MANUAIS"}
          pdfs={[
            { title: "Formulário de Referência – Anexo 15-II ICVM 558 2021" },
            { title: "Manual de Compliance 2021" },
            { title: "Padrões de Conduta – O Código de Ética e Conduta 2019" },
            { title: "Políticas e Normas para Controles Internos 2019" },
            {
              title:
                "Política para Investimentos Pessoais e Insider Trading 2020",
            },
            {
              title:
                "Política de Rateio e Divisão de Ordens entre Carteiras de Valores Mobiliários 2019",
            },
            { title: "Manual Interno de Gestão de Riscos 2019" },
            { title: "Política de Gestão de Risco de Liquidez 2019" },
            {
              title: "Política de Gestão e Avaliação de Risco de Crédito 2021",
            },
            {
              title:
                "Política de Gestão e Avaliação de Risco de Mercado e Taxa de Juros 2019",
            },
          ]}
        />
        <CardDePdfs
          cardTitle={"POLÍTICA DE VOTO"}
          hasGrayBackground={true}
          pdfs={[
            {
              title:
                "Política do Exercício de Direito de Voto em Assembléias Gerais",
            },
            {
              title:
                "Política do Exercício de Direito de Voto para Fundos FIIs",
            },
          ]}
        />
        <CardDePdfs
          cardTitle={"PARTICIPAÇÕES EM ASSEMBLÉIAS"}
          hasDescriptionInTheEnd={true}
          DescriptionText={
            "A partir de 2016 não houve mais Participação em Assembléia, somente para os Fundos Exclusivos."
          }
          pdfs={[
            { title: "2013 – Quadro Resumo das Participações em Assembléias" },
            { title: "2014 – Quadro Resumo das Participações em Assembléias" },
            { title: "2015 – Quadro Resumo das Participações em Assembléias" },
          ]}
        /> */}
      </DefaultMarginSection>
    </main>
  );
}
