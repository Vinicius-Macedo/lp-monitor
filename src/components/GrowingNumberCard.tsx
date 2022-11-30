// export react component with two props: number and description

type GrowingNumberCardProps = {
  number: number | string;
  description: string;
  hasPlusIcon: boolean;
};

export default function GrowingNumberCard(props: GrowingNumberCardProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-[280px]">
      <p className="text-blue text-[128px] font-black">
        {props.hasPlusIcon ? "+" : ""}
        {props.number}
      </p>
      <p className="text-white font-black text-[24px]">{props.description}</p>
    </div>
  );
}
