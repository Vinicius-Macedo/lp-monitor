import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import imageLoader from "../loader";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1C]">
      <div className="px-8 py-32 sm:px-16 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto flex flex-wrap-reverse justify-center md:justify-between gap-16 ">
        <div className="flex flex-col gap-16">
          <p className="font-bold text-orange">FALE CONOSCO</p>
          <div>
            <p className="text-white">Instagram: @monitordomercado</p>
            <p className="text-white">Site: www.monitordomercado.com.br</p>
          </div>
          <p className="font-bold text-orange">NOSSO ENDEREÇO</p>
          <div>
            <p className="text-white">
              Av. Dr. Cardoso de Melo, 1308 - Vila Olímpia
              <br /> São Paulo - SP, 04548-004
            </p>
          </div>
        </div>
        <Image
          src={"/img/monitor-logo.webp"}
          alt={"Logo monitor do mercado"}
          className={"object-contain w-80 lg:w-[370px]"}
          style={{ width: "auto", height: "auto", objectFit: "contain" }}
          width={370}
          height={92}
          loader={imageLoader}
          unoptimized
        />
      </div>
    </footer>
  );
}
