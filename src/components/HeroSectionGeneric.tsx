import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Image from "next/image";
import imageLoader from "../loader";

type HeroSectionGenericProps = {
  title: string;
  text?: string;
  imgAdress: any;
  imgAlt: string;
  titleIsBig?: boolean;
};

export function HeroSectionGeneric(props: HeroSectionGenericProps) {
  return (
    <section className="relative w-full h-[600px] px-8 xl:pt-40 overflow-x-hidden">
      <div className="w-full h-full max-w-[1110px] m-auto text-white flex flex-col justify-center xl:justify-between py-32 gap-16 ">
        <div className="flex flex-col xl:gap-16">
          <h1
            className={
              props.titleIsBig
                ? "text-center lg:text-left text-4xl lg:text-5xl xl:text-[96px] font-light xl:font-thin"
                : "text-center lg:text-left title-responsive font-light" +
                  (props.text ? "" : "lg:mb-64")
            }
          >
            {props.title}
          </h1>
          {props.text ? (
            <p className="text-center lg:text-left text-responsive max-w-[730px]">
              {props.text}
            </p>
          ) : (
            ""
          )}
        </div>
        <SocialMediaIcons className="w-full justify-center lg:justify-start xl:justify-end" />
      </div>

      <Image
        src={props.imgAdress}
        alt={props.imgAlt}
        loader={imageLoader}
        style={{ zIndex: -1, objectFit: "cover" }}
        fill
        unoptimized
        priority
      />
    </section>
  );
}
