import { useState, useEffect } from "react";
import { conferirOcupacao } from "#services/api/vagas.js";

import "./VagasStatus.css";

export default function VagasStatus() {
  const [limiteVagas, setLimiteVagas] = useState(0);
  const [vagasLivres, setVagasLivres] = useState(0);
  const [vagasOcupadas, setVagasOcupadas] = useState(0);
  const [porcentagemOcupacao, setPorcentagemOcupacao] = useState(0);

  useEffect(() => {
    async function coletarOcupacao() {
      const response = await conferirOcupacao();
      const total = response.reduce((acc, cur) => acc + cur.total, 0);
      const livres = response.reduce((acc, cur) => acc + cur.disponiveis, 0);
      const ocupadas = total - livres;

      setLimiteVagas(total);
      setVagasLivres(livres);
      setVagasOcupadas(ocupadas);
      setPorcentagemOcupacao((ocupadas / total) * 100);
    }
    coletarOcupacao();
  }, []);

  // TODO: adicionar indicador de dados em processamento para não exibir os 0s. (um loader talvez?)
  return (
    <div className="status__conteudo">
      <div className="titulo__vaga">
        <p className="header__vaga">LIVRE | OCUPADA</p>
      </div>
      <div className="conteudo__vaga">
        <p className="status__vaga">
          {vagasLivres} / {limiteVagas} | {vagasOcupadas} / {limiteVagas}
        </p>
        <p className="porcentagem__vaga">
          {porcentagemOcupacao.toFixed(2)}% de Ocupação
        </p>
      </div>
    </div>
  );
}
