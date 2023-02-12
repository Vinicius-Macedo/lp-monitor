import React from "react";
import Image from "next/image";
import imageLoader from "../loader";

type IconWithTextProps = {
  imgAdress: string;
  imgAlt: string;
  title: string;
  text: string;
};

export default function IconWithText(props: IconWithTextProps) {
  return (
    <div className="max-w-[350px] flex flex-col gap-8">
      <figure className="relative flex justify-center items-center h-[112px]">
        <Image
          src={props.imgAdress}
          alt={props.imgAlt}
          className="object-contain"
          fill
          loader={imageLoader}
          unoptimized
        />
      </figure>
      <div className="flex flex-col gap-4">
        <h3 className="text-yellow title text-center">{props.title}</h3>
        <p className="text-center text text-gray max-w-[320px]">{props.text}</p>
      </div>
    </div>
  );
}
