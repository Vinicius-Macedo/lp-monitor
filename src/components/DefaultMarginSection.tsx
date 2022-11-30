import { ReactNode } from "react";

type DefaultMarginSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  hasNoMarginTop?: boolean;
};

export function DefaultMarginSection(props: DefaultMarginSectionProps) {
  var classWithoutSpace;

  if (props.className) {
    classWithoutSpace = " " + props.className;
  } else {
    classWithoutSpace = "";
  }

  return (
    <section
      id={props.id}
      className={`px-8 py-32 sm:px-16 md:py-64 xl:px-0 ${
        props.hasNoMarginTop ? "xl:pt-0" : ""
      } xl:w-[1110px] xl:m-auto${classWithoutSpace}`}
    >
      {props.children}
    </section>
  );
}
