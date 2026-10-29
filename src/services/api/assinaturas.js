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
 * Dados da requisição da assinatura.
 * @typedef {{
 *   planoId: number,
 * }} CheckoutRequest
 */

/**
 * Resposta da assinatura.
 * @typedef {{
 *   url: string
 * }} CheckoutResponse
 */

/**
 * Lista todas as assinaturas.
 *
 * @returns {Assinatura[]} Lista de assinaturas.
 */
const listarAssinaturas = async () => await api.get("/api/assinaturas");

/**
 * Inicia o processo de assinatura.
 *
 * @param {CheckoutRequest} dados - Dados da requisição do checkout.
 * @returns {Promise<CheckoutResponse>} Resposta da assinatura.
 */
const iniciarCheckout = async (dados) =>
  await api.post("/api/assinaturas/checkout", dados);

export { listarAssinaturas, iniciarCheckout };
