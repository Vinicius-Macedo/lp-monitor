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
        className="object-cover h-70"
        loader={imageLoader}
        unoptimized
      />
      <h3 className="bg-yellow text-black text text-center py-2 font-bold capitalize">
        {props.title}
      </h3>
    </div>
  );
}
