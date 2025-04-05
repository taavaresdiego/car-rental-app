import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="/" className={styles.logo}>
          Go Car Brazil
        </a>
        <nav className={styles.nav}>
          <a href="#cars">Veículos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
