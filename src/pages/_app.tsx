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
        <title> Alertas - Monitor do Mercado</title>
        <meta
          name="title"
          content=" Alertas - Monitor do Mercado"
        />
        <meta
          name="description"
          content="Receba, em tempo real, as notícias e análises que impactam o mercado."
        />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://canvas-monitor.vercel.app/" /> */}
        <meta
          property="og:title"
          content=" Alertas - Monitor do Mercado"
        />
        <meta
          property="og:description"
          content="Receba, em tempo real, as notícias e análises que impactam o mercado."
        />
        <meta property="og:image" content="./img/social-media-card.png" />

        <meta property="twitter:card" content="./img/social-media-card.png" />
        {/* <meta
          property="twitter:url"
          content="https://canvas-monitor.vercel.app/"
        /> */}
        <meta
          property="twitter:title"
          content=" Alertas - Monitor do Mercado"
        />
        <meta
          property="twitter:description"
          content="Receba, em tempo real, as notícias e análises que impactam o mercado."
        />
        <meta property="twitter:image" content="./img/social-media-card.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
