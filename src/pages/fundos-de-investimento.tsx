import React from "react";
import imageLoader from "../loader";
import Image from "next/image";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import CardInvestmentFunds from "../components/CardInvestmentFunds";

export default function FundosDeInvestimento() {
  return (
    <main>
      <HeroSectionGeneric
        title={"FUNDOS"}
        imgAdress={"fundos/fundos-hero.png"}
        imgAlt={"Imagem abstrata de gráficos misturado com moedas físicas"}
      />
      <DefaultMarginSection className="flex flex-col gap-32">
        <h2 className="title-responsive text-blue text-center font-bold">
          FUNDOS DE INVESTIMENTO
        </h2>
        <div className="flex flex-wrap justify-center gap-15">
          <CardInvestmentFunds title={"SMART FUND DEEP BLUE FIM"} />
          <CardInvestmentFunds title={"FIC FIM CP TITAN CAPITAL"} />
          <CardInvestmentFunds title={"WISE SELECTION FIC FIM CP"} />
          <CardInvestmentFunds title={"FIM ADVANCED"} />
          <CardInvestmentFunds title={"FIM ADVANCED"} />
        </div>
      </DefaultMarginSection>
    </main>
  );
}
