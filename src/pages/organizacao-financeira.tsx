import React from "react";
import Image from "next/image";
import imageLoader from "../loader";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import FaleComAGenteSection from "../components/FaleComAGenteSection";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";

export default function OrganizacaoFinanceira() {
  return (
    <main>
      <HeroSectionGeneric
        title={"ORGANIZE SUAS FINANÇAS"}
        text={"O planejamento financeiro é fundamental para o SEU FUTURO!"}
        imgAdress={"organizacao-financeira/hero-financas.png"}
        imgAlt={"Fundo de calculadora e papéis de escritório"}
      />
      <DefaultMarginSection
        className="flex flex-wrap justify-center items-start gap-16 lg:gap-18"
        hasNoMarginBottom={true}
      >
        <article className="etapa-item">
          <Image
            className="etapa-img"
            alt="Icone de nuvem representando sonho"
            src={"organizacao-financeira/icone-1.png"}
            width={103}
            height={73}
            loader={imageLoader}
            unoptimized
          />
          <p className="etapa-numero">1</p>
          <h3 className="etapa-texto">Sonhar</h3>
          <p className="etapa-desc">
            Mapeamento dos sonhos do cliente e transformação em objetivos
            específicos, mensuráveis e com prazo definido, a fim de trazer
            clareza acerca das prioridades para planejamento.
          </p>
        </article>
        <article className="etapa-item">
          <Image
            className="etapa-img"
            alt="Icone de nuvem representando sonho"
            src={"organizacao-financeira/icone-2.png"}
            width={103}
            height={73}
            loader={imageLoader}
            unoptimized
          />
          <p className="etapa-numero">2</p>
          <h3 className="etapa-texto">Diagnosticar</h3>
          <p className="etapa-desc">
            Em conversa inicial, o planejador faz o diagnóstico do contexto
            atual do cliente, identificando os principais desafios e objetivos
            para o desenvolvimento do trabalho.
          </p>
        </article>
        <article className="etapa-item">
          <Image
            className="etapa-img"
            alt="Icone de nuvem representando sonho"
            src={"organizacao-financeira/icone-3.png"}
            width={103}
            height={73}
            loader={imageLoader}
            unoptimized
          />
          <p className="etapa-numero">3</p>
          <h3 className="etapa-texto">Orçamento</h3>
          <p className="etapa-desc">
            O planejador estrutura o orçamento personalizado do cliente com a
            definição de metas e a coleta de informação de dívidas, gastos,
            patrimônio e investimentos.
          </p>
        </article>
        <article className="etapa-item">
          <Image
            className="etapa-img"
            alt="Icone de nuvem representando sonho"
            src={"organizacao-financeira/icone-4.png"}
            width={103}
            height={73}
            loader={imageLoader}
            unoptimized
          />
          <p className="etapa-numero">4</p>
          <h3 className="etapa-texto">Analisar</h3>
          <p className="etapa-desc">
            Nessa etapa, o planejador analisa em detalhes a situação financeira
            do cliente, identificando os principais pontos de alerta e ações a
            serem implementadas.
          </p>
        </article>
        <article className="etapa-item">
          <Image
            className="etapa-img"
            alt="Icone de nuvem representando sonho"
            src={"organizacao-financeira/icone-5.png"}
            width={103}
            height={73}
            loader={imageLoader}
            unoptimized
          />
          <p className="etapa-numero">5</p>
          <h3 className="etapa-texto">Planejar</h3>
          <p className="etapa-desc">
            O planejador apresenta estratégias de investimento alinhadas ao
            contexto do cliente com foco em três pilares: segurança financeira,
            liberdade financeira e realização de objetivos.
          </p>
        </article>
        <article className="etapa-item">
          <Image
            className="etapa-img"
            alt="Icone de nuvem representando sonho"
            src={"organizacao-financeira/icone-6.png"}
            width={103}
            height={73}
            loader={imageLoader}
            unoptimized
          />
          <p className="etapa-numero">6</p>
          <h3 className="etapa-texto">Executar</h3>
          <p className="etapa-desc">
            Após a apresentação do planejamento de investimentos, define-se o
            plano de ação e o cliente passa a ter o compromisso de criar o
            hábito de investir para cada objetivo.
          </p>
        </article>
        <article className="etapa-item">
          <Image
            className="etapa-img"
            alt="Icone de nuvem representando sonho"
            src={"organizacao-financeira/icone-7.png"}
            width={103}
            height={73}
            loader={imageLoader}
            unoptimized
          />
          <p className="etapa-numero">7</p>
          <h3 className="etapa-texto">Monitorar</h3>
          <p className="etapa-desc">
            O planejador monitora periodicamente a situação e evolução do
            planejamento financeiro, a fim de promover os ajustes necessários
            para o sucesso do trabalho.
          </p>
        </article>
      </DefaultMarginSection>
      <DefaultMarginSection
        hasNoMarginTop={true}
        className="flex flex-wrap justify-center items-center gap-16 xl:gap-0"
      >
        <div className="foto-container padding-top-secao">
          <Image
            className="casal-foto"
            alt="Casal de idosos aproveitando a práia sentados em uma cadeira branca"
            src={"organizacao-financeira/foto-financas.png"}
            width={538}
            height={719}
            loader={imageLoader}
            unoptimized
          />
          <article className="texto-container">
            <p className="texto-responsivo-big text-center">
              Hoje,{" "}
              <span className="text-blue font-black">
                aproximadamente 1% dos aposentados
              </span>{" "}
              conseguem manter o padrão de vida que tinham antes de se
              aposentar!
            </p>
            <p className="texto-responsivo-big text-center">
              Além disso, o planejamento financeiro e de investimentos, traz muitos benefícios, como:

            </p>
            <div className="flex justify-center items-start gap-8 sm:gap-16">
              <ul className="lista-caracteristicas">
                <li className="lista-item">
                  <p className="circulo">-</p>
                  <p className="lista-topico">Dívidas</p>
                </li>
                <li className="lista-item">
                  <p className="circulo">-</p>
                  <p className="lista-topico">Estresse</p>
                </li>
                <li className="lista-item">
                  <p className="circulo">-</p>
                  <p className="lista-topico">Ansiedade</p>
                </li>
                <li className="lista-item">
                  <p className="circulo">-</p>
                  <p className="lista-topico">Riscos</p>
                </li>
              </ul>
              <ul className="lista-caracteristicas">
                <li className="lista-item">
                  <p className="circulo">+</p>
                  <p className="lista-topico">Qualidade de vida</p>
                </li>
                <li className="lista-item">
                  <p className="circulo">+</p>
                  <p className="lista-topico">Tranquilidade</p>
                </li>
                <li className="lista-item">
                  <p className="circulo">+</p>
                  <p className="lista-topico">Objetivos realizados</p>
                </li>
                <li className="lista-item">
                  <p className="circulo">+</p>
                  <p className="lista-topico">Liberdade financeira</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </DefaultMarginSection>
      <FaleComAGenteSection />
    </main>
  );
}
