import api from "./conn";

const listar = async () =>
  await api.get("/api/planos", ({ data }) =>
    data.map((p) => ({
      id: p.titulo.toLowerCase(),
      valor: p.valor / 100,
      titulo: p.titulo,
    })),
  );

const buscarPlanoPorTitulo = async (titulo) =>
  await api.post("/api/planos/plano", { titulo });

// const atualizarValorPlano = async (titulo, novoValor) =>
//   await api
//     .patch("/api/planos/atualizacao/valor", { titulo, novoValor });

export { listar, buscarPlanoPorTitulo };
