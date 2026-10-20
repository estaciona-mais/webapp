import api from "./conn.js";

const loginComApi = async (email, senha) =>
  await api.post("/api/auth/login", { email, senha }, void 0);

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
};

const cadastrar = async (nome, email, senha) => {
  await api.post("/api/usuarios", { nome, email, senha });
};

export { loginComApi, logout, cadastrar };
