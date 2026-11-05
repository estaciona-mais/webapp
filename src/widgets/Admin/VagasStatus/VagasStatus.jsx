import "./VagasStatus.css"

const estacionamentoLimite = 96
const vagasOcupadas = 77
const vagasLivres = estacionamentoLimite - vagasOcupadas
const porcentagemOcupacao = (vagasOcupadas / estacionamentoLimite) * 100

export default function VagasStatus() {
    return (
        <div className="status__conteudo">
            <div className="titulo__vaga">
                <p className="header__vaga">LIVRE | OCUPADA</p>
            </div>
            <div className="conteudo__vaga">
                <p className="status__vaga">{vagasLivres} / {estacionamentoLimite} | {vagasOcupadas} / {estacionamentoLimite}</p>
                <p className="porcentagem__vaga">{porcentagemOcupacao.toFixed(2)}% de Ocupação</p>
            </div>
        </div>
    )
}