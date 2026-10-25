import api from "./conn.js";

/**
 * Dados de cadastro do usuário.
 * @typedef {{
 *   nome: string,
 *   email: string,
 *   senha: string,
 *   provider: string,
 *   providerId: string,
 *   credential: string
 * }} CadastroCliente
 */

/**
 * Dados gerais do cliente.
 * @typedef {{
 *   id: number,
 *   nome: string,
 *   criadoEm: Date,
 *   aviso: string
 * }} ClienteResponse
 */

const loginComApi = async (email, senha) =>
  await api.post("/api/auth/login", { email, senha });

const loginComGoogle = async (credential) =>
  await api.post("/api/auth/google", { credential });

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
};

/**
 * Cadastra um cliente no banco de dados.
 *
 * @param {CadastroCliente} dadosCadastro - Dados de cadastro do cliente.
 * @returns {Promise<ClienteResponse>} Dados gerais do cliente.
 */
const cadastrarClienteApi = async (dadosCadastro) =>
  await api.post("/api/clientes", dadosCadastro);

const cadastrarClienteGoogle = async (dadosCadastro) =>
  await api.post("/api/clientes/google", dadosCadastro);

export {
  loginComApi,
  loginComGoogle,
  logout,
  cadastrarClienteApi,
  cadastrarClienteGoogle,
};
