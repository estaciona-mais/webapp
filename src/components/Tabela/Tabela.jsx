import "./Tabela.css"

export default function Tabela({conteudos, dados, chave}){
    return(
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
                    {dados.map((linha) => (
                        <tr key={linha[chave]}>
                            {conteudos.map((c) => (
                                <td key={c.conteudo}>{linha[c.conteudo]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}