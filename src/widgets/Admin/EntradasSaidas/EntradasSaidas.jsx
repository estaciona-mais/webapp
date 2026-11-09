import { useState, useEffect } from "react";
import Tabela from "#src/components/Tabela/Tabela.jsx";
import { listarRelatorio } from "#services/api/movimentacoes.js";

import "./EntradasSaidas.css";

const conteudos = [
  { conteudo: "placa", titulo: "Placa" },
  { conteudo: "vaga", titulo: "Vaga" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
  { conteudo: "entrada", titulo: "Entrada" },
  { conteudo: "saida", titulo: "Saída" },
];

export default function EntradasSaidas() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    async function coletarMovimentacoes() {
      const response = await listarRelatorio();
      setHistorico(
        response.map(
          ({
            placaVeiculo,
            codigoVaga,
            dataEntrada,
            dataSaida,
            clienteId,
          }) => ({
            placa: placaVeiculo,
            vaga: codigoVaga,
            entrada: new Date(dataEntrada).toLocaleString(),
            saida: new Date(dataSaida).toLocaleString(),
            clienteId,
          }),
        ),
      );
    }
    coletarMovimentacoes();
  }, []);

  return (
    <div className="historicoAdmin__conteudo">
      <Tabela conteudos={conteudos} dados={historico} key="placa" />
    </div>
  );
}
