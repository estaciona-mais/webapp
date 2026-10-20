import api from "./conn.js";

const listar = async () => await api.get("/api/vagas");

const conferirOcupacao = async () => await api.get("/api/vagas/ocupacao");

const consultarEstacionados = async () =>
  await api.get("/api/vagas/estacionados");

export { listar, conferirOcupacao, consultarEstacionados };
