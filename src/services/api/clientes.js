import api from "./conn.js";

/**
 * Dados gerais do cliente.
 * @typedef {{
 *   clienteId: number,
 *   nome: string,
 *   email: string,
 *   criadoEm: Date,
 *   aviso: string,
 *   plano: string,
 *   status: string
 * }} DadosCliente
 */

/**
 * Coleta todos os clientes cadastrados.
 *
 * @returns {Promise<DadosCliente[]>} Clientes registrados.
 */
const listarClientes = async () => await api.get("/api/clientes");

export { listarClientes };
