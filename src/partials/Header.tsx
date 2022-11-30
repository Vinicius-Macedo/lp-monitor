import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const imageLoader = require("./../loader.js");

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className={"menu" + (isMenuOpen ? " open" : "")}>
        <Link href="/" className="xl:hidden">
          <figure className="relative w-[80px] h-[40px]">
            <Image
              src="logo-titan.png"
              alt="Logo da Wise"
              fill
              style={{ objectFit: "contain" }}
              loader={imageLoader}
              unoptimized={true}
              priority
            />
          </figure>
        </Link>
        <ul className="lista">
          <li className="item">
            <Link href="/" className="link">
              A TITAN
            </Link>
          </li>
          <li className="item">
            <Link href="/fundos-de-investimento" className="link">
              FUNDOS DE INVESTIMENTO
            </Link>
          </li>
          <li className="item">
            <Link href="/wealth-management" className="link">
              WEALTH MANAGEMENT
            </Link>
          </li>
          <Link href="/" className="hidden xl:block">
            <figure className="relative w-[80px] h-[40px]">
              <Image
                src="logo-titan.png"
                alt="Logo da Wise"
                fill
                style={{ objectFit: "contain" }}
                loader={imageLoader}
                priority
                unoptimized={true}
              />
            </figure>
          </Link>
          <li className="item">
            <Link href="/organizacao-financeira" className="link">
              ORGANIZAÇÃO FINANCEIRA
            </Link>
          </li>
          <li className="item">
            <Link href="/documentos" className="link">
              DOCUMENTOS
            </Link>
          </li>
          <li className="item">
            <Link href="/trabalhe-conosco" className="link">
              TRABALHE CONOSCO
            </Link>
          </li>
        </ul>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="toggle-btn">
          <div className="bars"></div>
        </div>
      </nav>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={"overflow" + (isMenuOpen ? " active" : "")}
      ></div>
    </header>
  );
}
