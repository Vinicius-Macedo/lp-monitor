// export react component with two props: number and description

import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../hooks/UseIsVisible";

type GrowingNumberCardProps = {
  number: number;
  description: string;
  hasPlusIcon: boolean;
  hasMi: boolean;
};

export default function GrowingNumberCard(props: GrowingNumberCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(0);
  const currentNumberRef = useRef(0);
  const ref = useRef(null!);
  const growNumbersRef = useRef<any>();

  useEffect(() => {
    const oberver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    oberver.observe(ref.current);

    if (currentNumberRef.current <= props.number && isVisible) {
      console.log("passou no currentNumber <= props.number && isVisible");

      growNumbersRef.current = setInterval(() => {
        if (currentNumberRef.current == props.number) {
          clearInterval(growNumbersRef.current);
        } else {
          currentNumberRef.current++;
          setCurrentNumber(currentNumberRef.current);
        }
      }, 1000 / props.number);
    } else {
      console.log("primeiro else");
      clearInterval(growNumbersRef.current);
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="flex flex-col items-center w-full max-w-[350px]">
      <p className="text-blue text-[108px] font-bold">
        {props.hasPlusIcon ? "+" : ""}
        <span data-max={props.number}>{currentNumber}</span>

        {props.hasMi ? "mi" : ""}
      </p>
      <p className="text-white font-bold text-[24px]">{props.description}</p>
    </div>
  );
}
