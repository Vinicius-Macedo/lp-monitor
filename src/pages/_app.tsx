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
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Titan Capital | Fundos de Investimentos</title>
        <meta name="title" content="Titan Capital | Fundos de Investimentos" />
        <meta
          name="description"
          content="A Titan Capital é uma gestora de recursos especializada na administração de fundos de investimentos e desenvolve a atividade de gestão com a construção de portfólios de investimentos."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://titancapital.com.br/" />
        <meta
          property="og:title"
          content="Titan Capital | Fundos de Investimentos"
        />
        <meta
          property="og:description"
          content="A Titan Capital é uma gestora de recursos especializada na administração de fundos de investimentos e desenvolve a atividade de gestão com a construção de portfólios de investimentos."
        />
        <meta property="og:image" content="/social-media-banner.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://titancapital.com.br/" />
        <meta
          property="twitter:title"
          content="Titan Capital | Fundos de Investimentos"
        />
        <meta
          property="twitter:description"
          content="A Titan Capital é uma gestora de recursos especializada na administração de fundos de investimentos e desenvolve a atividade de gestão com a construção de portfólios de investimentos."
        />
        <meta property="twitter:image" content="/social-media-banner.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
