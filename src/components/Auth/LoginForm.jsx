// src/components/Auth/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Common/Button";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, setError } = useAuth(); // Pega do contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpa erros anteriores
    const success = await login(email, password);
    if (success) {
      navigate("/"); // Redireciona para a Home em caso de sucesso
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Entrar</h2>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.inputGroup}>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="login-password">Senha</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </Button>
      <p className={styles.registerLink}>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </form>
  );
}

export default LoginForm;
