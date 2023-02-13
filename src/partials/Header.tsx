import React, { useEffect, useState } from "react";
import Image from "next/image";

const imageLoader = require("./../loader.js");

export function Header() {
  return (
    <header className="flex justify-between w-full max-w-[1110px] px-16 xl:px-0 pt-16 m-auto">
      <div>
        <p className="font-montserrat text-[18px] font-semibold leading-[20px]">
          Formação de
          <br />
          investidores
        </p>
        <p className="text-gray text-[12px]">SEJA UM MULTI-INVESTIDOR</p>
      </div>
      <div>
        <figure className="relative w-70 h-30">
          <Image
            src={"/img/monitor-do-mercado.webp"}
            alt={"Logo do monitor do mercado"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            fill
            loader={imageLoader}
            unoptimized
          />
        </figure>
      </div>
    </header>
  );
}
