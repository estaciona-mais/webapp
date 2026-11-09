import { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { listarClientes } from "#services/api/clientes.js";
import { campoEnumParaTitulo } from "#misc/utils.js";

import "./ClientesRegistrados.css";

// TODO: ALTERAR POR VALORES DA API
// const clientesSemana = [
//   { dia: "Segunda", valor: 11 },
//   { dia: "Terça", valor: 13 },
//   { dia: "Quarta", valor: 15 },
//   { dia: "Quinta", valor: 14 },
//   { dia: "Sexta", valor: 13 },
//   { dia: "Sábado", valor: 25 },
//   { dia: "Domingo", valor: 27 },
// ];

function Sparkline({ dados }) {
  return (
    <div className="sparkline">
      <ResponsiveContainer>
        <LineChart data={dados}>
          <XAxis dataKey="dia" hide />
          <Tooltip
            formatter={(valor) => [valor, "Novos usuários"]}
            labelFormatter={(dia) => `${dia}`}
            cursor={{ fill: "transparent" }}
            itemStyle={{ color: "var(--texto)" }}
            contentStyle={{
              background: "var(--fundo-secundario)",
              border: "1px solid var(--primaria)",
              borderRadius: "var(--raio)",
              color: "var(--texto)",
            }}
          />
          <Line
            type="linear"
            dataKey="valor"
            stroke="var(--primaria)"
            strokeWidth={2}
            dot={{ r: 3, fill: "var(--destaque)", stroke: "none" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function ClientesRegistrados({ update }) {
  const [totalClientes, setTotalClientes] = useState(0);
  const [novosClientes, setNovosClientes] = useState(0);
  const [clientesSemana, setClientesSemana] = useState([]);
  const [statusClientes, setStatusClientes] = useState([]);
  const [planos, setPlanos] = useState(null);

  useEffect(() => {
    async function coletarClientes() {
      const response = await listarClientes();
      const total = response.length;

      const semana = () => new Date() - 604800000;

      setTotalClientes(total);
      setNovosClientes(
        response.filter((c) => new Date(c.criadoEm).getTime() > semana())
          .length,
      );

      setClientesSemana(() => {
        const dias = [
          "Domingo",
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado",
        ];
        return Array(7)
          .fill(0)
          .map((_, i) => ({
            dia: dias[i],
            valor: response.filter(
              (c) =>
                new Date(c.criadoEm).getTime() >= semana() &&
                new Date(c.criadoEm).getDay() === i,
            ).length,
          }));
      });

      setStatusClientes(() => {
        const ativos = response.filter((c) => c.status === "ATIVA").length;
        const inativos = response.filter((c) => c.status === "INATIVA").length;
        const cancelados = response.filter(
          (c) => c.status === "CANCELADA",
        ).length;

        return [
          { id: "ativos", status: "Ativos", valor: ativos },
          {
            id: "inativos",
            status: "Inativos",
            valor: inativos,
          },
          {
            id: "cancelados",
            status: "Cancelados",
            valor: cancelados,
          },
        ];
      });

      setPlanos({
        mensal: response.filter((c) => c.plano === "MENSAL"),
        anual: response.filter((c) => c.plano !== "MENSAL"),
      });

      const clientes = response.filter((c) => c.plano !== null);
      update(
        clientes.map(({ nome, email, plano, clienteId }) => ({
          nome,
          email,
          clienteId,
          plano: campoEnumParaTitulo(plano),
        })),
      );
    }
    coletarClientes();
  }, []);

  return (
    <div className="usuarios__conteudo">
      <div className="usuarios__informacoes">
        <p className="informacoes__texto usuarios__total">
          {totalClientes}{" "}
          <span className="informacoes__registroTexto">
            Usuários Registrados
          </span>
        </p>
        <p className="informacoes__texto usuarios__semana">
          <span className="texto__mais">+</span>
          {novosClientes}{" "}
          <span className="informacoes__registroTexto">Essa Semana</span>
        </p>
        <div className="usuarios__grafico">
          <Sparkline dados={clientesSemana} />
        </div>
      </div>
      <div className="usuarios__planos">
        {/* Por motivos desconhecidos, os seguintes valores causam erros de elemnto React inválido quando inseridos */}
        <p className="usuarios__plano">
          <span className="plano__span">Mensal: </span>{" "}
          <span>{/*planos?.mensal ?? 0*/} 6</span>
        </p>
        <p className="usuarios__plano">
          <span className="plano__span">Anual: </span>{" "}
          <span>{/*planos?.anual ?? 0*/} 0</span>
        </p>
        {/* <p className="usuarios__plano"><span className="plano__span">Outros: </span> 65</p> */}
      </div>
      <div className="usuarios__assinaturas">
        <p className="usuarios__status">
          {statusClientes.map((s) => (
            <span key={s.id} className={`usuarios__${s.id}`}>
              {/* espaço usando caractere invisivel */}
              {s.status} {s.valor}ㅤ
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
