import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIsVisible } from "../hooks/useIsVisible";

type DefaultMarginSectionProps = {
  children: ReactNode;
  className?: string;
  styles?: CSSProperties;
  containerClassName?: string;
  id?: string;
  hasNoMarginTop?: boolean;
  hasNoMarginBottom?: boolean;
  hasNoEffect?: boolean;
};
export function DefaultMarginSection(props: DefaultMarginSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const [alreadyVisible, setAlreadyVisible] = useState(false);

  return (
    <>
      {!props.hasNoEffect ? (
        <section
          ref={ref}
          id={props.id}
          className={
            (isVisible && !alreadyVisible
              ? [setAlreadyVisible(true), "element is-visible"]
              : alreadyVisible
              ? "element is-visible"
              : "element") +
            " " +
            (props.containerClassName ? props.containerClassName : "")
          }
          style={props.styles}
        >
          <div
            className={
              "px-8 py-32 sm:px-16 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto" +
              (props.hasNoMarginTop ? " pt-0 md:pt-0 xl:pt-0" : "") +
              (props.hasNoMarginBottom ? " xl:pb-0" : "") +
              (props.className ? " " + props.className : "")
            }
          >
            {props.children}
          </div>
        </section>
      ) : (
        <section
          ref={ref}
          id={props.id}
          className={props.containerClassName + " relative"}
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
        </section>
      )}
    </>
  );
}
