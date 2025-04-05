// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.pageContainer}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
