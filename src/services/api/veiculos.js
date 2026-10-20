import api from "./conn";

/**
 * Um objeto com dados de um veículo.
 * @typedef {{
 *   clienteId: number,
 *   placa: string,
 *   fabricante: string,
 *   modelo: string,
 *   ano: number,
 *   cor: string,
 *   tipo: string,
 *   observacao?: string
 * }} Veiculo
 */

/**
 * Lista todos os veículos cadastrados.
 *
 * @returns {Veiculo[]} Lista de veículos.
 */
const listar = async () => api.get("/api/veiculos");

/**
 * Cadastra um veículo.
 *
 * @param {Veiculo} req - Informações do veículo a ser cadastrado.
 */
const cadastrar = async (req) => api.post("/api/veiculos/cadastro", req);

export { listar, cadastrar };
