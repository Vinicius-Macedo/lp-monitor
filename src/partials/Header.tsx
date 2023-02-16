import React, { useEffect, useState } from "react";
import Image from "next/image";

const imageLoader = require("./../loader.js");

export function Header() {
  return (
    <div></div>
    // <header className="flex justify-between w-full max-w-[1110px] px-16 xl:px-0 pt-16 m-auto">
    //   <Image
    //     src={"/img/monitor-logo-white.webp"}
    //     alt={"Logo do monitor do mercado"}
    //     width={190}
    //     height={60}
    //     loader={imageLoader}
    //     className="object-contain"
    //   />
    // </header>
  );
}
