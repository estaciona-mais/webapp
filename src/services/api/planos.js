import api from "./conn";
import { campoEnumParaTitulo } from "../../misc/utils";

const listarPlanos = async () =>
  await api.get("/api/planos", ({ data }) =>
    data.map((p) => ({
      id: p.id,
      valor: p.valor / 100,
      nome: p.titulo,
      titulo: campoEnumParaTitulo(p.titulo),
    })),
  );

const buscarPlanoPorTitulo = async (titulo) =>
  await api.post("/api/planos/plano", { titulo });

// const atualizarValorPlano = async (titulo, novoValor) =>
//   await api
//     .patch("/api/planos/atualizacao/valor", { titulo, novoValor });

export { listarPlanos, buscarPlanoPorTitulo };
