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

        {/* <!-- Primary Meta Tags --> */}
        <title>Formação de Investidores - Monitor do Mercado</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
