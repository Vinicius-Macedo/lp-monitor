type FidcMiniArticleProps = {
  title: string;
  text: string;
};

export default function FidcMiniArticle(props: FidcMiniArticleProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}
