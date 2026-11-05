import "./EntradasSaidas.css"
import Tabela from "#src/components/Tabela/Tabela.jsx"

const historico = [
    {entrada: "18:28, 17 Out", placa: "QTP5F71", vaga: "A-21", clienteId: 842, saida: "Não Registrada"},
    {entrada: "17:42, 16 Out", placa: "CXZ7B41", vaga: "B-04", clienteId: 157, saida: "21:36, 16 Out"},
    {entrada: "09:15, 15 Out", placa: "BOK3C58", vaga: "C-16", clienteId: 319, saida: "12:40, 15 Out"},
    {entrada: "08:05, 15 Out", placa: "OYW4R26", vaga: "D-11", clienteId: 564, saida: "11:20, 15 Out"},
]

const conteudos = [
    {conteudo: "entrada", titulo: "Entrada"},
    {conteudo: "placa", titulo: "Placa"},
    {conteudo: "vaga", titulo: "Vaga"},
    {conteudo: "clienteId", titulo: "Cliente ID"},
    {conteudo: "saida", titulo: "Saída"}
]

export default function EntradasSaidas(){
    return(
        <div className="historicoAdmin__conteudo">
            <Tabela conteudos={conteudos} dados={historico} key="placa" />
        </div>
    )
}