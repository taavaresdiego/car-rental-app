import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Spinner from "../Common/Spinner"; // Opcional: Mostrar um spinner durante o carregamento inicial

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    // Enquanto verifica o estado inicial de autenticação, mostra um loading
    return <Spinner />; // Ou outro indicador de carregamento
  }

  if (!isAuthenticated) {
    // Se não estiver autenticado após a verificação, redireciona para login
    // Passa a localização atual para que o usuário possa ser redirecionado de volta após o login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se estiver autenticado, renderiza o componente filho (a página protegida)
  return children;
};

export default ProtectedRoute;
