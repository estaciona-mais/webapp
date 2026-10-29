import api from "./conn";

/**
 * Dados de um endereço.
 * @typedef {{
 *   id: number,
 *   nomeCliente: string,
 *   uf: string,
 *   cep: string,
 *   cidade: string,
 *   bairro: string,
 *   rua: string,
 *   numero: number,
 *   complemento: string,
 * }} Endereco
 */

/**
 * Lista todos os endereços.
 *
 * @returns {Endereco[]} Lista de endereços.
 */
const listarEnderecos = async () => api.get("/api/enderecos");

export { listarEnderecos };
