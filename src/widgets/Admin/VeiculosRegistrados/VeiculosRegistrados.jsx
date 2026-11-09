import { useState, useEffect } from "react";
import Tabela from "#src/components/Tabela/Tabela.jsx";
import { listarVeiculos } from "#services/api/veiculos.js";

import "./VeiculosRegistrados.css";

const conteudos = [
  { conteudo: "tipo", titulo: "Tipo" },
  { conteudo: "cor", titulo: "Cor" },
  { conteudo: "fabricante", titulo: "Fabricante" },
  { conteudo: "modelo", titulo: "Modelo" },
  { conteudo: "placa", titulo: "Placa" },
  { conteudo: "ano", titulo: "Ano" },
  { conteudo: "clienteId", titulo: "Cliente ID" },
];

export default function VeiculosRegistrados() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    async function coletarVeiculos() {
      const response = await listarVeiculos();
      setVeiculos(
        response.map(
          ({ clienteId, placa, fabricante, modelo, ano, cor, tipo }) => ({
            clienteId,
            placa,
            fabricante,
            modelo,
            ano,
            cor,
            tipo,
          }),
        ),
      );
    }
    coletarVeiculos();
  }, []);

  return (
    <div className="veiculos__conteudo">
      <Tabela conteudos={conteudos} dados={veiculos} key="placa" />
    </div>
  );
}
