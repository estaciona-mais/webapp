import { useState, useEffect } from "react";
import SelecionarPlano from "#components/SelecionarPlano/SelecionarPlano";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { conferirOcupacao } from "#src/services/api/vagas.js";

import "./AreaCheckout.css";

export default function AreaCheckout() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    async function coletarOcupacaoVagas() {
      const res = await conferirOcupacao();
      setVagas(res.reduce((acc, cur) => acc + cur.total, 0));
    }
    coletarOcupacaoVagas();
  }, []);

  return (
    <div className="area__checkout">
      <div className="area__data">
        <div className="vagas__checkout">
          <p className="vagas__texto">Vagas Disponíveis</p>
          <p className="vagas__display">{vagas}</p>
        </div>
        <div className="selecionar__plano">
          <label className="label__selector">Selecione seu Plano</label>
          <div className="selector">
            <SelecionarPlano />
            <ChevronDown className="selector__seta" size={36} />
          </div>
        </div>
        <div className="checkout__final">
          <Link to="/cadastro" className="btn checkout__btn">
            Checkout{" "}
            <span className="shopping__checkout">
              <ShoppingCart size={48} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
