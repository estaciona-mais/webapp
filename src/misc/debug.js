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
      plano: localStorage.getItem("plano") ?? 1,
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

function gerarPlacaDeVeiculo() {
  const gerarNumero = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const gerarLista = (len) => Array(len).fill(0);

  const ls = gerarLista(4).map((_) => String.fromCharCode(gerarNumero(65, 90)));
  const ns = gerarLista(3).map((_) => gerarNumero(0, 9));
  return ls.slice(0, 3).join("") + ns[0] + ls[3] + ns.slice(1, 3).join("");
}

function gerarEmail() {
  return `teste${Math.floor(Math.random() * new Date().getTime())}@mail.com`;
}

export { dadosIniciaisCliente, dadosIniciaisVeiculo, log };
