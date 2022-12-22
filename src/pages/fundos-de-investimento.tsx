import React from "react";
import imageLoader from "../loader";
import Image from "next/image";
import { HeroSectionGeneric } from "../components/HeroSectionGeneric";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import CardInvestmentFunds from "../components/CardInvestmentFunds";

export default function FundosDeInvestimento() {
  return (
    <main className="">
      <HeroSectionGeneric
        title={"FUNDOS"}
        imgAdress={"fundos/fundos-hero.png"}
        imgAlt={"Imagem abstrata de gráficos misturado com moedas físicas"}
      />
      <section className="px-8 py-32 sm:px-16 md:py-64 xl:px-0 xl:w-[1200px] xl:m-auto flex flex-col gap-32">
        <h2 className="title-responsive text-blue text-center font-bold">
          FUNDOS DE INVESTIMENTO
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:w-[800px] xl:w-full lg:m-auto">
          <CardInvestmentFunds
            title={"FIC FIM WISE SELECTION"}
            objetivo={"Superar o CDI"}
            prazoDeAplicao={"D+1"}
            prazoDeResgate={"D+6"}
            aplicaoInicial={"R$ 1.000,00"}
            movimentacaoMinima={"R$ 0,00"}
            saldoMinimo={"R$ 0,00"}
            taxaDeAdministracao={"1,25%"}
            taxaDePerformance={"0,00%"}
            certificaoAnbima={"Multimercado livre"}
            resgate={"D+6"}
            rentabilidadeDeDozeMeses={"6,02%"}
            risco={"Sofisticado"}
            documentosArray={[]}
            objetivoDescricao={
              "Obter ganhos de capital mediante operações nos mercados de juros, câmbio, ações, commodities e dívida, utilizando-se de instrumentos disponíveis tanto nos mercados à vista quanto nos mercados de derivativos."
            }
            rating={""}
          />
          <CardInvestmentFunds
            title={"FIM DEEP BLUE"}
            objetivo={"Superar o CDI"}
            prazoDeAplicao={"D+0"}
            prazoDeResgate={"D+3"}
            aplicaoInicial={"R$ 0,00"}
            movimentacaoMinima={"R$ 0,00"}
            saldoMinimo={"R$ 0,00"}
            taxaDeAdministracao={"0,8%"}
            taxaDePerformance={"0,00%"}
            certificaoAnbima={"Multimercado livre"}
            resgate={"D+3"}
            rentabilidadeDeDozeMeses={"7,87%"}
            risco={"Sofisticado"}
            documentosArray={[]}
            objetivoDescricao={
              "O Smart Fund Deep Blue FIM é composto exclusivamente por títulos públicos e utiliza como parâmetro o índice IMA-B. Com suave alavancagem, a alocação e balanceamento da carteira visam como objetivo, a ampliação de retorno com volatilidade palatável ao cliente de renda fixa."
            }
            rating={""}
          />
          <CardInvestmentFunds
            title={"FIA ADVANCED"}
            objetivo={"Superar o BDRX"}
            prazoDeAplicao={"D+0"}
            prazoDeResgate={"D+5"}
            aplicaoInicial={"R$ 1.000,00"}
            movimentacaoMinima={"R$ 1.000,00"}
            saldoMinimo={"R$ 0,00"}
            taxaDeAdministracao={"2,50%"}
            taxaDePerformance={"25% do que exceder o IBOVESPA"}
            certificaoAnbima={"Ações livre"}
            resgate={"D+5"}
            rentabilidadeDeDozeMeses={"9,71%"}
            risco={"Sofisticado"}
            documentosArray={[]}
            objetivoDescricao={
              "O fundo tem por objetivo proporcionar aos seus cotistas, a médio e longo prazo, ganhos de capital por meio do investimento de seus recursos primordialmente no mercado acionário, sem perseguir uma alta correlação com qualquer índice de ações específico disponível."
            }
            rating={""}
          />
          <CardInvestmentFunds
            title={"FIA CHRONOS"}
            objetivo={"Superar o IBOVESPA"}
            prazoDeAplicao={"D+1"}
            prazoDeResgate={"D+6"}
            aplicaoInicial={"R$ 1.000,00"}
            movimentacaoMinima={"R$ 0,00"}
            saldoMinimo={"R$ 0,00"}
            taxaDeAdministracao={"1,50%"}
            taxaDePerformance={"20% do que exceder o IBOVESPA"}
            certificaoAnbima={"Ações livre"}
            resgate={"D+6"}
            rentabilidadeDeDozeMeses={"5,50% (10 meses de existência)"}
            risco={"Sofisticado"}
            documentosArray={[]}
            objetivoDescricao={
              "O fundo tem por objetivo proporcionar aos seus cotistas, a médio e longo prazo, ganhos de capital por meio do investimento de seus recursos primordialmente no mercado acionário, sem perseguir uma alta correlação com qualquer índice de ações específico disponível."
            }
            rating={""}
          />
          <CardInvestmentFunds
            title={"FIRF CP WISE CASH "}
            objetivo={"Superar o CDI"}
            prazoDeAplicao={"D+0"}
            prazoDeResgate={"D+1"}
            aplicaoInicial={"R$ 0,00"}
            movimentacaoMinima={"R$ 100,00"}
            saldoMinimo={"R$ 100,00"}
            taxaDeAdministracao={"0,60%"}
            taxaDePerformance={"0,00%"}
            certificaoAnbima={"RF duração livre grau de investimento"}
            resgate={"D+1"}
            rentabilidadeDeDozeMeses={"Divulgação ainda não permitida"}
            risco={"Conservador"}
            documentosArray={[]}
            objetivoDescricao={
              "O objetivo do fundo é obter retornos atrelados ao CDI através de operações de títulos públicos e crédito privado com crédito de alta qualidade. Exposição em debentures com alta liquidez no mercado secundário e baixo risco de crédito. Portifólio diversificado e defensivo. O fundo mantém uma carteira diversificada de ativos financeiros, sem concentração por ativo ou setor."
            }
            rating={""}
          />
          <CardInvestmentFunds
            title={"FIM WISE PREV"}
            objetivo={"Superar o CDI"}
            prazoDeAplicao={"D+0"}
            prazoDeResgate={"D+9"}
            aplicaoInicial={"R$ 500,00"}
            movimentacaoMinima={"R$ 500,00"}
            saldoMinimo={"R$ 0,00"}
            taxaDeAdministracao={"1,25%"}
            taxaDePerformance={"0,00%"}
            certificaoAnbima={"Previdência – multimercado livre"}
            resgate={"D+9"}
            rentabilidadeDeDozeMeses={"Divulgação ainda não permitida"}
            risco={"Sofisticado"}
            documentosArray={[]}
            objetivoDescricao={
              "Superar o CDI a longo prazo, por meio de uma estratégia de retorno absoluto."
            }
            rating={""}
          />
          <CardInvestmentFunds
            title={"FIQ FIDC VIA"}
            objetivo={"N/A"}
            prazoDeAplicao={"D+0"}
            prazoDeResgate={"D+91"}
            aplicaoInicial={"R$ 1.000,00"}
            movimentacaoMinima={"R$ 1.000,00"}
            saldoMinimo={"R$ 1.000,00"}
            taxaDeAdministracao={"1,25% a.a"}
            taxaDePerformance={"Não há"}
            certificaoAnbima={"FIQ FIDC"}
            resgate={"D+91"}
            rentabilidadeDeDozeMeses={
              "Sênior: 14,24% - Mezanino: 15,28% - Subordinada: 16,45%"
            }
            risco={""}
            documentosArray={[]}
            objetivoDescricao={
              "O objetivo do Fundo é proporcionar aos seus quotistas (“Quotistas”), observada a política de investimento e composição de carteira definida neste Regulamento, valorização de suas quotas (“Quotas”), por meio da aquisição pelo Fundo de quotas de emissão de Fundos de Investimento em Direitos Creditórios."
            }
            rating={"Sênior: BBB+ - Mezanino: B+"}
            isTextSmall={true}
          />
          <CardInvestmentFunds
            title={"FIC FIM TITAN CP (TITAN FINTECH)"}
            objetivo={"N/A"}
            prazoDeAplicao={"D+0"}
            prazoDeResgate={"D+181"}
            aplicaoInicial={"R$ 25.000,00"}
            movimentacaoMinima={"R$ 0,00"}
            saldoMinimo={"R$ 25.000,00"}
            taxaDeAdministracao={"1,25% a.a"}
            taxaDePerformance={"20% (Vinte por cento) do exceder 100% do CDI"}
            certificaoAnbima={"Multimercado Livre"}
            resgate={"D+181"}
            rentabilidadeDeDozeMeses={"9,94%"}
            risco={"Alto"}
            rating={""}
            documentosArray={[]}
            objetivoDescricao={
              "Objetivo é investir em Fundos de Investimentos em Direitos Creditórios (FIDCs) ou outros fundos que invistam em FIDCs."
            }
          />
        </div>
      </section>
    </main>
  );
}
