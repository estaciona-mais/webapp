import { useState, useEffect } from 'react';
import "./SelecionarPlano.css"

/* TODO: SUBSTITUIR POR INFORMAÇÕES DA API */
const planos = [
    { id: "mensal", valor: 29.99, titulo: "Mensal"},
    { id: "anual", valor: 359.99, titulo: "Anual"}
]

export default function SelecionarPlano({onChange}){

    const[ plano, setPlano ] = useState(() => {
            let planoSalvo = null
            const defaultPlano =  planos[0].id

            try {
                planoSalvo = localStorage.getItem('plano')
            } catch (error) {
                // storage indisponivel
            }

            const planoExistente = planos.find(({ id }) => id === planoSalvo);

            if(planoExistente) {
                return planoExistente.id
            }

            return defaultPlano
        }
    )

    function alterarPlano(e) {
        setPlano(e.target.value)
    }

    useEffect(() => {
        try {
            localStorage.setItem('plano', plano)
        } catch (error) {
            // storage indisponivel
        }

        onChange?.({target:{name: 'plano', value: plano}})
    }, [plano])

    return (
        <select name="plano" value={plano} onChange={alterarPlano}>
            {planos.map((p) => {
                return(
                    <option key={p.id} value={p.id}>
                        {p.titulo}
                    </option>
                )
            })}
        </select>
    )
}