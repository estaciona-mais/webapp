import Widget from "../../../components/Widget/Widget";
import ModalWidget from "#components/ModalWidget/ModalWidget.jsx";
import {
  ClientesRegistrados,
  Grid,
  Vagas,
  Financeiro,
  Veiculos,
  EntradasSaidas,
} from "../../../widgets";
import { useState } from "react";
import TabelaSpreadsheet from "#components/Tabela/TabelaSpreadsheet.jsx";

// PRA TESTES, REMOVER MAIS TARDE
const veiculosRegistrados = [
  {
    tipo: "Carro",
    cor: "Azul",
    marca: "Hyundai",
    modelo: "HB20",
    placa: "QTP5F71",
    ano: 2012,
    clienteId: 842,
  },
  {
    tipo: "Motocicleta",
    cor: "Branco",
    marca: "Honda",
    modelo: "CG 160",
    placa: "CXZ7B41",
    ano: 2015,
    clienteId: 157,
  },
  {
    tipo: "Carro",
    cor: "Preto",
    marca: "Chevrolet",
    modelo: "Onix",
    placa: "BOK3C58",
    ano: 2013,
    clienteId: 319,
  },
  {
    tipo: "Carro",
    cor: "Cinza",
    marca: "Toyota",
    modelo: "Corolla",
    placa: "OYW4R26",
    ano: 1992,
    clienteId: 564,
  },
];
const conteudosVeiculos = [
  { conteudo: "tipo", titulo: "Tipo" },
  { conteudo: "cor", titulo: "Cor" },
  { conteudo: "marca", titulo: "Marca" },
  { conteudo: "modelo", titulo: "Modelo" },
  { conteudo: "placa", titulo: "Placa" },
  { conteudo: "ano", titulo: "Ano" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
];
const historico = [
  {
    entrada: "18:28, 17 Out",
    placa: "QTP5F71",
    vaga: "A-21",
    clienteId: 842,
    saida: "Não Registrada",
  },
  {
    entrada: "17:42, 16 Out",
    placa: "CXZ7B41",
    vaga: "B-04",
    clienteId: 157,
    saida: "21:36, 16 Out",
  },
  {
    entrada: "09:15, 15 Out",
    placa: "BOK3C58",
    vaga: "C-16",
    clienteId: 319,
    saida: "12:40, 15 Out",
  },
  {
    entrada: "08:05, 15 Out",
    placa: "OYW4R26",
    vaga: "D-11",
    clienteId: 564,
    saida: "11:20, 15 Out",
  },
];
const conteudosHistorico = [
  { conteudo: "entrada", titulo: "Entrada" },
  { conteudo: "placa", titulo: "Placa" },
  { conteudo: "vaga", titulo: "Vaga" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
  { conteudo: "saida", titulo: "Saída" },
];
const usuariosRegistrados = [
  {
    nome: "Maria Luisa da Silva",
    email: "Marialuisa@hotmail.com",
    senha: "abcdefgh",
    plano: "mensal",
    clienteId: 842,
  },
  {
    nome: "João Gomes",
    email: "Joaogomes@outlook.com",
    senha: "12345678",
    plano: "anual",
    clienteId: 157,
  },
  {
    nome: "Evelyn Pinheiro",
    email: "EvelynP@gmail.com",
    senha: "jfewnuNF",
    plano: "mensal",
    clienteId: 319,
  },
  {
    nome: "Lucas Carvalho",
    email: "Lucas@yahoo.com",
    senha: "AbCd!!1",
    plano: "mensal",
    clienteId: 564,
  },
];
const conteudosUsuarios = [
  { conteudo: "nome", titulo: "Nome Completo" },
  { conteudo: "email", titulo: "Email" },
  { conteudo: "senha", titulo: "Senha" },
  { conteudo: "plano", titulo: "Plano" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
];

export default function DashboardAdmin() {
  const [fullscreen, setFullscreen] = useState(null);

  return (
    <>
      <main className="admin__grid">
        {/* widgets sem a prop fullscreen não tem os "..." e opções!!! */}
        <Widget className="area__grid">
          <Grid />
        </Widget>
        <Widget
          tituloWidget={"Usuarios Registrados"}
          className="area__usuarios"
          fullscreen={() => setFullscreen("usuarios")}
        >
          <ClientesRegistrados />
        </Widget>
        <Widget tituloWidget={"Vagas"} className="area__vagas">
          <Vagas />
        </Widget>
        <Widget
          tituloWidget={"Relatórios Financeiros"}
          className="area__relatorios"
        >
          <Financeiro />
        </Widget>
        <Widget
          tituloWidget={"Veículos Registrados"}
          className="area__veiculos"
          fullscreen={() => setFullscreen("veiculos")}
        >
          <Veiculos />
        </Widget>
        <Widget
          tituloWidget={"Histórico de Entradas e Saídas"}
          className="area__historico"
          fullscreen={() => setFullscreen("historico")}
        >
          <EntradasSaidas />
        </Widget>
      </main>
      <ModalWidget
        aberto={fullscreen === "veiculos"}
        titulo={"Veículos Registrados"}
        fechar={() => setFullscreen(null)}
      >
        <TabelaSpreadsheet
          conteudos={conteudosVeiculos}
          dados={veiculosRegistrados}
          chave={"clienteId"}
        />
      </ModalWidget>
      <ModalWidget
        aberto={fullscreen === "historico"}
        titulo={"Histórico de Entradas e Saídas"}
        fechar={() => setFullscreen(null)}
      >
        <TabelaSpreadsheet
          conteudos={conteudosHistorico}
          dados={historico}
          chave={"clienteId"}
        />
      </ModalWidget>
      <ModalWidget
        aberto={fullscreen === "usuarios"}
        titulo={"Usuários Registrados"}
        fechar={() => setFullscreen(null)}
      >
        <TabelaSpreadsheet
          conteudos={conteudosUsuarios}
          dados={usuariosRegistrados}
          chave={"clienteId"}
        />
      </ModalWidget>
    </>
  );
}
