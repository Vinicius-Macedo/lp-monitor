const imageLoader = require("./../loader.js");
import Image from "next/image";
import BottomCard from "../components/BottomCard";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import { SimpleCard } from "../components/SimpleCard";
import { TopicText } from "../components/TopicText";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <DefaultMarginSection
          hasNoEffect={true}
          styles={{ backgroundImage: "url('./img/hero-background.webp')" }}
          containerClassName={"bg-cover bg-no-repeat"}
          className={"flex flex-col items-center lg:items-start"}
        >
          <Image
            src={"./img/happy-men-phone.webp"}
            alt={"Homem feliz segurando celular"}
            className={
              "w-[388px]  h-[352px]  sm:w-[453px] sm:h-[554px]  object-contain lg:h-auto lg:max-w-none lg:absolute lg:bottom-0 lg:-right-[30px] lg:w-[388px] xl:right-[60px] 3xl:right-[10vw]"
            }
            // style={{ width: "100%", height: "100%" }}
            width={453}
            height={591}
            unoptimized
            loader={imageLoader}
          />
          <div className="max-w-[730px] flex flex-col items-center lg:items-start gap-8">
            <h1 className="title font-medium text-white text-center lg:text-left ">
              RECEBA PRIMEIRO AS <span className="text-orange">NOTÍCIAS</span> E{" "}
              <span className="text-orange">ANÁLISES</span> QUE VÃO IMPACTAR O
              MERCADO
            </h1>
            <p className="semi-title text-white text-center lg:text-left">
              TOME AS MELHORES DECISÕES PARA OS SEUS INVESTIMENTOS
            </p>
            <a
              className="semi-title text-white bg-orange font-medium py-6 px-16 rounded"
              href="https://app.hub.la/checkout/pCUsaXyrjBrAyRTLDN3W"
              target="_blank"
              rel="noreferrer"
            >
              ASSINAR
            </a>
          </div>
          <Image
            className="absolute left-0 bottom-0 z-[1] object-contain"
            src={"./img/bell-icon.webp"}
            alt={"Icone de sino"}
            width={100}
            height={80}
            loader={imageLoader}
            unoptimized
          />
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          containerClassName={"bg-cover bg-no-repeat"}
          styles={{
            backgroundImage: "url('./img/square-background-repeat.webp')",
          }}
          className={
            "flex flex-col gap-16 items-center lg:flex-row lg:justify-between"
          }
        >
          <Image
            src={"./img/graphic-illustration.webp"}
            alt={""}
            style={{ width: "auto", height: "auto" }}
            width={1072}
            height={474}
            loader={imageLoader}
            unoptimized
            className="absolute left-0 top-0 object-contain z-[1]"
          />
          <Image
            src={"./img/notification-alert.webp"}
            className={"object-contain relative"}
            alt={""}
            width={305}
            height={59}
            loader={imageLoader}
            unoptimized
          />
          <div className="p-8 flex flex-col gap-4 bg-[#E9E9E9] max-w-[525px] relative">
            <p className="semi-title font-medium">
              <span className="text-orange">PREPARE-SE</span> PARA TER ACESSO,
              EM PRIMEIRA MÃO, A INFORMAÇÕES{" "}
              <span className="text-orange">VALIOSAS</span> PARA{" "}
              <span className="text-orange">SEUS INVESTIMENTOS.</span>
            </p>
            <p className="text text-orange underline font-medium">
              POTENCIALIZE SUA CAPACIDADE DE TOMAR DECISÕES E ALCANÇAR SEUS
              OBJETIVOS FINANCEIROS.
            </p>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          containerClassName="bg-cover bg-no-repeat"
          styles={{ backgroundImage: "url('./img/phone-background.webp')" }}
          className="flex flex-col items-center gap-16 lg:flex-row-reverse"
        >
          <Image
            src={"./img/mobile-screen.webp"}
            alt={
              "Celular e tablets com notificações e sites do Monitor do Mercado"
            }
            width={442}
            height={612}
            loader={imageLoader}
            unoptimized
          />
          <div className="flex flex-col items-center max-w-[605px] lg:items-start gap-16 xl:gap-32">
            <p className="semi-title font-bold text-white text-center lg:text-left">
              <span className="text-orange">O MONITOR DO MERCADO</span> É UMA
              PLATAFORMA RECONHECIDA DE{" "}
              <span className="text-orange">INFORMAÇÕES E FERRAMENTAS</span> QUE
              AUXILIAM O INVESTIDOR NA TOMADA DE DECISÃO
            </p>
            <a
              className="text text-white bg-orange font-medium py-6 px-16 rounded"
              href="https://app.hub.la/checkout/pCUsaXyrjBrAyRTLDN3W"
              target="_blank"
              rel="noreferrer"
            >
              ASSINAR
            </a>
            <Image
              src={"./img/monitor-logo.webp"}
              alt={"Monitor do Mercado Logo"}
              style={{ width: "auto", height: "auto" }}
              width={370}
              height={92}
              className={"object-contain w-80 lg:w-[370px]"}
              loader={imageLoader}
              unoptimized
            />
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-col gap-16 lg:gap-32">
          <div className="flex flex-col items-center gap-8">
            <p className="text-[1.75rem] sm:text-[2rem]  lg:text-[3rem] text-orange font-medium text-center">
              SEJA MEMBRO DO GRUPO MONITOR REAL TIME!
            </p>
            <a
              className="semi-title text-white text-center bg-orange font-medium py-6 px-16 rounded"
              href="https://app.hub.la/checkout/pCUsaXyrjBrAyRTLDN3W"
              target="_blank"
              rel="noreferrer"
            >
              O QUE VOCÊ GANHA COM ISSO?
            </a>
          </div>
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:items-start lg:justify-between">
            <Image
              src={"./img/tablet-with-photo.webp"}
              alt={"Tablet com a foto de homem segurando celular feliz"}
              width={349}
              height={482}
              className={"object-contain "}
              loader={imageLoader}
              unoptimized
            />
            <div className="flex flex-col gap-16 max-w-[39.6875rem]">
              <TopicText
                title={"Notícias Em Tempo Real"}
                description={
                  "Cobertura especializada do pulso do mercado financeiro, minuto a minuto, da abertura ao fechamento da Bolsa de Valores."
                }
              />
              <TopicText
                title={"Análises e Recomendações"}
                description={
                  "Análises de mercado e recomendações de investimento, com preço-alvo, de diferentes casas de análise e research de bancos."
                }
              />
              <TopicText
                title={"Giro setorial"}
                description={
                  "Entenda a movimentação diária de cada setor na Bolsa."
                }
              />
            </div>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          styles={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #353432 0%, #333331 100%)",
          }}
          className={"flex flex-col items-center gap-16"}
        >
          <div className="flex flex-wrap justify-center gap-16 lg:gap-0 lg:justify-between w-full max-w-[1012px]">
            <BottomCard className="gap-4">
              <p className="text-orange text-[2rem] sm:text-[3.25rem] font-medium text-center">
                INVISTA NO SEU CONHECIMENTO
              </p>
              <a
                className="text text-white bg-orange font-medium py-6 px-16 text-center rounded w-full"
                href="https://app.hub.la/checkout/pCUsaXyrjBrAyRTLDN3W"
                target="_blank"
                rel="noreferrer"
              >
                FAÇA AGORA SUA ASSINATURA
              </a>
            </BottomCard>
            <BottomCard className="gap-4">
              <div>
                <p className="semi-title text-white font-medium">POR APENAS</p>
                <p className="text-white font-medium text-[3.125rem] sm:text-[94px] leading-9 sm:leading-[0.75]">
                  R$ 29,90
                </p>
                <p className="text-[1.125rem] text-white font-medium text-right">
                  POR MÊS
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[16px] sm:text-[26px] text-orange font-medium leading-5">
                    GARANTIA DE 7 DIAS
                  </p>
                  <p className="text-[12px] sm:text-[1.125rem] text-orange font-medium">
                    100% SEU DINEHIRO DE VOLTA
                  </p>
                </div>
                <Image
                  src={"./img/medal.svg"}
                  alt={"Icone de medalha"}
                  width={39}
                  height={54}
                  className={"object-contain "}
                  loader={imageLoader}
                  unoptimized
                />
              </div>
            </BottomCard>
          </div>
          <h2 className="text-center title text-white font-medium">
            O QUE NOSSOS <span className="text-orange">ASSINANTES DIZEM</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SimpleCard
              description={
                "O Monitor Real Time é o melhor canal que encontrei para me informar sobre o mercado financeiro, as recomendações são sempre precisas e oportunas."
              }
            />
            <SimpleCard
              description={
                "Com o grupo, aprendi a identificar as melhores oportunidades de investimento. Estou muito satisfeito com os resultados que tenho alcançado."
              }
            />
            <SimpleCard
              description={
                "Estou muito satisfeito com o conteúdo do grupo, as informações compartilhadas são valiosas e ajudaram a me manter atualizado sobre o mercado financeiro."
              }
            />
            <SimpleCard
              description={
                "Desde que entrei no Monitor Real Time, minha compreensão do mercado financeiro melhorou significativamente."
              }
            />
          </div>
        </DefaultMarginSection>
      </main>
    </>
  );
}
