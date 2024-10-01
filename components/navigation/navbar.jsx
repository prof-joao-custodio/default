// components/navigation/navbar.jsx

import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Professor João Custódio - 70999 */}
      <div className={styles.candidateInfo}>
        <span className={styles.candidateName}>Siga-nos em nossas redes sociais</span>
        <span className={styles.candidateNumber}>Acompanhe o nosso trabalho</span>
      </div>

      {/* Campaign Slogan */}
      <div className={styles.slogan}>
        Clique nos botões abaixo.
      </div>
    </nav>
  );
}
