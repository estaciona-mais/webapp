import { useState, useEffect } from "react";
import { listarPlanos } from "#services/api/planos";
import "./SelecionarPlano.css";

/* TODO: SUBSTITUIR POR INFORMAÇÕES DA API */

export default function SelecionarPlano({ onChange }) {
  const [planos, setPlanos] = useState([]);
  const [plano, setPlano] = useState("");

  function alterarPlano(e) {
    setPlano(e.target.value);
  }

  useEffect(() => {
    async function coletarPlanos() {
      const response = await listarPlanos();
      setPlanos(response);
      setPlano(() => {
        let planoSalvo = null;
        const defaultPlano = response[0].id;

        try {
          planoSalvo = localStorage.getItem("plano");
        } catch (error) {
          // storage indisponivel
        }

        const planoExistente = response.find(({ id }) => id === planoSalvo);

        if (planoExistente) {
          return planoExistente.id;
        }

        return defaultPlano;
      });
    }
    coletarPlanos();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("plano", plano);
    } catch (error) {
      // storage indisponivel
    }

    onChange?.({ target: { name: "plano", value: plano } });
  }, [plano]);

  return (
    <select name="plano" value={plano} onChange={alterarPlano}>
      {planos.map((p) => (
        <option key={p.id} value={p.id}>
          {p.titulo}
        </option>
      ))}
    </select>
  );
}
