import "../styles/globals.css";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Professor João Custódio - Campanha 2024</title>
        <meta name="description" content="Eleja Professor João Custódio - Paz, Amor e Tradição. Campanha Eleição 2024." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Professor João Custódio, eleição 2024, vereador, campanha, paz, amor, tradição" />
        <meta property="og:title" content="Professor João Custódio - Campanha 2024" />
        <meta property="og:description" content="Paz, Amor e Tradição. Conheça a campanha de Professor João Custódio." />
        <meta property="og:image" content="https://i.ibb.co/rx4VzcP/455686013-1038474321228600-8459096745685041423-n.jpg" />
        <meta property="og:url" content="https://www.instagram.com/profjoaocustodio/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;