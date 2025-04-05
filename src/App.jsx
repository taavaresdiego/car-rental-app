// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import HomePage from "./pages/HomePage";
// Importar as páginas, não os formulários diretamente
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// Importar o componente de rota protegida (será criado abaixo)
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        {" "}
        {/* Adicionar um <main> para melhor semântica e estilização */}
        <Routes>
          {/* Rota da HomePage protegida */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          {/* Usar os componentes de Página */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Adicionar uma rota para lidar com caminhos não encontrados */}
          {/* <Route path="*" element={<NotFoundPage />} />  // Criar se necessário */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
