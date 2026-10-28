import api from "./conn";
import { enumParaObjeto } from "../../misc/utils";

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
const listarVeiculos = async () => api.get("/api/veiculos");

const listarCores = async () =>
  api.get("/api/veiculos/cores", ({ data }) => enumParaObjeto(data));

const listarTipos = async () =>
  api.get("/api/veiculos/tipos", ({ data }) => enumParaObjeto(data));

/**
 * Cadastra um veículo.
 *
 * @param {Veiculo} req - Informações do veículo a ser cadastrado.
 */
const cadastrarVeiculo = async (req) => api.post("/api/veiculos", req);

export { listarVeiculos, listarCores, listarTipos, cadastrarVeiculo };
