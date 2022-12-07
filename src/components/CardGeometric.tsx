import React from "react";
import Image from "next/image";
import imageLoader from "../loader";

type CardGeometricProps = {
  text: string;
  imgAdress: string;
  imgAlt: string;
  poligonColor: string;
  customClass?: string;
};

export default function CardGeometric(props: CardGeometricProps) {
  return (
    <div
      className={
        "relative w-[308px] h-[382px]" +
        (props.customClass ? " " + props.customClass : "")
      }
    >
      <div className="z-[2] absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Image
          src={props.imgAdress}
          alt={props.imgAlt}
          width={105}
          height={116}
          loader={imageLoader}
          unoptimized
        />
        <p className="text-white font-bold text-[18px] text-center w-full max-w-[194px]">
          {props.text}
        </p>
      </div>
      <svg
        width="308"
        height="382"
        viewBox="0 0 308 382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        data-nimg="fill"
        // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:fill;color:transparent;fill:#000000">
      >
        <path
          d="M0 0H222.905L308 191L222.905 382H0L85.4719 191L0 0Z"
          fill={props.poligonColor}
        />
      </svg>

      {/* <Image
        src={"fidc/geometric-fidc.svg"}
        alt={"Polígno"}
        style={{ objectFit: "fill", fill: "#000000" }}
        fill
        unoptimized
        loader={imageLoader}
      /> */}
    </div>
  );
}
