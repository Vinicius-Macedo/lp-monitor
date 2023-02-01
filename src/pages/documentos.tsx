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
            { title: "Formulário de Referência CVM - 558" },
            { title: "Política de Gestão de Risco em Liquidez" },
            {
              title: "Política de Exercício de Direito ao Voto - FII",
            },
            {
              title:
                "Política de Exercício de Direito ao Voto em Assembleia Geral",
            },
            { title: "Política Integrada de Gestão de Riscos" },
            { title: "Política de Rateio e Divisão de Ordens" },
            { title: "Política de Compliance e Controles" },
            { title: "Manual de Compliance" },
            { title: "Código de Ética e Conduta" },
            // { title: "Formulário de Referência – Anexo 15-II ICVM 558 2021" },
            // { title: "Manual de Compliance 2021" },
            // { title: "Padrões de Conduta – O Código de Ética e Conduta 2019" },
            // { title: "Políticas e Normas para Controles Internos 2019" },
            // {
            // title:
            // "Política para Investimentos Pessoais e Insider Trading 2020",
            // },
            // {
            // title:
            // "Política de Rateio e Divisão de Ordens entre Carteiras de Valores Mobiliários 2019",
            // },
            // { title: "Manual Interno de Gestão de Riscos 2019" },
            // { title: "Política de Gestão de Risco de Liquidez 2019" },
            // {
            // title: "Política de Gestão e Avaliação de Risco de Crédito 2021",
            // },
            // {
            // title:
            // "Política de Gestão e Avaliação de Risco de Mercado e Taxa de Juros 2019",
            // },
          ]}
        />
      </DefaultMarginSection>
    </main>
  );
}
