import "./StatusPagamento.css"

export default function StatusPagamento(){
    return(
        <div className="pagamento__conteudo">
            <div className="pagamento__plano">
                <p>Plano Atual: <span className="pagamento__highlight">Mensal</span></p>
            </div>
            <div className="pagamento__plano">
                <p>Renovação em: <span className="tempo__renovacao">12 Dias</span></p>
            </div>
            <div className="pagamento__plano">
                <p>Cobrança: <span className="pagamento__highlight">Renovação Automática</span></p>
            </div>
        </div>
    )
}