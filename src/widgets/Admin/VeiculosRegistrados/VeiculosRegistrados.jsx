import { useEffect } from "react";
import Tabela from "#src/components/Tabela/Tabela.jsx";
import { listarVeiculos } from "#services/api/veiculos.js";

import "./VeiculosRegistrados.css";

export default function VeiculosRegistrados({ conteudos, dados, update }) {
  useEffect(() => {
    async function coletarVeiculos() {
      const response = await listarVeiculos();
      const resultados = response.map(
        ({ clienteId, placa, fabricante, modelo, ano, cor, tipo }) => ({
          clienteId,
          placa,
          fabricante,
          modelo,
          ano,
          cor,
          tipo,
        }),
      );
      update(resultados);
    }
    coletarVeiculos();
  }, []);

  return (
    <div className="veiculos__conteudo">
      <Tabela conteudos={conteudos} dados={dados} key="placa" />
    </div>
  );
}
