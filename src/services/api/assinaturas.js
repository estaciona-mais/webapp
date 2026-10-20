import api from "./conn";

/**
 * Um objeto com dados de uma assinatura.
 * @typedef {{
 *   id: number,
 *   plano: string,
 *   nomeCliente: string,
 *   emissao: Date,
 *   valor: number,
 *   metodoPagamento: string
 * }} Assinatura
 */

/**
 * Lista todas as assinaturas.
 *
 * @returns {Assinatura[]} Lista de assinaturas.
 */
const listar = async () => await api.get("/api/assinaturas");

export { listar };
