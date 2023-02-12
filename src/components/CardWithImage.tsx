import React from "react";
import Image from "next/image";
import imageLoader from "../loader";

type CardWithImageProps = {
  imgAdress: string;
  imgAlt: string;
  title: string;
};

export default function CardWithImage(props: CardWithImageProps) {
  return (
    <div>
      <Image
        src={props.imgAdress}
        alt={props.imgAlt}
        width={345}
        height={228}
        loader={imageLoader}
        unoptimized
      />
      <h3 className="bg-yellow text-black text-center py-5 font-extrabold">{props.title}</h3>
    </div>
  );
}
