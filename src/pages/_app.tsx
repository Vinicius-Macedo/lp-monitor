import Head from "next/head";
import "../scss/main.scss";

import type { AppProps } from "next/app";
import { Header } from "../partials/Header";
import Footer from "../partials/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* FAVICON CONFIG */}
        <link
          rel="shortcut icon"
          href="https://storage.googleapis.com/mm-images/static/favicon.ico"
        />

        {/* <!-- Primary Meta Tags --> */}
        <title>Formação de Investidores - Monitor do Mercado</title>
        <meta
          name="title"
          content="Formação de Investidores - Monitor do Mercado"
        />
        <meta
          name="description"
          content="Aprenda escolher os melhores investimentos e acelerar seus resultados. Conheça os conceitos e práticas de investimentos para tomar as melhores decisões e montar uma carteira de investimentos lucrativa."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://canvas-monitor.vercel.app/" />
        <meta
          property="og:title"
          content="Formação de Investidores - Monitor do Mercado"
        />
        <meta
          property="og:description"
          content="Aprenda escolher os melhores investimentos e acelerar seus resultados. Conheça os conceitos e práticas de investimentos para tomar as melhores decisões e montar uma carteira de investimentos lucrativa."
        />
        <meta property="og:image" content="/img/social-media-card.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://canvas-monitor.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Formação de Investidores - Monitor do Mercado"
        />
        <meta
          property="twitter:description"
          content="Aprenda escolher os melhores investimentos e acelerar seus resultados. Conheça os conceitos e práticas de investimentos para tomar as melhores decisões e montar uma carteira de investimentos lucrativa."
        />
        <meta property="twitter:image" content="/img/social-media-card.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
