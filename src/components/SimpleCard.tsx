import React from "react";

type SimpleCardProps = {
  description: string;
};

export function SimpleCard(props: SimpleCardProps) {
  return (
    <div className="bg-[#525252] text-white p-8 text-[.875rem] italic">{`"${props.description}"`}</div>
  );
}
