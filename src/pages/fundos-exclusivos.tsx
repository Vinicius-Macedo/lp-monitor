import React from "react";
import Image from "next/image";
import { CardDarkBlue } from "../components/CardDarkBlue";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";
import imageLoader from "../loader";
import FidcMiniArticle from "../components/FidcMiniArticle";
import FaleComAGenteSection from "../components/FaleComAGenteSection";
import CardGeometric from "../components/CardGeometric";
import { DefaultMarginSectionBg } from "../components/DefaultMarginSectionBg";

export default function FundosExclusivos() {
  var marginLeft = "xl:-ml-20";

  return (
    <main>
      <HeroSectionGeneric
        title={"FUNDOS EXCLUSIVOS"}
        text={
          "ANTECIPAÇÃO DE RECEBÍVEIS, FEITA SOB MEDIDA, ATRAVÉS DA ESTRUTURAÇÃO DA FIDC's."
        }
        imgAdress={"fidc/fidc-hero.png"}
        imgAlt={"Imagem abstrata de gráficos misturado com moedas físicas"}
      />
      {/* <DefaultMarginSection>
        <p className="text-center text-[20px] md:text-[32px]">
          <span className="text-blue font-bold">FIDC</span> é a sigla para
          Fundo de Investimento em Direitos Creditórios. É um fundo de
          investimento que aplica em títulos de crédito criados a partir de
          contas a receber de uma determinada empresa.
        </p>
      </DefaultMarginSection> */}
      <DefaultMarginSectionBg
        hasNoMarginTop={true}
        className="flex justify-center items-center"
        isBackgroundImage={false}
        backgroundClass={"bg-[#000000]"}
      >
        <Image
          src={"fidc/fluxograma-fidc.png"}
          alt={"Fluxograma de investimentos"}
          loader={imageLoader}
          unoptimized
          width={961}
          height={456}
        />
      </DefaultMarginSectionBg>
      <DefaultMarginSectionBg
        hasNoMarginTop={true}
        className="flex flex-col gap-16 lg:gap-32"
        isBackgroundImage={false}
        backgroundClass={"bg-[#000000]"}
      >
        <h2 className="title-responsive font-bold text-blue text-center xl:text-left">
          ETAPAS
        </h2>
        <div className="flex flex-wrap justify-center max-w-[540px] xl:max-w-none gap-15 m-auto">
          <CardDarkBlue
            imgAdress={"fidc/icone-fidc-01.png"}
            imgAlt={"icone de carteira"}
            text={"DÍVIDA PARCELADA"}
          />
          <CardDarkBlue
            imgAdress={"fidc/icone-fidc-02.png"}
            imgAlt={"icone de maquininha de pagamentos"}
            text={"CRÉDITO A RECEBER DA EMPRESA"}
          />
          <CardDarkBlue
            imgAdress={"fidc/icone-fidc-03.png"}
            imgAlt={"icone de mão segurando cifrão"}
            text={"VENDE SEU DIREITO DE CRÉDITO"}
          />
          <CardDarkBlue
            imgAdress={"fidc/icone-fidc-04.png"}
            imgAlt={"icone de papeis com cifrão"}
            text={"FIDC COMPRA OS DIREITOS CREDITÓRIOS"}
          />
        </div>
      </DefaultMarginSectionBg>
      <DefaultMarginSection className="flex flex-col-reverse items-center gap-16 lg:grid lg:grid-cols-2 lg:items-start">
        <article className="flex flex-col gap-16">
          <h2 className="title-responsive font-bold text-blue text-center xl:text-left">
            VANTAGENS FIDC
          </h2>
          <div className="flex flex-col gap-16">
            <FidcMiniArticle
              title={"1. Isenção do IOF"}
              text={
                "O IOF (Imposto sobre Operações Financeiras) está isento quando se opera com um FIDC, a depender do tipo de crédito que foi cedido no fundo. Isso representa 0,5% em operação de 30 dias ou 0,75% para 90 dias. Além disso, as taxas são mais competitivas em comparação aos bancos comerciais, devido à desintermediação financeira."
              }
            />
            <FidcMiniArticle
              title={"2. Economia Fiscal"}
              text={
                "Uma das vantagens do FIDC diz respeito às operações, que são isentas de tributação como, por exemplo, a Contribuição Social sobre o Lucro Líquido (CSSL), o Programa de Integração Social (PIS), Contribuição para Seguridade Social (COFINS) e Imposto de Renda Jurídica (IRPJ). Entretanto, somente o Imposto de Renda é cobrado no momento do resgate dos recursos pelo investidor do fundo, ou seja, o quotista."
              }
            />
            <FidcMiniArticle
              title={
                "3. Boa imagem no mercado de crédito é uma das vantagens do FIDC"
              }
              text={
                "Os FIDCs são regulados pela CVM (Comissão de Valores Mobiliários) e têm como base legal a Resolução CMN nº 2907 e Instrução CVM 356. Ele é um fundo de investimento de renda fixa, organizado por uma instituição financeira e administrado por profissionais de mercado. Além disso, o FIDC permite alavancagem com investidores qualificados."
              }
            />
            <FidcMiniArticle
              title={"4. Inexistência de reciprocidades bancárias"}
              text={
                "Uma das outras vantagens do FIDC é a inexistência de reciprocidades bancárias, cuja atividade torna a operação mais onerosa. As operações com o FIDC são muito menos burocráticas em comparação aos bancos. Outra vantagem é a prática de taxas inferiores, uma vez que os recebíveis das empresas se transformam em lastro para o fundo. Assim, o crédito torna-se um título que é capaz de gerar renda, mantendo, assim, a operação do FIDC."
              }
            />
          </div>
        </article>
        <Image
          src={"fidc/vantagens-fidc.png"}
          alt={"Foto de mulher sorrindo para o celular"}
          loader={imageLoader}
          unoptimized
          width={536}
          height={654}
        />
      </DefaultMarginSection>
      <DefaultMarginSection
        className="flex flex-wrap justify-center m-auto w-full max-w-[900px] xl:max-w-none xl:flex-nowrap"
        hasNoMarginTop={true}
      >
        <CardGeometric
          text={"DIAGNÓSTICO CONJUNTO"}
          imgAdress={"fidc/card-fidc-01.png"}
          imgAlt={"icone de cardeneta com planilha"}
          poligonColor={"#8DC6DC"}
        />
        <CardGeometric
          text={"CONSTRUÇÃO DE CENÁRIOS"}
          imgAdress={"fidc/card-fidc-02.png"}
          imgAlt={"icone de banco de dados"}
          poligonColor={"#48A5CA"}
          customClass={marginLeft}
        />
        <CardGeometric
          text={"LEVANTAMENTO DAS ALTERNATIVAS"}
          imgAdress={"fidc/card-fidc-03.png"}
          imgAlt={"icone de tiro ao alvo"}
          poligonColor={"#276AA3"}
          customClass={marginLeft}
        />
        <CardGeometric
          text={"ESCOLHA DA SOLUÇÃO"}
          imgAdress={"fidc/card-fidc-04.png"}
          imgAlt={"icone de avatar segurando lâmpada alegre"}
          poligonColor={"#2C578E"}
          customClass={marginLeft}
        />
      </DefaultMarginSection>
      <FaleComAGenteSection />
    </main>
  );
}
