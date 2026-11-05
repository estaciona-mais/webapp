import "./ClientesRegistrados.css"
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from "recharts";

// TODO: ALTERAR POR VALORES DA API
const clientesSemana = [
    {dia: "Segunda", valor: 11},
    {dia: "Terça", valor: 13},
    {dia: "Quarta", valor: 15},
    {dia: "Quinta", valor: 14},
    {dia: "Sexta", valor: 13},
    {dia: "Sábado", valor: 25},
    {dia: "Domingo", valor: 27},
]

const dadosCliente  = {
    total: 1298,
    ativos: 1229,
    inadimplentes: 48,
    pendentes: 21,
    cancelados: 113,
}

const status = [
    {id: "ativos", status: "Ativos", valor: dadosCliente .ativos},
    {id: "inadimplentes", status: "Inadimplentes", valor: dadosCliente .inadimplentes},
    {id: "pendentes", status: "Pendentes", valor: dadosCliente .pendentes},
    {id: "cancelados", status: "Cancelados", valor: dadosCliente.cancelados}
]

function Sparkline({dados}) {
    return (
        <div className="sparkline">
            <ResponsiveContainer>
                <LineChart data={dados}>
                    <XAxis dataKey="dia" hide />
                    <Tooltip 
                        formatter={(valor) => [valor, "Novos usuários"]}
                        labelFormatter={(dia) => `${dia}`}
                        cursor={{fill: "transparent"}}
                        itemStyle={{color: "var(--texto)"}}
                        contentStyle={{background: "var(--fundo-secundario)", border: "1px solid var(--primaria)", borderRadius: "var(--raio)", color: "var(--texto)"}}
                    />
                    <Line type="linear" dataKey="valor" stroke="var(--primaria)" strokeWidth={2} dot={{ r: 3, fill: "var(--destaque)", stroke: "none" }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

const totalClientes = 1298
const novosClientes = clientesSemana.reduce((s, {valor}) => s + valor, 0)

export default function UsuariosRegistrados(){
    return(
        <div className="usuarios__conteudo">
            <div className="usuarios__informacoes">
                <p className="informacoes__texto usuarios__total">{totalClientes} <span className="informacoes__registroTexto">Usuários Registrados</span></p>
                <p className="informacoes__texto usuarios__semana"><span className="texto__mais">+</span>{novosClientes} <span className="informacoes__registroTexto">Essa Semana</span></p>
                <div className="usuarios__grafico">
                    <Sparkline dados={clientesSemana} />
                </div>
            </div>
            <div className="usuarios__planos">
                <p className="usuarios__plano"><span className="plano__span">Mensal: </span> 973</p>
                <p className="usuarios__plano"><span className="plano__span">Anual: </span> 325</p> 
                {/* <p className="usuarios__plano"><span className="plano__span">Outros: </span> 65</p> */}
            </div>
            <div className="usuarios__assinaturas">
                <p className="usuarios__status">
                    {status.map(s => (
                        <span key={s.id} className={`usuarios__${s.id}`}>
                            {/* espaço usando caractere invisivel */}
                            {s.status} {s.valor}ㅤ
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}