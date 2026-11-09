import "./RelatoriosFinanceiros.css";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  Tooltip,
} from "recharts";

const dataAtual = new Date();
const dataMesPassado = new Date(
  dataAtual.getFullYear(),
  dataAtual.getMonth() - 1,
);
const meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const legenda = (data) => `${meses[data.getMonth()]}/${data.getFullYear()}`;

const formatarMoeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

let rrm = [
  { titulo: "Mês Atual", mes: legenda(dataAtual), valor: 12320.54 },
  { titulo: "Mês Passado", mes: legenda(dataMesPassado), valor: 5720.44 },
];

const mesAtual = rrm[0].valor;
const mesPassado = rrm[1].valor;
const porcentagemRrm = ((mesAtual - mesPassado) / mesPassado) * 100;

let valoresSemestre = [3000.32, 5300.94, 6400.11, 6440.73, 5720.9, 12320.07];
const receitaSemestral = valoresSemestre.map((valor, index) => {
  const dataSemestral = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth() - 5 + index,
    1,
  );
  return { mes: meses[dataSemestral.getMonth()], valor };
});

function GraficoMensal({ dados }) {
  return (
    <div className="grafico__barra">
      <ResponsiveContainer>
        <BarChart
          data={dados}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="mes" axisLine={false} tickLine={false} />
          <Bar
            dataKey="valor"
            fill="transparent"
            stroke="var(--primaria)"
            strokeWidth={2}
            radius={6}
          >
            <LabelList
              dataKey="valor"
              position="top"
              formatter={formatarMoeda}
            />
            {/* <LabelList dataKey="titulo" position="top" offset={25} fill="var(--texto)" /> */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function GraficoSemestral({ dados }) {
  return (
    <div className="grafico__barra">
      <ResponsiveContainer>
        <BarChart
          data={dados}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="mes" axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(valor) => [formatarMoeda(valor)]}
            labelFormatter={(mes) => `Receita do mes de ${mes}`}
            cursor={{ fill: "transparent" }}
            itemStyle={{ color: "var(--texto)" }}
            contentStyle={{
              background: "var(--fundo-secundario)",
              border: "1px solid var(--primaria)",
              borderRadius: "var(--raio)",
              color: "var(--texto)",
            }}
          />
          <Bar
            dataKey="valor"
            fill="transparent"
            stroke="var(--primaria)"
            strokeWidth={2}
            radius={6}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function RelatoriosFinanceiros() {
  return (
    <div className="relatorios__conteudo">
      <div className="relatorios__rrm">
        <p className="texto__relatorios">Receita Recorrente Mensal</p>
        <div className="relatorios__barra">
          <GraficoMensal dados={rrm} />
          <p className="procentagem__barra">▲ {porcentagemRrm.toFixed(2)}%</p>
          {/* ▼ simbolo caso porcentagemRrm for negativo, usar mais tarde */}
        </div>
      </div>
      <div className="relatorios__semestral">
        <p className="texto__relatorios">Receita Semestral</p>
        <div className="relatorios__barra">
          <GraficoSemestral dados={receitaSemestral} />
        </div>
      </div>
    </div>
  );
}
