// components/navigation/navbar.jsx

import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Professor João Custódio - 70999 */}
      <div className={styles.candidateInfo}>
        <span className={styles.candidateName}>Candidato a Vereador em Cubatão - Prof. João Custódio</span>
        <span className={styles.candidateNumber}>Acompanhe o nosso trabalho</span>
      </div>

      {/* Campaign Slogan */}
      <div className={styles.slogan}>
      ELEIÇÃO 2024 JOÃO VICTOR DAMASCENO RODRIGUES VEREADOR CNPJ 56.164.328/0001-06
      </div>
    </nav>
  );
}
