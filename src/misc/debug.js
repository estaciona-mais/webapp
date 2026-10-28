import { gerarPlacaDeVeiculo, DEBUG_MODE } from "./utils";

const dadosIniciaisCliente = DEBUG_MODE
  ? {
      nome: "Usuário Teste",
      email: `teste${Math.floor(Math.random() * 382749)}@mail.com`,
      senha: "testeteste",
      confirmarSenha: "testeteste",
      plano: 3,
      provider: "LOCAL",
      providerId: "",
      credential: "",
    }
  : {
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
      plano: 1,
      provider: "LOCAL",
      providerId: "",
      credential: "",
    };

const dadosIniciaisVeiculo = DEBUG_MODE
  ? {
      tipo: "Carro",
      cor: "Preto",
      fabricante: "Toyota",
      modelo: "Corolla",
      placa: gerarPlacaDeVeiculo(),
      ano: 2008,
      observacao: "",
    }
  : {
      tipo: "Carro",
      cor: "Preto",
      fabricante: "",
      modelo: "",
      placa: "",
      ano: null,
      observacao: "",
    };

export { dadosIniciaisCliente, dadosIniciaisVeiculo };
