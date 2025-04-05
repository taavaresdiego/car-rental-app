// src/components/Common/Button.jsx
import React from "react";
import styles from "./Button.module.css";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`} // Permite adicionar classes extras
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
