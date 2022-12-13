import { ReactNode } from "react";

type CardSolucoesProps = {
  title: string;
  subTopics: subTopics[];
};

type subTopics = {
  text: any;
};

export default function CardSolucoes(props: CardSolucoesProps) {
  return (
    <div className="bg-[#F8FAFC] border border-solid border-[#4F9DE1] w-full max-w-[500px] h-full">
      <h2 className="text-center font-extralight text-[26px] p-8 border-b border-b-solid border-b-[#4F9DE1]">
        {props.title}
      </h2>
      <div className="p-8 flex flex-col gap-6">
        {props.subTopics.map((subTopic) => (
          <p key={subTopic.text}>{subTopic.text}</p>
        ))}
      </div>
    </div>
  );
}
