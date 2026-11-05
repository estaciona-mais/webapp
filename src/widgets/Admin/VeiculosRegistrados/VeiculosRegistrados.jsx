import "./VeiculosRegistrados.css"
import Tabela from "#src/components/Tabela/Tabela.jsx"


const veiculosRegistrados = [
    { tipo: "Carro", cor: "Azul", marca: "Hyundai", modelo: "HB20", placa: "QTP5F71", ano: 2012, clienteId: 842},
    { tipo: "Motocicleta", cor: "Branco", marca: "Honda", modelo: "CG 160", placa: "CXZ7B41", ano: 2015, clienteId: 157},
    { tipo: "Carro", cor: "Preto", marca: "Chevrolet", modelo: "Onix", placa: "BOK3C58", ano: 2013, clienteId: 319},
    { tipo: "Carro", cor: "Cinza", marca: "Toyota", modelo: "Corolla", placa: "OYW4R26", ano: 1992, clienteId: 564}
]

const conteudos = [
    {conteudo: "tipo", titulo: "Tipo"},
    {conteudo: "cor", titulo: "Cor"},
    {conteudo: "marca", titulo: "Marca"},
    {conteudo: "modelo", titulo: "Modelo"},
    {conteudo: "placa", titulo: "Placa"},
    {conteudo: "ano", titulo: "Ano"},
    {conteudo: "clienteId", titulo: "Cliente ID"}
]

export default function VeiculosRegistrados(){
    return(
        <div className="veiculos__conteudo">
            <Tabela conteudos={conteudos} dados={veiculosRegistrados} key="placa" />
        </div>
    )
}