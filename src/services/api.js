// src/services/api.js
import axios from "axios";
import { mockCars } from "../data/mockCars";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({ baseURL: API_BASE_URL });

const simulateNetworkDelay = (delay = 500) =>
  new Promise((resolve) => setTimeout(resolve, delay));

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token && !config.url.includes("/auth/")) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginUser = async (credentials) => {
  await simulateNetworkDelay();
  console.log("Simulating login for:", credentials.email);

  if (credentials.email && credentials.password) {
    return Promise.resolve({
      data: { token: "fake-jwt-token-for-" + credentials.email },
    });
  } else {
    return Promise.reject({
      response: {
        status: 400,
        data: { message: "Credenciais inválidas (simulado)" },
      },
    });
  }
};

export const registerUser = async (userData) => {
  await simulateNetworkDelay();
  console.log("Simulating registration for:", userData.email);

  if (userData.nome && userData.email && userData.senha) {
    return Promise.resolve({
      status: 201,
      data: { mensagem: "Usuário registrado com sucesso! (simulado)" },
    });
  } else {
    return Promise.reject({
      response: {
        status: 400,
        data: { message: "Erro ao registrar usuário (simulado)" },
      },
    });
  }
};

export const fetchCars = async () => {
  await simulateNetworkDelay(800);
  console.log("Simulating fetch cars");

  return Promise.resolve({ data: mockCars });
};

export default api;
