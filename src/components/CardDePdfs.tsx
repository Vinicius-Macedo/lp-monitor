import Image from "next/image";
import Link from "next/link";
import imageLoader from "../loader";

type CardDePdfsProps = {
  cardTitle: string;
  hasDescriptionInTheEnd?: boolean;
  DescriptionText?: string;
  hasGrayBackground?: boolean;
  pdfs: PdfItems[];
};

type PdfItems = {
  title: string;
};

export default function CardDePdfs(props: CardDePdfsProps) {
  // remove all special chars and aceents from a string and convert to lowercase and replace spaces with -
  function removeSpacesAndAccents(str: string) {
    return str
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s/g, "-")
      .toLowerCase();
  }

  return (
    <div
      className={
        "documento-item" + (props.hasGrayBackground ? " bg-[#F1F1F1]" : "")
      }
    >
      <h2 className="documento-title">{props.cardTitle}</h2>
      <ul className="ul-pdfs">
        {props.pdfs.map((pdf) => (
          <li key={pdf.title}>
            <Link
              className="li-pdf-link"
              target={"_blank"}
              href={removeSpacesAndAccents(pdf.title) + ".pdf"}
            >
              <Image
                src={"documentos/icone-pdf.png"}
                alt={"icone de PDF"}
                width={20}
                height={20}
                unoptimized
                loader={imageLoader}
              />
              <p className="hover:underline">{pdf.title}</p>
            </Link>
          </li>
        ))}
        {props.hasDescriptionInTheEnd ? (
          <li>
            <p>{props.DescriptionText}</p>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
