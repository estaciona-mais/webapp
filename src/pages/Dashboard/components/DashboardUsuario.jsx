import Widget from "../../../components/Widget/Widget";
import { MinhaVaga, MeuHistorico, StatusPagamento, Anuncios, Clima, Grid} from "../../../widgets";

export default function DashboardUsuario(){
    return (
        <div className="dashboard__conteudo">
            <Widget className="area__grid" tituloWidget="">
                <Grid />
            </Widget>
            <Widget className="area__vaga" tituloWidget="Minha Vaga">
                <MinhaVaga />
            </Widget>
            <Widget className="area__historico" tituloWidget="Meu Histórico">
                <MeuHistorico />
            </Widget>
            <Widget className="area__pagamento" tituloWidget="Status do Pagamento">
                <StatusPagamento />
            </Widget>
            <Widget className="area__anuncios" tituloWidget="Avisos">
                <Anuncios />
            </Widget>
            <Widget className="area__clima" tituloWidget="Clima">
                <Clima />
            </Widget>
        </div>
    )
}