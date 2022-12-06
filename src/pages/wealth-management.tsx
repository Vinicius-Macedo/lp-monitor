import React from "react";
import CardSolucoes from "../components/CardSolucoes";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import FaleComAGenteSection from "../components/FaleComAGenteSection";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";

export default function WealthManagement() {
  return (
    <main>
      <HeroSectionGeneric
        title={"WEALTH MANAGEMENT"}
        text={
          "Construímos planos em sinergia com os mercados globais e objetivos individuais, de forma personalizada, resiliente e completa, com rentabilidade real consistente"
        }
        imgAdress={"wealth-management/wealth-hero.png"}
        imgAlt={
          "Fundo abstrato com celular gerindo vários aplicativos sobre investimentos"
        }
      />
      <DefaultMarginSection className="flex flex-col gap-32">
        <p className="text-center text-[20px] md:text-[32px]">
          <span className="text-blue">Wealth Management</span> ( Gestão
          Patrimonial) propria para famílias e empresários. Envolvermos
          constantemente com nossa rede global diversificada e inovadora,
          construímos portfólios de investimentos personalizados, resilientes e
          impactantes com retornos reais sustentáveis.
        </p>
        <h2 className="title-responsive text-blue text-center font-black">
          NOSSAS SOLUÇÕES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
          <CardSolucoes
            title={"FUNDOS EXCLUSIVOS"}
            subTopics={[
              {
                text: "* Fundo de investimento exclusivo para empresas, indivíduos e famílias",
              },
              {
                text: "* Benefício do diferimento físcal.",
              },
              { text: "* Ideal para planejamento patrímonial familiar" },
              { text: "* Maiores possibilidades de investimentos " },
            ]}
          />
          <CardSolucoes
            title={"CARTEIRAS ADMINISTRADAS"}
            subTopics={[
              { text: "* Gestão profissional dos investimentos pessoais ." },
              { text: "* Adequação ao perfil de risco." },
              { text: "* Remuneração transparente e cas back integral." },
              { text: "* Alinhamento de interesse." },
              {
                text: "* Acesso à produtos exclusivos das mesas institucionais.",
              },
            ]}
          />
        </div>
      </DefaultMarginSection>
      <FaleComAGenteSection/>
    </main>
  );
}
