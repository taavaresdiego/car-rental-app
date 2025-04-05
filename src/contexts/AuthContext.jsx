import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("authToken"));
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const currentToken = localStorage.getItem("authToken");
    if (currentToken) {
      const storedUserInfo = localStorage.getItem("userInfo");
      if (storedUserInfo) {
        try {
          setUser(JSON.parse(storedUserInfo));
        } catch (parseError) {
          console.error(
            "Erro ao parsear userInfo do localStorage:",
            parseError
          );
          localStorage.removeItem("userInfo");
          localStorage.removeItem("authToken");
          setToken(null);
        }
      } else {
        setUser({ identifier: "logged-in-user" });
      }
      setToken(currentToken);
    }
    setAuthLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      console.log("AuthContext: Chamando loginUser com:", {
        email,
        senha: password,
      });
      const response = await loginUser({ email, senha: password });
      console.log("AuthContext: Resposta recebida de loginUser:", response);

      if (response && response.data && response.data.token) {
        const receivedToken = response.data.token;
        console.log("AuthContext: Token recebido:", receivedToken);

        setToken(receivedToken);
        localStorage.setItem("authToken", receivedToken);

        const userInfo = { email: email };
        setUser(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        console.log("AuthContext: Login bem-sucedido, estado atualizado.");
        return true;
      } else {
        console.error(
          "AuthContext: Estrutura da resposta inesperada:",
          response
        );
        throw new Error("Resposta inválida da API de login simulada.");
      }
    } catch (err) {
      console.error("AuthContext: Erro detalhado no bloco catch:", err);
      console.error(
        "AuthContext: Tentando acessar err.response?.data?.message:",
        err.response?.data?.message
      ); // Log para verificar a estrutura simulada
      console.error("AuthContext: Tentando acessar err.message:", err.message); // Log para verificar erro padrão

      // **** AJUSTE PRINCIPAL AQUI ****
      // Tenta pegar a mensagem do erro simulado (estrutura com 'response')
      // Se não existir, tenta pegar de um erro padrão (err.message)
      // Se nada funcionar, usa uma mensagem genérica
      const errorMessage =
        err?.response?.data?.message || // Para o erro simulado de api.js
        err?.message || // Para erros padrão do JavaScript
        "Erro desconhecido ao fazer login."; // Fallback

      console.error(
        "AuthContext: Mensagem de erro final definida:",
        errorMessage
      ); // Log da mensagem final
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
  };

  const contextValue = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
    loading,
    authLoading,
    error,
    setError,
  };

  if (authLoading) {
    return <div>Verificando autenticação...</div>;
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
