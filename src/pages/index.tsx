const imageLoader = require("./../loader.js");
import Image from "next/image";
import CardNumber from "../components/CardNumber";
import CardWithImage from "../components/CardWithImage";

import { DefaultMarginSection } from "../components/DefaultMarginSection";
import IconWithText from "../components/IconWithText";
import ModuleTopic from "../components/ModuleTopic";
import Topics from "../components/Topics";

export default function Home() {
  return (
    <>
      <main className="bg-black overflow-hidden">
        <section>
          <div
            className={
              "px-8 py-32 sm:px-16 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto flex flex-col-reverse items-center md:grid grid-cols-2 xl:flex xl:flex-row overflow-hidden xl:overflow-visible xl:pt-32"
            }
          >
            <div className="max-w-[665px] xl:w-[665px] flex flex-col gap-12 items-center lg:items-start">
              <h1 className="text-center text-[1.4063rem] xl:text-[2.25rem] font-extrabold md:text-left lg:text-justify">
                Aprenda escolher os{" "}
                <span className="text-yellow">
                  melhores investimentos e acelerar seus resultados.
                </span>{" "}
                Conheça os conceitos e práticas de investimentos para tomar as
                melhores decisões e montar{" "}
                <span className="text-yellow">
                  uma carteira de investimentos lucrativa.
                </span>
              </h1>
              <div className="flex flex-col items-center gap-2 w-full lg:items-start">
                <p className="semititle text-center md:text-left">
                  Faça agora sua matrícula
                </p>
                <a
                  href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
                  target={"_blank"}
                  rel="noreferrer"
                  className="bg-yellow hover:bg-[#d6bc29]  text-black font-extrabold px-8 py-4 lg:px-16 lg:py-12 rounded max-w-[425px] text text-center"
                >
                  QUERO GARANTIR MINHA VAGA
                </a>
              </div>
            </div>
            <figure className="relative flex justify-center xl:-mr-30">
              <div className="circle-decoration-active absolute w-[400px] h-[400px] z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] xl:w-[600px] xl:h-[600px]"></div>
              <picture>
                <source
                  media="(max-width:500px)"
                  srcSet="/img/hero-photo-p.webp"
                />
                <img
                  alt="Douglas Soave"
                  src="/img/hero-photo.webp"
                  width="300"
                  height="405"
                  decoding="sync"
                  data-nimg="1"
                  className="object-contain z-[2] w-[300px] xl:w-[520px]"
                  loading="eager"
                  style={{ color: "transparent" }}
                />
              </picture>
            </figure>
          </div>
        </section>

        <DefaultMarginSection className="flex flex-col gap-32 relative">
          <div className="circle-decoration absolute w-[400px] h-[400px] z-[1] -left-[200px] md:-left-[150px] lg:-left-[300px] 3xl:-left-[450px] -top-[100px] lg:-top-[150px] xl:w-[600px] xl:h-[600px] 3xl:h-[650px] 3xl:w-[650px]"></div>

          <h2 className="title font-extrabold text-center">
            O QUE O{" "}
            <span className="text-yellow">FORMAÇÃO DE INVESTIDORES</span>
            <br /> IRÁ ENTREGAR:
          </h2>
          <div className="flex flex-wrap justify-center xl:justify-between gap-16 relative">
            <IconWithText
              imgAdress={"/img/icon-book.webp"}
              imgAlt={"icone de livro"}
              title={"Conteúdo"}
              text={"5 Módulos de conteúdo exclusivo"}
            />
            <IconWithText
              imgAdress={"/img/icon-clock.webp"}
              imgAlt={"icone de relógio"}
              title={"Inicio das aulas"}
              text={
                "Modelo flexível para adaptar a sua rotina com aulas gravadas."
              }
            />
            <IconWithText
              imgAdress={"/img/icon-screen.webp"}
              imgAlt={"icone de tela"}
              title={"Duração"}
              text={
                "Com método estruturado e pragmático, o curso conta com 5 horas de duração"
              }
            />
          </div>
        </DefaultMarginSection>

        <DefaultMarginSection className="flex flex-col items-center m-auto gap-32">
          <div className="max-w-[652px]">
            <p className="text text-gray font-normal text-center leading-8	">
              Com linguagem simples e objetiva, conheça os tipos de
              investimentos e faça o seu dinheiro render de verdade!
            </p>
            <h2 className="text-center text-yellow font-extrabold title max-w-[652px]">
              OS SEGREDOS REVELEADOS SOBRE
            </h2>
          </div>
          <div className="flex flex-wrap gap-15 justify-center items-center w-full m-auto">
            <CardWithImage
              imgAdress={"/img/card-image-3.webp"}
              imgAlt={"Segurando globo com olograma terrestre"}
              title={"PRINCÍPIOS FUNDAMENTAIS"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-2.webp"}
              imgAlt={"Olograma de gráficos subindo"}
              title={"MONTAGEM DE CARTEIRA"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-4.webp"}
              imgAlt={"Dólars com calculadora e gráficos"}
              title={"COMO INVESTIR"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-5.webp"}
              imgAlt={"Copo com uma planta e moedas no lugar da terra"}
              title={"FUNDOS DE INVESTIMENTOS"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-1.webp"}
              imgAlt={"Olograma de gráficos subindo"}
              title={"RENDA FIXA"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-6.webp"}
              imgAlt={"Gráficos subindo"}
              title={"AÇÕES"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-7.webp"}
              imgAlt={
                "Olagrama com opções e uma pessoa apertando o botão investment"
              }
              title={"OPÇÕES"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-8.webp"}
              imgAlt={"Globo terrestre olográfico com conexões"}
              title={"BDRs"}
            />
            <CardWithImage
              imgAdress={"/img/card-image-9.webp"}
              imgAlt={"celular com ilustração de casa em cima"}
              title={"FUNDOS IMOBILIÁRIOS"}
            />
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection className="relative flex justify-center flex-wrap gap-32 lg:gap-0 lg:justify-between">
          <div className="circle-decoration absolute w-[400px] h-[400px] z-[1] -right-[200px] md:-right-[150px] lg:-right-[300px] 3xl:-right-[450px] -top-[100px] lg:-top-[150px] xl:w-[600px] xl:h-[600px] 3xl:h-[650px] 3xl:w-[650px]"></div>
          <div>
            <h2 className="font-bold title leading-10 text-center lg:text-left lg:w-[268px]">
              Invista no seu conhecimento!
            </h2>
            <div>
              <Topics
                number={"01"}
                topic={"LIBERDADE"}
                text={"Aprenda de onde você estiver."}
              />
              <Topics
                number={"02"}
                topic={"AUTONOMIA"}
                text={
                  "Organize seus estudos de acordo com à sua disponibilidade"
                }
              />
              <Topics
                number={"03"}
                topic={"SUPER BONÛS"}
                text={
                  "Duas aulas AO VIVO com contéudos exclusivos + tira dúvidas"
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <div>
              <p className="font-bold title">Faça sua inscrição AGORA!</p>
              <p className="text-yellow text-[24px]">
                CONDIÇÃO EXCLUSIVA PRÉ-INSCRIÇÃO
                <br />
                <span className="text-white">
                  DE R$ <span className="line-through">997,00</span>
                </span>
              </p>
              <div className="flex items-center gap-8">
                <div className="text-yellow flex flex-col items-center">
                  <p className="text">POR</p>
                  <p className="text-[36px] font-bold leading-6">R$</p>
                </div>
                <p className="text-yellow text-[80px] sm:text-[120px] font-extrabold gap-4 leading-[1]">
                  397,00
                </p>
              </div>
            </div>
            <a
              href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
              target={"_blank"}
              rel="noreferrer"
              className="bg-yellow hover:bg-[#d6bc29]  text-black font-extrabold py-12 w-full max-w-[449px] text-[22px] sm:text-[32px] text-center rounded"
            >
              FAZER MINHA INSCRIÇÃO
            </a>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          containerClassName="background-image-default z-[3] relative"
          className={"flex flex-col gap-32 items-center"}
        >
          <h2 className="title font-extrabold text-center leading-10">
            O que vai aprender no
            <br />
            <span className="text-yellow">Formação de investidores:</span>
          </h2>
          <div className="grid sm:grid-cols-2 justify-center w-full gap-y-16 gap-x-48 max-w-[758px]">
            <ModuleTopic
              number={"1"}
              description={"Por dentro dos investimentos."}
            />
            <ModuleTopic
              number={"2"}
              description={"Atributos que fazem a diferença."}
            />
            <ModuleTopic
              number={"3"}
              description={"Por dentro da Renda Fixa."}
            />
            <ModuleTopic number={"4"} description={"O poder da Renda Fixa."} />
            <ModuleTopic
              number={"5"}
              description={"Por dentro dos investimentos."}
            />
          </div>
          <a
            href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
            target={"_blank"}
            rel="noreferrer"
            className="text text-black font-extrabold px-8 py-10 w-full max-w-[555px] bg-yellow hover:bg-[#d6bc29]  rounded text-center"
          >
            QUERO ACESSAR TODOS OS MÓDULOS
          </a>
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-col  gap-32 sm:gap-64 relative">
          <div className="circle-decoration absolute w-[400px] h-[400px] z-[1] -left-[200px] md:-left-[150px] lg:-left-[300px] 3xl:-left-[450px] -top-[100px] lg:-top-[150px] xl:w-[600px] xl:h-[600px] 3xl:h-[650px] 3xl:w-[650px]"></div>
          <div className="flex flex-col items-center">
            <h2 className="text-center title font-extrabold text-yellow">
              CONDIÇÃO EXCLUSIVA
              <br />
              PRÉ INSCRIÇÃO
            </h2>
            <p className="title text-center">
              DE R$ 997,00 <span className="text-yellow">POR R$ 397,00</span>
            </p>
            <a
              href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
              target={"_blank"}
              rel="noreferrer"
              className={
                "max-w-[415px] w-full text-center py-10 font-extrabold text text-black bg-yellow hover:bg-[#d6bc29]  mt-8 rounded"
              }
            >
              FAZER MINHA INSCRIÇÃO
            </a>
          </div>
          <div className="gap-15 flex flex-wrap lg:grid lg:grid-cols-2 lg:max-w-[540px] justify-center m-auto xl:flex xl:max-w-none">
            <CardNumber
              number={"01"}
              description={"Saida do zero e setorne um investidor completo"}
            />
            <CardNumber
              number={"02"}
              description={"Faça você mesmo seu dinheiro render mais"}
            />
            <CardNumber
              number={"03"}
              description={"Conheça os diferentes investimentos"}
            />
            <CardNumber
              number={"04"}
              description={
                "Segurança e confiança para você e para a sua família"
              }
            />
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-32 justify-between items-center">
          <div className="flex flex-col gap-16 w-full lg:max-w-[430px]">
            <h2 className="text-center lg:text-left text-[36px] lg:text-[54px] font-bold leading-[1]">
              Com quem você vai <span className="text-yellow">aprender?</span>
            </h2>
            <div>
              <p className="title font-extrabold text-yellow text-center lg:text-left">
                Douglas Soave
              </p>
              <p className="text font-semibold leading-10 text-center lg:text-left">
                Investidor profissional - ANCORD, Diretor & Partner no grupo
                Wise | BTG Pactual; MBA em Gestão Comercial e Negócios Sales
                Strategy - University of Michigan; Pós-graduado pela Fundação
                Getúlio Vargas (FGV); Engenheiro Mecânico - Escola de Engenharia
                de Piracicaba.
              </p>
            </div>
          </div>
          <figure className="relative flex md:max-w-[300px] lg:w-full lg:max-w-[577px] h-full max-h-[706px]">
            <div className="circle-decoration-active absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] z-[1] right-0 bottom-0 3xl:h-[650px] 3xl:w-[650px]"></div>
            <Image
              src={"/img/douglas-footer.webp"}
              alt={"Douglas Soave Foto"}
              className={"object-contain"}
              loader={imageLoader}
              width={577}
              height={706}
              unoptimized={true}
            />
          </figure>
        </DefaultMarginSection>
      </main>
    </>
  );
}
