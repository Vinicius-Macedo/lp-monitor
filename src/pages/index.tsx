const imageLoader = require("./../loader.js");
import Image from "next/image";

import SocialMediaIcons from "../components/SocialMediaIcons";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import { DefaultMarginSectionBg } from "../components/DefaultMarginSectionBg";
import { CardWithImage } from "../components/CardWithImage";
import GrowingNumberCard from "../components/GrowingNumberCard";
import { CardBlueWithImage } from "../components/CardBlueWithImage";
import CardAuthorWithHoverEffect from "../components/CardAuthorWithHoverEffect";
import FaleComAGenteSection from "../components/FaleComAGenteSection";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="relative w-full h-[600px] px-8 xl:pt-40 overflow-x-hidden">
          <div className="flex flex-col items-center justify-center gap-16 h-full w-full max-w-[1110px] m-auto">
            <Image
              src={"home/titan-with-description.png"}
              alt={"Logo do Titan com descrição da imagem"}
              loader={imageLoader}
              width={532}
              height={371}
              style={{
                objectFit: "contain",
              }}
              unoptimized
              priority
            />
            {/* <SocialMediaIcons className="w-full justify-center xl:justify-end" /> */}
          </div>

          <Image
            src={"home/hero-section.png"}
            alt={"Imagem abstrata de fundo"}
            loader={imageLoader}
            style={{ zIndex: -1, objectFit: "cover" }}
            fill
            unoptimized
            priority
          />
        </section>
        <DefaultMarginSection className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:justify-between">
          <div className="relative">
            <figure className="lg:w-[496px] xl:w-[530px] xl:-mr-30 3xl:w-[644px] 3xl:-mr-50">
              <Image
                src={"home/mulher-e-homem-olhando-celular.png"}
                alt={"Aula presencial sobre investimentos"}
                loader={imageLoader}
                width={730}
                height={494}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                unoptimized
              />
            </figure>
            <div className="gradient-bg-blue"></div>
          </div>
          <article className="pt-20 lg:pt-0 flex flex-col gap-8 max-w-[540px] lg:pl-14 lg:border-l-2 lg:border-l-blue lg:border-l-solid">
            <p className="text-responsive text-center-lg">
              A{" "}
              <span className="text-blue text-[36px] font-bold">
                TITAN CAPITAL
              </span>{" "}
              uma gestora de recursos especializada na estruturação de fundos de
              investimentos, com rígido controle de riscos e foco nas melhores
              oportunidades.
            </p>
            <p className="text-responsive text-center-lg">
              Combinando experiência e inserção nos mercados local e
              internacional, a Titan Capital atua com uma abordagem customizada
              e de diferenciação para o cliente e procura oferecer uma qualidade
              superior em seus serviços
            </p>
          </article>
        </DefaultMarginSection>
        <DefaultMarginSectionBg
          backgroundClass="bg-dark"
          className="flex flex-col gap-32 lg:gap-64"
          isBackgroundImage={false}
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-15">
            <CardWithImage
              imgAdress={"home/icone-segurando-acoes.png"}
              imgAlt={"icone de ações"}
              title={"MISSÃO"}
              text={
                "Combinando experiência e inserção nos mercados local e internacional, a Titan Capital atua com uma abordagem customizada e de diferenciação para o cliente e procura oferecer uma qualidade superior em seus serviços"
              }
            />
            <CardWithImage
              imgAdress={"home/icone-apresentacao.png"}
              imgAlt={"icone de apresentação"}
              title={"ESTRATÉGIA DE GESTÃO"}
              text={
                "Com a indústria tradicional de fundos, focando em segmentos que trazem diversificação para nossos investidores, em um processo de investimento inovador."
              }
            />
            <CardWithImage
              imgAdress={"home/icone-aperto-de-mao.png"}
              imgAlt={"icone de aperto de mãos"}
              title={"RELAÇÕES COM O INVESTIDOR"}
              text={
                "Acreditamos que uma relação próxima e transparente com os investidores e parceiros é a melhor forma de alinharmos os interesses e criarmos uma relação mútua de confiança com geração de valor."
              }
            />
          </div>
          <div className="flex flex-col gap-16 lg:gap-32">
            <h2 className="title-responsive text-blue font-bold text-center">
              NOSSOS NUMEROS CRESCEM TODOS OS DIAS
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-15">
              <GrowingNumberCard
                number={14}
                description={"ANOS DE EXPERIÊNCIA"}
                hasPlusIcon={false}
                hasMi={false}
              />
              <GrowingNumberCard
                number={10}
                description={"PROFISSIONAIS"}
                hasPlusIcon={true}
                hasMi={false}
              />
              <GrowingNumberCard
                number={400}
                description={"ATIVOS SOB GESTÃO"}
                hasPlusIcon={false}
                hasMi={true}
              />
            </div>
          </div>
        </DefaultMarginSectionBg>
        <DefaultMarginSection className="flex flex-col ga-16 lg:gap-32">
          <h2 className="title-responsive text-blue font-bold text-center">
            PRODUTOS
          </h2>
          <div className="flex flex-wrap justify-center gap-16 lg:gap-32">
            <CardBlueWithImage
              imgAdress={"home/icone-dinheiro.png"}
              imgAlt={"icone de dinheiro"}
              text={"FUNDOS DE INVESTIMENTOS"}
            />
            <CardBlueWithImage
              imgAdress={"home/icone-wealth-management.png"}
              imgAlt={"icone de diamante"}
              text={"WEALTH MANAGEMENT"}
            />
            <CardBlueWithImage
              imgAdress={"home/icone-fids.png"}
              imgAlt={"icone de cartão e dinheiro"}
              text={"FIDS"}
            />
          </div>
        </DefaultMarginSection>
        <section
          className={
            "px-8 py-32 sm:px-16 md:py-64 xl:px-0 xl:w-[1210px] xl:m-auto" +
            " flex flex-col items-center gap-16 lg:gap-32"
          }
        >
          <h2 className="title-responsive text-blue font-bold text-center">
            HISTÓRICO DA GESTORA
          </h2>
          <p className="text-center">
            Os fundadores da Titan Capital atuaram por anos em instituições
            internacionais de primeira linha na construção de carteiras globais
            de investimento com foco na compra e venda de ativos e derivativos
            nos mercados americano e europeu.
          </p>
          <div className="lg:hidden">
            <Image
              src={"home/linha-do-tempo-vertifcal.svg"}
              alt={"História da Titan Capital"}
              height={1210}
              width={333}
              style={{ objectFit: "contain", width: "269px", height: "909px" }}
              unoptimized
              loader={imageLoader}
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src={"home/linha-do-tempo.svg"}
              alt={"História da Titan Capital"}
              height={1147}
              width={336}
              style={{ objectFit: "contain", width: "1147px", height: "336px" }}
              unoptimized
              loader={imageLoader}
            />
          </div>
        </section>
        <DefaultMarginSectionBg
          className="flex flex-col gap-16 lg:gap-32 -z-[10]"
          backgroundClass="bg-dark"
          isBackgroundImage={false}
        >
          <h2 className="title-responsive text-white font-semibold text-center">
            EQUIPE
          </h2>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <CardAuthorWithHoverEffect
              imgAdress={"home/author-1.png"}
              title={"NOME DO AUTOR"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <CardAuthorWithHoverEffect
              imgAdress={"home/author-2.png"}
              title={"NOME DO AUTOR"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <CardAuthorWithHoverEffect
              imgAdress={"home/author-3.png"}
              title={"NOME DO AUTOR"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
          </div>
        </DefaultMarginSectionBg>
        <FaleComAGenteSection />
      </main>
    </>
  );
}
