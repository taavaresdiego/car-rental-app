import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      {/* Adicione esta linha */}
      <App />
    </AuthProvider>{" "}
    {/* Adicione esta linha */}
  </StrictMode>
);
