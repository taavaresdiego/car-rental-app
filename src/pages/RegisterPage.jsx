import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import styles from "./LoginPage.module.css";

function RegisterPage() {
  return (
    <div className={styles.pageContainer}>
      <RegisterForm />
    </div>
  );
}
export default RegisterPage;
