import api from "./conn";

/**
 * Conteúdo de um item de movimentação.
 * @typedef {{
 *   placaVeiculo: string,
 *   codigoVaga: String,
 *   dataEntrada: Date,
 *   dataSaida: Date
 * }} Movimentacao
 */

/**
 * Lista todas as movimentações, opcionalmente com um limite.
 *
 * @param {number?} limite - quantidade de resultados.
 * @returns {Movimentacao[]} Lista de movimentações.
 */
const listarRelatorio = async (limite) =>
  api.get("/api/movimentacao/relatorio" + (limite ? `/?limite=${limite}` : ""));

/**
 * Lista todas as movimentações relacionadas a um cliente.
 *
 * @param {number} clienteId - id do cliente.
 * @returns {Movimentacao[]} Lista de movimentações.
 */
const listarHistoricoCliente = async (clienteId) =>
  api.post("/api/movimentacao/cliente", { clienteId });

/**
 * Registra a entrada de um veículo.
 *
 * @param {string} placaVeiculo - Placa do veículo.
 * @param {string} zonaVaga - Zona contendo a vaga ocupada.
 * @param {number} numeroVaga - Número da vaga ocupada.
 */
const registrarEntrada = async (placaVeiculo, zonaVaga, numeroVaga) =>
  api.post("/api/movimentacao/entrada", { placaVeiculo, zonaVaga, numeroVaga });

/**
 * Registra a saída de um veículo.
 *
 * @param {string} placaVeiculo - Placa do veículo.
 * @param {string} zonaVaga - Zona contendo a vaga liberada.
 * @param {number} numeroVaga - Número da vaga liberada.
 */
const registrarSaida = async (placaVeiculo, zonaVaga, numeroVaga) =>
  api.post("/api/movimentacao/saida", { placaVeiculo, zonaVaga, numeroVaga });

export {
  listarRelatorio,
  listarHistoricoCliente,
  registrarEntrada,
  registrarSaida,
};
