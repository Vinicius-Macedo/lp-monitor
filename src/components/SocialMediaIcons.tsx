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
  let iconsLgSizes = "lg:h-[30px] lg:w-[30px]";

  return (
    <div
      className={
        "flex flex-wrap gap-12" + (props.className ? " " + props.className : "")
      }
    >
      <Link
        target={"_blank"}
        href={"https://www.instagram.com/titaninvestimentos/"}
      >
        <BsInstagram
          className={iconsLgSizes}
          size={iconSizes}
          color="#ffffff"
        />
      </Link>
      <Link
        target={"_blank"}
        href={
          "https://www.linkedin.com/company/titan-asset/?originalSubdomain=br"
        }
      >
        <FaLinkedinIn
          className={iconsLgSizes}
          size={iconSizes}
          color="#ffffff"
        />
      </Link>
      {/* <Link href={""}>
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
      </Link> */}
    </div>
  );
}
