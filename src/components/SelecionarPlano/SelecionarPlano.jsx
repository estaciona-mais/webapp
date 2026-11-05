import { useState, useEffect } from "react";
import { listarPlanos } from "#services/api/planos";
import "./SelecionarPlano.css";

export default function SelecionarPlano({ onChange }) {
  const [planos, setPlanos] = useState([]);
  const [plano, setPlano] = useState(() => {
    const local = localStorage.getItem("plano");
    return local ? parseInt(local) : 1;
  });

  useEffect(() => {
    async function coletarPlanos() {
      try {
        const planoResponse = await listarPlanos();
        if (planoResponse.length === 0) {
          throw new Error("Não foi possível coletar os planos.");
        }

        setPlanos(planoResponse);
        setPlano(() => {
          const planoSalvo = parseInt(localStorage.getItem("plano"));
          const planoReserva = planoResponse[0].id;
          const planoEscolhido = planoSalvo || planoReserva;
          const resultado = planoResponse.find(({ id }) => id === planoEscolhido);
          if (!resultado) {
            throw new Error("Plano não encontrado.");
          }
          return resultado.id;
        });
      } catch (e) {
        console.error(e);
      }
    }
    coletarPlanos();
  }, []);

  useEffect(() => {
    localStorage.setItem("plano", plano);
    onChange?.(plano);
  }, [plano]);

  function alterarPlano(e) {
    setPlano(parseInt(e.target.value));
  }

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
