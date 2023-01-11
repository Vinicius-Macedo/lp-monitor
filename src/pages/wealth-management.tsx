import React from "react";
import CardSolucoes from "../components/CardSolucoes";
import CardWealth from "../components/CardWealth";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import { DefaultMarginSectionBg } from "../components/DefaultMarginSectionBg";
import FaleComAGenteSection from "../components/FaleComAGenteSection";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";
import Image from "next/image";
import imageLoader from "../loader";

export default function WealthManagement() {
  return (
    <main>
      <section className="relative w-full h-[600px] px-8 xl:pt-40 overflow-x-hidden">
        <div className="w-full h-full max-w-[1110px] m-auto text-white flex flex-col justify-center xl:justify-between py-32 gap-16 ">
          <div className="flex flex-col xl:gap-16">
            <h1
              className={"text-center lg:text-left title-responsive font-light"}
            >
              WEALTH MANAGEMENT
            </h1>

            <p className="text-center lg:text-justify text-responsive max-w-[730px]">
              Construímos planos em sinergia com os mercados globais e objetivos
              individuais, de forma personalizada, resiliente e completa, com
              rentabilidade real e consistente.
            </p>
          </div>
          {/* <SocialMediaIcons className="w-full justify-center lg:justify-start xl:justify-end" /> */}
        </div>

        <Image
          src={"wealth-management/wealth-hero-2.png"}
          alt={
            "Fundo abstrato com celular gerindo vários aplicativos sobre investimentos"
          }
          loader={imageLoader}
          style={{ zIndex: -1, objectFit: "cover" }}
          fill
          unoptimized
          priority
        />
      </section>
      <DefaultMarginSection className="flex flex-col gap-32">
        <p className="text-center text-[20px] md:text-[32px]">
          <span className="text-blue">Wealth Management</span> ( Gestão
          Patrimonial) própria para famílias e empresários. Abrangemos
          constantemente com nossa rede global diversificada e inovadora,
          construímos portfólios de investimentos personalizados, resilientes e
          impactantes com retornos reais sustentáveis.
        </p>
        <h2 className="title-responsive text-blue text-center font-bold">
          NOSSAS SOLUÇÕES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
          <CardSolucoes
            title={"FUNDOS EXCLUSIVOS"}
            subTopics={[
              {
                text: "- Fundo de investimento exclusivo para empresas, indivíduos e famílias",
              },
              {
                text: "- Benefício do diferimento físcal",
              },
              { text: "- Ideal para planejamento patrimonial familiar" },
              { text: "- Maiores possibilidades de investimentos" },
            ]}
          />
          <CardSolucoes
            title={"CARTEIRAS ADMINISTRADAS"}
            subTopics={[
              { text: "- Gestão profissional dos investimentos pessoais" },
              { text: "- Adequação ao perfil de risco" },
              { text: "- Remuneração transparente e cashback integral" },
              { text: "- Alinhamento de interesse" },
              {
                text: "- Acesso a produtos exclusivos das mesas institucionais",
              },
            ]}
          />
        </div>
      </DefaultMarginSection>
      <DefaultMarginSectionBg
        isBackgroundImage={false}
        backgroundClass="bg-[#202227]"
        className="wealth-container gap-32"
      >
        <CardWealth
          title={"ESTUDO DE PERFIL DO INVESTIDOR"}
          text={
            "Determinação do perfil do investidor como objetivos de retorno e risco, horizontes de investimento, tolerâncias, necessidades de liquidez e restrições e o estabelecimento da política de investimentos compatível com o perfil do cliente."
          }
          number={1}
          imgAdres={"wealth-management/icone-wealth-01.png"}
          imgAlt={"Icon de interseção de laptop e avatares"}
        />
        <CardWealth
          title={"MODELAGEM E ALOCAÇÃO DE PORTFÓLIO"}
          text={
            "São definidos previamente os modelos de alocação estratégica com o emprego de técnicas de modelagem quantitativas de estudo do portfólio como unidade sistêmica. Após a modelagem, são definidas as classes de ativos disponíveis, a exposição desejada e alocação de recursos entre as grandes classes de ativos."
          }
          number={2}
          imgAdres={"wealth-management/icone-wealth-02.png"}
          imgAlt={"Icone de pasta de documentos"}
        />
        <CardWealth
          title={"SELEÇÃO DE TÍTULOS"}
          text={
            "Análise de portfólio com o foco na classe de ativos e não na seleção individual de títulos, utilizamos títulos físicos, indexadores ou fundos de índice em bolsa. Evitamos o uso da seletividade “stock picking” ou o “market timing” com papéis de empresas individuais como parte do processo de decisão de compras de títulos."
          }
          number={3}
          imgAdres={"wealth-management/icone-wealth-03.png"}
          imgAlt={"Icone de lupa e documentos"}
        />
        <CardWealth
          title={
            "TESTES DE COMPATIBILIDADE DOS OBJETIVOS POR PORTFÓLIO EM TERMOS QUANTITATIVOS"
          }
          text={
            "Condução de testes de compatibilidade dos objetos de retorno e de risco do portfólio em termos quantitativos."
          }
          number={4}
          imgAdres={"wealth-management/icone-wealth-04.png"}
          imgAlt={"Icone de documento com checklist"}
        />
      </DefaultMarginSectionBg>
      {/* <FaleComAGenteSection /> */}
    </main>
  );
}
