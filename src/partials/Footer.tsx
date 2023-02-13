import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import imageLoader from "../loader";

export default function Footer() {
  return (
    <footer className="px-8 py-32 sm:px-16 md:py-64 xl:px-0 xl:w-[1110px] xl:m-auto flex flex-wrap-reverse justify-center md:justify-between gap-16">
      <div className="flex flex-col gap-16">
        <p className="font-bold text-yellow">FALE CONOSCO</p>
        <div>
          <p>Instagram: @monitordomercado</p>
          <p>Site: www.monitordomercado.com.br</p>
        </div>
        <p className="font-bold text-yellow">NOSSO ENDEREÇO</p>
        <div>
          <p>
            Av. Dr. Cardoso de Melo, 1308 - Vila Olímpia
            <br /> São Paulo - SP, 04548-004
          </p>
        </div>
      </div>
      <Image
        src={"/img/monitor-do-mercado.webp"}
        alt={"Logo monitor do mercado"}
        style={{ width: "auto", height: "auto", objectFit: "contain" }}
        width={247}
        height={61}
        loader={imageLoader}
        unoptimized
      />
    </footer>
  );
}
