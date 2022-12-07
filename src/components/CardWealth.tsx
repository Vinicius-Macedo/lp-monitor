import Image from "next/image";
import imageLoader from "../loader";

type CardWealthProps = {
  title: string;
  text: string;
  number: number;
  imgAdres: string;
  imgAlt: string;
};

export default function CardWealth(props: CardWealthProps) {
  return (
    <div className="text-white wealth-card">
      <Image
        src={props.imgAdres}
        alt={props.imgAlt}
        className="wealth-image"
        width={168}
        height={110}
        loader={imageLoader}
        unoptimized
      />
      <p className="text-blue wealth-number">{props.number}</p>
      <p className="wealth-title">{props.title}</p>
      <p className="wealth-text">{props.text}</p>
    </div>
  );
}
