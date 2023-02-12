import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import imageLoader from "../loader";

type Props = {
  number: string;
  description: string;
};

export default function ModuleTopic(props: Props) {
  return (
    <div className="flex gap-4">
      <Image
        src={"/img/check-icon.svg"}
        alt={"icone de conferido"}
        width={38.2}
        height={39}
        unoptimized={true}
        loader={imageLoader}
      />
      <div>
        <p className="font-semibold font-montserrat text-[32px] text-yellow">Módulo {props.number}</p>
        <p className="font-montserrat text-gray font-semibold">{props.description}</p>
      </div>
    </div>
  );
}
