import React from "react";
import Image from "next/image";
import imageLoader from "../loader";

type TopicTextProps = {
  title: string;
  description: string;
};

export function TopicText(props: TopicTextProps) {
  return (
    <div className="flex items-start">
      <Image
        src={"./img/check-icon.svg"}
        alt={"Icone de confere"}
        width={38}
        height={32}
        loader={imageLoader}
        className={"object-contain w-19 h-16"}
        unoptimized
      />
      <div>
        <p className="text-[1.625rem] text-gray font-medium underline">
          {props.title}
        </p>
        <p className="text-[1.125rem] text-gray">{props.description}</p>
      </div>
    </div>
  );
}
