import Image from "next/image";
import imageLoader from "../loader";

type CardAuthorWithHoverEffectProps = {
  imgAdress: any;
  title: string;
  text: string;
};

export default function CardAuthorWithHoverEffect(
  props: CardAuthorWithHoverEffectProps
) {
  return (
    <div className="w-[280px] h-[368px] relative hover-card-effects">
      <p className="appear absolute left-0 top-16 z-[2] text-white font-bold text-[20px] w-[250px] px-8 py-4">
        {props.title}
      </p>
      <p className="appear absolute left-0 top-40 z-[2] text-white w-[250px] px-8 py-4">
        {props.text}
      </p>

      <p className="desappear absolute left-0 bottom-16 z-[1] text-white font-bold text-[20px] w-[250px] bg-[#002849] px-8 py-4">
        {props.title}
      </p>
      <div className="shadow"></div>
      <figure className="darken-when-hover">
        <Image
          className="dark-when-hover"
          src={props.imgAdress}
          alt={"foto de " + props.title}
          style={{
            objectFit: "cover",
            backgroundPosition: "top",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          fill
          unoptimized
          loader={imageLoader}
        />
      </figure>
    </div>
  );
}
