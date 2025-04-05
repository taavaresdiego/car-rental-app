import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/api";
import Button from "../Common/Button";
import styles from "./LoginForm.module.css";

function RegisterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await registerUser({ nome, email, senha: password });
      setSuccess(response.data.mensagem || "Cadastro realizado com sucesso!");

      setNome("");
      setEmail("");
      setPassword("");

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao cadastrar.");
      console.error("Register error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Cadastrar</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && (
        <p className={styles.success}>{success} Redirecionando para login...</p>
      )}{" "}
      {}
      <div className={styles.inputGroup}>
        <label htmlFor="register-nome">Nome Completo</label>
        <input
          type="text"
          id="register-nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="register-password">Senha</label>
        <input
          type="password"
          id="register-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>
      <p className={styles.registerLink}>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </form>
  );
}
export default RegisterForm;
