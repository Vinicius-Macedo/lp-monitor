import Image from "next/image";
import imageLoader from "../loader";

type CardDarkBlueProps = {
  imgAdress: any;
  imgAlt: string;
  text: string;
};

export function CardDarkBlue(props: CardDarkBlueProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[255px] h-[216px] bg-[#031F3D]">
      <Image
        src={props.imgAdress}
        alt={props.imgAlt}
        height={98}
        width={105}
        style={{ objectFit: "contain", width: "98px", height: "105px" }}
        unoptimized
        loader={imageLoader}
      />
      <p className="text-white font-bold max-w-[194px] text-center">
        {props.text}
      </p>
    </div>
  );
}
