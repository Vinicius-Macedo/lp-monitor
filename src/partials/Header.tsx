import React, { useEffect, useState } from "react";
import Image from "next/image";

const imageLoader = require("./../loader.js");

export function Header() {
  return (
    <header className="flex justify-between w-full max-w-[1110px] px-16 xl:px-0 pt-16 m-auto">
      <div>
        <p className="font-montserrat text-[1.125rem] sm:text-[1.625rem] font-semibold leading-[1.25rem] sm:leading-6">
          Formação de
          <br />
          investidores
        </p>
        <p className="text-gray text-[.75rem] sm:text-[1rem]">SEJA UM MULTI-INVESTIDOR</p>
      </div>
      <div>
        <figure className="relative w-70 h-30 sm:w-100">
          <Image
            src={"/img/monitor-do-mercado.webp"}
            alt={"Logo do monitor do mercado"}
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
            width={247}
            height={61}
            loader={imageLoader}
            priority
            unoptimized
          />
        </figure>
      </div>
    </header>
  );
}
