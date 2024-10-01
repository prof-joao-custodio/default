// components/navigation/navbar.jsx

import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Professor João Custódio - 70999 */}
      <div className={styles.candidateInfo}>
        <span className={styles.candidateName}>Professor João Custódio</span>
        <span className={styles.candidateNumber}>70999</span>
      </div>

      {/* Campaign Slogan */}
      <div className={styles.slogan}>
        Paz, Amor e Tradição por + Educação e Cultura para Cubatão
      </div>
    </nav>
  );
}
