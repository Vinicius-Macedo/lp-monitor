import Link from "next/link";
import Image from "next/image";
import React from "react";
import imageLoader from "../loader";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#000000]">
        <div
          className={
            "px-8 py-32 sm:px-16 xl:px-0 xl:w-[1110px] xl:m-auto text-white flex flex-col flex-gap gap-16"
          }
        >
          <div className="flex flex-col gap-16">
            <h2 className="text-white font-bold text-[24px]">DISCLAIMER</h2>
            <p className="font-semibold">
              ANBIMA - ASSOCIAÇÃO BRASILEIRA DAS ENTIDADES DOS MERCADOS
              FINANCEIRO E DE CAPITAIS
            </p>
            <p className="font-semibold">
              A Titan Capital Gestão de Recursos não comercializa nem distribui
              cotas de fundos de investimentos ou qualquer outro ativo
              financeiro. As informações contidas nesse website são de caráter
              exclusivamente informativo. Fundos de investimento não contam com
              a garantia do administrador, do gestor de carteira, de qualquer
              mecanismo de seguro ou, ainda, do Fundo Garantidor de Créditos -
              FGC. A rentabilidade passada não representa garantia de
              rentabilidade futura.
            </p>
            <p className="text-[22px]">contato@titancapital.com.br</p>
          </div>
          <div className="flex flex-wrap gap-16 xl:gap-32 items-center lg:items-start justify-center lg:justify-between">
            <div className="w-full lg:max-w-[445px] flex flex-col gap-16">
              <p className="font-bold">ENDEREÇOS</p>
              <p>
                MINAS GERAIS - Av. Raja Gabáglia, 4000, 4º andar, sala nº 425
                Cidade Jardim – CEP 30494-310 Tel.: (31) 3656-4979
              </p>
              <p>
                SÃO PAULO - The First Offices - R. Paulo César Fidélis, 39 -
                Lot. Res. Vila Bella, Campinas - SP, 13087-727
              </p>
            </div>
            <Link href={"/"}>
              <Image
                src={"titan-logo-footer.png"}
                alt={"Logo da Titan Capital"}
                width={201}
                height={139}
                unoptimized
                loader={imageLoader}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"anbima-footer.png"}
                alt={"Logo da Titan Capital"}
                width={200}
                height={111}
                unoptimized
                loader={imageLoader}
              />
            </Link>
          </div>
          <SocialMediaIcons className="w-full justify-center lg:justify-end" />
        </div>
      </div>
      <div className="bg-[#202227]">
        <div
          className={
            "px-8 py-8 sm:px-16 xl:px-0 xl:w-[1110px] xl:m-auto text-white flex flex-col sm:flex-row sm:flex-wrap gap-16"
          }
        >
          <Link href={"/termos-de-uso"} className="hover:underline" >Termos e Condições</Link>
          <Link href={"/politica-de-privacidade"} className="hover:underline">Política de Privacidade</Link>
          <Link href={"/"} className="hover:underline">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
