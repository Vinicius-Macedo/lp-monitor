import React, { CSSProperties, ReactNode, useRef } from "react";
import { useIsElementInViewport } from "../hooks/useIsElementInViewport";

type DefaultMarginSectionProps = {
  children: ReactNode;
  className?: string;
  styles?: CSSProperties;
  containerClassName?: string;
  id?: string;
  hasNoMarginTop?: boolean;
  hasNoMarginBottom?: boolean;
};
export function DefaultMarginSection(props: DefaultMarginSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isElementInViewport = useIsElementInViewport(elementRef.current);

  return (
    <div
      ref={elementRef}
      id={props.id}
      className={props.containerClassName + (isElementInViewport ? "" : "")}
      style={props.styles}
    >
      <div
        className={
          "px-8 py-32 sm:px-16 md:py-64 xl:px-0 xl:w-[1110px] xl:m-auto" +
          (props.hasNoMarginTop ? " xl:pt-0" : "") +
          (props.hasNoMarginBottom ? " xl:pb-0" : "") +
          (props.className ? " " + props.className : "")
        }
      >
        {props.children}
      </div>
    </div>
  );
}
