import Widget from "#components/Widget/Widget";
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

const conteudosVeiculos = [
  { conteudo: "tipo", titulo: "Tipo" },
  { conteudo: "cor", titulo: "Cor" },
  { conteudo: "fabricante", titulo: "Fabricante" },
  { conteudo: "modelo", titulo: "Modelo" },
  { conteudo: "placa", titulo: "Placa" },
  { conteudo: "ano", titulo: "Ano" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
];

const conteudosHistorico = [
  { conteudo: "placa", titulo: "Placa" },
  { conteudo: "vaga", titulo: "Vaga" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
  { conteudo: "entrada", titulo: "Entrada" },
  { conteudo: "saida", titulo: "Saída" },
];

const conteudosClientes = [
  { conteudo: "nome", titulo: "Nome Completo" },
  { conteudo: "email", titulo: "Email" },
  { conteudo: "plano", titulo: "Plano" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
];

export default function DashboardAdmin() {
  const [clientes, setClientes] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [veiculos, setVeiculos] = useState([]);

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
          <ClientesRegistrados update={(d) => setClientes(d)} />
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
          <Veiculos
            conteudos={conteudosVeiculos}
            dados={veiculos}
            update={(d) => setVeiculos(d)}
          />
        </Widget>
        <Widget
          tituloWidget={"Histórico de Entradas e Saídas"}
          className="area__historico"
          fullscreen={() => setFullscreen("historico")}
        >
          <EntradasSaidas
            conteudos={conteudosHistorico}
            dados={historico}
            update={(d) => setHistorico(d)}
          />
        </Widget>
      </main>
      <ModalWidget
        aberto={fullscreen === "veiculos"}
        titulo={"Veículos Registrados"}
        fechar={() => setFullscreen(null)}
      >
        <TabelaSpreadsheet
          conteudos={conteudosVeiculos}
          dados={veiculos}
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
          conteudos={conteudosClientes}
          dados={clientes}
          chave={"clienteId"}
        />
      </ModalWidget>
    </>
  );
}
