import api from "./conn";

/**
 * Um objeto com dados de um veículo.
 * @typedef {{
 *   faturamento: number,
 *   quantidadeClientes: number,
 *   ticketMedio: number
 * }} RelatorioFinanceiro
 */

/**
 * Resgata o relatório financeiro, opcionalmente recebendo um período de início e fim.
 *
 * @param {Date?} inicio - Início opcional do relatório.
 * @param {Date?} fim - Fim opcional do relatório.
 * @returns {RelatorioFinanceiro} Dados do relatório financeiro.
 */
const coletarRelatorioFinanceiro = async (inicio, fim) =>
  api.post("/api/financeiro/relatorio", { inicio, fim });

export { coletarRelatorioFinanceiro };
