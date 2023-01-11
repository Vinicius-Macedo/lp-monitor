import React from "react";
import Image, { StaticImageData } from "next/image";
import imageLoader from "../loader";

type CardWithImageProps = {
  imgAdress: any;
  imgAlt: string;
  title: string;
  text: string;
};

export function CardWithImage(props: CardWithImageProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-[350px] gap-4">
      <Image
        src={props.imgAdress}
        alt={props.imgAlt}
        height={144}
        width={157}
        style={{ objectFit: "contain", width: "157px", height: "144px" }}
        unoptimized
        loader={imageLoader}
      />
      <p className="text-white font-extrabold	text-center text-[24px] xl:w-100 xl:h-36">{props.title}</p>
      <p className="text-white font-extrabold	text-center">{props.text}</p>
    </div>
  );
}
