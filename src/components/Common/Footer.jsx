import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          &copy; {currentYear} Velocity Rentals. Todos os direitos reservados.
        </p>
        {}
      </div>
    </footer>
  );
}

export default Footer;
