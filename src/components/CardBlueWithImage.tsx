import Image from "next/image";
import imageLoader from "../loader";

type CardBlueWithImageProps = {
  imgAdress: any;
  imgAlt: string;
  text: string;
};

export function CardBlueWithImage(props: CardBlueWithImageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[258px] h-[216px] bg-[#031F3D]">
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
