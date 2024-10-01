// pages/index.jsx

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* Cabeçalho com botões do WhatsApp e Instagram */}
      <header className={styles.header}>
        <a
          href="https://wa.me/5513981048674"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/profjoaocustodio/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Instagram
        </a>
      </header>

      {/* Conteúdo principal com a imagem */}
      <main className={styles.main}>
        <img src="https://photos.fife.usercontent.google.com/pw/AP1GczO_mcaOrhuK94gA0hMYZB3hDPu0ALEAxNyit4OSWyavZ6SAKGkJ8EKl=w951-h951-s-no-gm?authuser=0" alt="VOTE NO PROFESSOR JOÃO - 70999" className={styles.image} />
      </main>

      {/* Rodapé com o texto especificado */}
      <footer className={styles.footer}>
        ELEIÇÃO 2024 JOÃO VICTOR DAMASCENO RODRIGUES VEREADOR 56.164.328/0001-06
      </footer>
    </div>
  );
}
