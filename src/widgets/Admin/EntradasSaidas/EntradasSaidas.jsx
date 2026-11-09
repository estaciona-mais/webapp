import { useEffect } from "react";
import Tabela from "#src/components/Tabela/Tabela.jsx";
import { listarRelatorio } from "#services/api/movimentacoes.js";

import "./EntradasSaidas.css";

export default function EntradasSaidas({ conteudos, dados, update }) {
  useEffect(() => {
    async function coletarMovimentacoes() {
      const response = await listarRelatorio();
      const resultados = response.map(
        ({ placaVeiculo, codigoVaga, dataEntrada, dataSaida, clienteId }) => ({
          placa: placaVeiculo,
          vaga: codigoVaga,
          entrada: new Date(dataEntrada).toLocaleString(),
          saida: new Date(dataSaida).toLocaleString(),
          clienteId,
        }),
      );
      update(resultados);
    }
    coletarMovimentacoes();
  }, []);

  return (
    <div className="historicoAdmin__conteudo">
      <Tabela conteudos={conteudos} dados={dados} key="placa" />
    </div>
  );
}
