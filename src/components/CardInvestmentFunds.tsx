import React from "react";
import Image from "next/image";
import imageLoader from "../loader";

type CardInvestmentFundsProps = {
  title: string;
};

export default function CardInvestmentFunds(props: CardInvestmentFundsProps) {
  return (
    <div className="w-[300px] lg:w-[350px] bg-darkblue flex flex-col lg:flex lg:flex-row-reverse">
      <div className="relative">
        <Image
          className="hidden lg:block"
          src={"fundos/triangle.svg"}
          alt={"Vetor de triângulo"}
          loader={imageLoader}
          width={82}
          height={199}
          style={{ width: "82px", height: "auto", objectFit: "contain" }}
          unoptimized
        />
        <Image
          className="lg:hidden -mt-[1px]"
          src={"fundos/triangle-horizontal.svg"}
          alt={"Vetor de triângulo"}
          loader={imageLoader}
          width={82}
          height={199}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          unoptimized
        />
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={"fundos/plus.svg"}
          alt={"Vetor de mais"}
          width={43}
          height={43}
          loader={imageLoader}
          unoptimized
        />
      </div>
      <div>
        <h1 className="text-white font-bold text-center text-[24px] px-8 py-8 lg:text-left lg:w-[282px] lg:h-[104px]">
          {props.title}
        </h1>
        <p className="text-white p-8 text-center lg:text-left font-semibold text-[20px]">
          RISCO
        </p>
      </div>
    </div>
  );
}
