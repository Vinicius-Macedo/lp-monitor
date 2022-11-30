import Link from "next/link";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

type SocialMediaIconsProps = {
  className?: string;
};

export default function SocialMediaIcons(props: SocialMediaIconsProps) {
  let iconSizes = 40;
  let iconsLgSizes = "lg:h-[45px] lg:w-[45px]";

  return (
    <div
      className={
        "flex flex-wrap gap-8" + (props.className ? " " + props.className : "")
      }
    >
      <Link href={""}>
        <BsInstagram
          className={iconsLgSizes}
          size={iconSizes}
          color="#ffffff"
        />
      </Link>
      <Link href={""}>
        <FaLinkedinIn
          className={iconsLgSizes}
          size={iconSizes}
          color="#ffffff"
        />
      </Link>
      <Link href={""}>
        <AiFillYoutube
          className={iconsLgSizes}
          size={iconSizes}
          color="#ffffff"
        />
      </Link>
      <Link href={""}>
        <FaFacebookF
          className={iconsLgSizes}
          size={iconSizes}
          color="#ffffff"
        />
      </Link>
    </div>
  );
}
