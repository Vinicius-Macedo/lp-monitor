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
            <p className="text-white">
              Instagram:{" "}
              <a
                className="underline"
                href="https://www.instagram.com/monitordomercado/"
                target={"_blank"}
                rel="noreferrer"
              >
                @monitordomercado
              </a>
            </p>
            <p className="text-white">
              Site:{" "}
              <a
                className="underline"
                href="https://monitordomercado.com.br/"
                target={"_blank"}
                rel="noreferrer"
              >
                monitordomercado.com.br/
              </a>
            </p>
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
          src={"./img/monitor-logo.webp"}
          alt={"Logo monitor do mercado"}
          style={{ width: "auto", height: "auto", objectFit: "contain" }}
          className={"object-contain w-80 lg:w-[370px]"}
          width={370}
          height={92}
          loader={imageLoader}
          unoptimized
        />
      </div>
    </footer>
  );
}
