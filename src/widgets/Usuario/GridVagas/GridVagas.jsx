import { useState } from "react"
import "./GridVagas.css"
import { CarFront, Motorbike } from "lucide-react";

const zonas = [
    {
    id: 1,
    zona: "A",
    vagas: [
        { id: 1, numero: 1, tipo: "MOTOCICLETA", disponivel: false },
        { id: 2, numero: 2, tipo: "", disponivel: true },
        { id: 3, numero: 3, tipo: "CARRO", disponivel: false },
        { id: 4, numero: 4, tipo: "", disponivel: true },
        { id: 5, numero: 5, tipo: "MOTOCICLETA", disponivel: false },
        { id: 6, numero: 6, tipo: "", disponivel: true },
        { id: 7, numero: 7, tipo: "CARRO", disponivel: false },
        { id: 8, numero: 8, tipo: "", disponivel: true },
        { id: 9, numero: 9, tipo: "MOTOCICLETA", disponivel: false },
        { id: 10, numero: 10, tipo: "", disponivel: true },
        { id: 11, numero: 11, tipo: "CARRO", disponivel: false },
        { id: 12, numero: 12, tipo: "", disponivel: true },
        { id: 13, numero: 13, tipo: "MOTOCICLETA", disponivel: false },
        { id: 14, numero: 14, tipo: "", disponivel: true },
        { id: 15, numero: 15, tipo: "CARRO", disponivel: false },
        { id: 16, numero: 16, tipo: "", disponivel: true },
        { id: 17, numero: 17, tipo: "MOTOCICLETA", disponivel: false },
        { id: 18, numero: 18, tipo: "", disponivel: true },
        { id: 19, numero: 19, tipo: "CARRO", disponivel: false },
        { id: 20, numero: 20, tipo: "", disponivel: true },
        { id: 21, numero: 21, tipo: "MOTOCICLETA", disponivel: false },
        { id: 22, numero: 22, tipo: "", disponivel: true },
        { id: 23, numero: 23, tipo: "CARRO", disponivel: false },
        { id: 24, numero: 24, tipo: "", disponivel: true },
    ],
    },
    {
    id: 2,
    zona: "B",
    vagas: [
        { id: 1, numero: 1, tipo: "CARRO", disponivel: false },
        { id: 2, numero: 2, tipo: "MOTOCICLETA", disponivel: false },
        { id: 3, numero: 3, tipo: "CARRO", disponivel: false },
        { id: 4, numero: 4, tipo: "", disponivel: true },
    ],
    },
    {
    id: 3,
    zona: "C",
    vagas: [
        { id: 1, numero: 1, tipo: "CARRO", disponivel: false },
        { id: 2, numero: 2, tipo: "", disponivel: true },
        { id: 3, numero: 3, tipo: "MOTOCICLETA", disponivel: false },
        { id: 4, numero: 4, tipo: "", disponivel: true },
    ],
    },
    {
    id: 4,
    zona: "D",
    vagas: [
        { id: 1, numero: 1, tipo: "", disponivel: true },
        { id: 2, numero: 2, tipo: "", disponivel: true },
        { id: 3, numero: 3, tipo: "CARRO", disponivel: false },
        { id: 4, numero: 4, tipo: "MOTOCICLETA", disponivel: false },
    ],
    }]

export default function GridVagas(){
    const [zonaID, setZonaID] = useState(zonas[0].id)
    const zonaAtual = zonas.find(z => z.id === zonaID)
    return(
        <div className="grid__conteudo">
            <p className="grid__titulo">Estacionamento Z, Rua X, 123</p>
            <div className="grid__zonas">
                {zonas.map(z => (
                    <button key={z.id} className={z.id === zonaID ? "zona__btn zona__atual" : "zona__btn"} onClick={() => setZonaID(z.id)}>Zona {z.zona}</button>
                ))}
            </div>
            <div className="grid__vagas">
                {zonaAtual.vagas.map(v => (
                    <div key={v.id} className="vaga">
                        <div className={"vaga__inner " + (v.disponivel ? "vaga__disponivel" : "vaga__ocupada")}>
                            {v.disponivel ? `${zonaAtual.zona}${v.numero}` : v.tipo === "CARRO" ? <CarFront size={50}/> : <Motorbike size={50}/>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}