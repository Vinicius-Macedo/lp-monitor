import React from "react";

type Props = {
  number: string;
  description: string;
};

export default function CardNumber(props: Props) {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-[255px]">
      <p className="w-60 h-60 flex justify-center items-center border-yellow border-[3px] border-solid text-[64px] font-semibold text-yellow">
        {props.number}
      </p>
      <p className="text text-center font-montserrat">{props.description}</p>
    </div>
  );
}
