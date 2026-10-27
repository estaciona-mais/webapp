import api from "./conn.js";

/**
 * Dados de login do usuario.
 * @typedef {{
 *   token: string,
 *   nome: string,
 *   email: string,
 *   papel: string
 * }} LoginResponse
 */

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

/**
 * Realiza login através da API e recebe dados da operação.
 *
 * @param {string} email - Email do usuário.
 * @param {string} senha - Senha do usuário.
 * @returns {Promise<LoginResponse>} Dados de login.
 */
const loginComApi = async (email, senha) =>
  await api.post("/api/auth/login", { email, senha });

/**
 * Realiza login através do Google e recebe dados da operação.
 *
 * @param {string} credential - JWT recebido do Google.
 * @returns {Promise<LoginResponse>} Dados de login.
 */
const loginComGoogle = async (credential) =>
  await api.post("/api/auth/google", { credential });

/**
 * Remove dados locais relacionados ao login.
 */
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
};

/**
 * Cadastra um cliente no banco de dados através da API.
 *
 * @param {CadastroCliente} dadosCadastro - Dados de cadastro do cliente.
 * @returns {Promise<ClienteResponse>} Dados gerais do cliente.
 */
const cadastrarClienteApi = async (dadosCadastro) =>
  await api.post("/api/clientes", dadosCadastro);

/**
 * Cadastra um cliente no banco de dados através do Google.
 *
 * @param {CadastroCliente} dadosCadastro - Dados de cadastro do cliente.
 * @returns {Promise<ClienteResponse>} Dados gerais do cliente.
 */
const cadastrarClienteGoogle = async (dadosCadastro) =>
  await api.post("/api/clientes/google", dadosCadastro);

/**
 * Realiza login através do Google e recebe dados da operação.
 *
 * @param {string} credential - JWT recebido do Google.
 * @returns {Promise<boolean>} Usuário já cadastrado com Google ou não.
 */
const buscarUsuarioGoogle = async (credential) =>
  await api.post(
    "/api/usuarios/google/consulta",
    credential,
    ({ data }) => data.existente,
  );

export {
  loginComApi,
  loginComGoogle,
  logout,
  cadastrarClienteApi,
  cadastrarClienteGoogle,
  buscarUsuarioGoogle,
};
