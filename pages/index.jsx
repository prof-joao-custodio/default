// pages/index.jsx
import Head from 'next/head';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vote Professor João Custódio - 70999</title>
        <meta name="description" content="Vote no Professor João Custódio para vereador - Campanha Eleição 2024 - Paz, Amor e Tradição." />
        <meta property="og:title" content="Vote no Professor João Custódio - 70999" />
        <meta property="og:description" content="Paz, Amor e Tradição. Eleja Professor João Custódio." />
        <meta property="og:image" content="https://i.ibb.co/rx4VzcP/455686013-1038474321228600-8459096745685041423-n.jpg" />
      </Head>

      <div style={{ backgroundColor: "#e76930", color: "#ffffff" }}>
        {/* Header with buttons for WhatsApp and Instagram */}
        <header className={styles.header}>
          <a
            href="https://wa.me/5513981048674"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            style={{ backgroundColor: "#15a4aa", color: "#ffffff" }}
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/profjoaocustodio/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            style={{ backgroundColor: "#15a4aa", color: "#ffffff" }}
          >
            Instagram
          </a>
        </header>

        {/* Main content with image and candidate's slogan */}
        <main className={styles.main}>
          <h1 style={{ fontSize: "2em", textAlign: "center" }}>Professor João Custódio - 70999</h1>
          <p style={{ fontSize: "1.5em", textAlign: "center" }}>Paz, Amor e Tradição</p>
          <img 
            src="https://i.ibb.co/rx4VzcP/455686013-1038474321228600-8459096745685041423-n.jpg" 
            alt="VOTE NO PROFESSOR JOÃO - 70999" 
            className={styles.image} 
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </main>

        {/* Footer with the legal text */}
        <footer className={styles.footer} style={{ backgroundColor: "#15a4aa", color: "#ffffff", padding: "10px", textAlign: "center" }}>
          ELEIÇÃO 2024 JOÃO VICTOR DAMASCENO RODRIGUES VEREADOR CNPJ 56.164.328/0001-06
        </footer>
      </div>
    </>
  );
}