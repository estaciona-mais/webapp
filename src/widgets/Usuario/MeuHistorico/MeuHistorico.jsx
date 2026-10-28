import "./MeuHistorico.css"
import { ChevronDown } from 'lucide-react';

export default function MeuHistorico(){
    return(
        <div className="historico__conteudo">
            <div className="historico__selector selector">
                <select>
                    <option className="opcao">Últimas 24 horas</option>
                    <option className="opcao">Últimos 7 dias</option>
                    <option className="opcao">Últimos 30 dias</option>
                </select>
                <ChevronDown className="selector__seta" size={16}/>
            </div>
            <div className="historico">
                <p className="ultima__entrada">Última entrada: hoje, 08:12</p>
                <p className="ultima__saida">Última saída: ontem, 17:46</p>
            </div>
        </div>
    )
}