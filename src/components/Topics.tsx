import React from "react";

type Props = {
  number: string;
  topic: string;
  text: string;
};

export default function Topics(props: Props) {
  return (
    <div className="flex gap-8">
      <p className="text-[64px] font-bold">{props.number}</p>
      <div className="flex flex-col gap-2 max-w-[310px] pt-10">
        <p className="text-yellow font-montserrat font-semibold">
          {props.topic}
        </p>
        <p className="font-montserrat">{props.text}</p>
      </div>
    </div>
  );
}
