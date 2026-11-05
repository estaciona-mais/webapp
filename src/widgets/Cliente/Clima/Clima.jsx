import "./Clima.css"

export default function Clima(){
    return(
        <div className="clima__conteudo">
            <div className="clima__container">
                <p>22 °C · Parcialmente nublado</p>
            </div>
            <div className="clima__container">
                <p>Máx. 25° <span className="clima__min">· Mín. 17°</span></p>
            </div>
            <div className="clima__container">
                <p>Umidade: 68%</p>
            </div>
        </div>
    )
}