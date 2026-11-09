import "./Tabela.css";
import { useState } from "react";

export default function TabelaSpreadsheet({ conteudos, dados, chave }) {
  const [busca, setBusca] = useState("");

  const filtro = dados.filter((linha) =>
    Object.values(linha).some((valor) =>
      String(valor).toLowerCase().includes(busca.toLowerCase()),
    ),
  );

  return (
    <div>
      <div className="busca__container">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar"
          className="tabela__busca"
        />
      </div>
      <div className="tabela__container">
        <table className="tabela__header">
          <thead>
            <tr>
              {conteudos.map((c) => (
                <th key={c.conteudo}>{c.titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtro.map((linha) => (
              <tr key={linha[chave]}>
                {conteudos.map((c) => (
                  <td key={c.conteudo}>{linha[c.conteudo]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
