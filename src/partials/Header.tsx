import React, { useEffect, useState } from "react";
import Image from "next/image";

const imageLoader = require("./../loader.js");

export function Header() {
  return (
    <header className="flex items-center bg-orange fixed left-0 top-0 w-full z-[999]">
      <div className="w-full flex justify-between gap-8 px-16 xl:px-0  max-w-[1110px] m-auto py-8">
        <Image
          src={"./img/monitor-logo-white.webp"}
          alt={"Logo do monitor do mercado"}
          width={190}
          height={60}
          loader={imageLoader}
          className="object-contain w-55 sm:w-[190px]"
        />
        <a
          className=" text-orange bg-white font-medium py-4 px-8 rounded flex justify-center items-center"
          href="https://app.hub.la/checkout/pCUsaXyrjBrAyRTLDN3W"
          target="_blank"
          rel="noreferrer"
        >
          SAIBA MAIS
        </a>
      </div>
    </header>
  );
}
