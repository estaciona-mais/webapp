import SelecionarPlano from "../../../components/SelecionarPlano/SelecionarPlano"
import { ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'

import "./AreaCheckout.css"

export default function AreaCheckout() {
    return (
        <div className="area__checkout">
            <div className="area__data">
                <div className="vagas__checkout">
                    <p className="vagas__texto">Vagas Disponíveis</p>
                    {/* TODO: SUBSTITUIR POR INFORMAÇÕES DA API */}
                    <p className="vagas__display">38</p>
                </div>
                <div className="selecionar__plano">
                    <label className="label__selector">Selecione seu Plano</label>
                    <div className="selector">
                        <SelecionarPlano />
                        <ChevronDown className="selector__seta" size={36}/>
                    </div>
                </div>
                <div className="checkout__final">
                    <Link to="/cadastro" className="btn checkout__btn">Checkout <span className="shopping__checkout"><ShoppingCart size={48}/></span></Link>
                </div>
            </div>
        </div>

    )
}