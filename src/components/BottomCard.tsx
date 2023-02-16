import React from "react";

type BottomCardProps = {
  className?: string;
  children: React.ReactNode;
};
export default function BottomCard(props: BottomCardProps) {
  return (
    <div
      className={
        "flex flex-col w-full justify-between p-8 xl:p-16 border-[3px] border-solid border-orange max-w-[474px]" +
        (props.className ? " " + props.className : "")
      }
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #5C5B5A 0%, #666666 100%)",
      }}
    >
      {props.children}
    </div>
  );
}
