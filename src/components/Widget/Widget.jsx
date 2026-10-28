import { Ellipsis } from 'lucide-react';
import "./Widget.css"

export default function Widget({tituloWidget, className = "", children}){
    return(
        <div className={`widget__container ${className}`}>
            <div className="widget__opcoes">
                <Ellipsis />
            </div>
            <p className="widget__titulo">{tituloWidget}</p>
            <div className="widget__conteudo">
                {children}
            </div>
        </div>
    )
}