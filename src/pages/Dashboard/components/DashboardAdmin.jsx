import Widget from "../../../components/Widget/Widget";
import { ClientesRegistrados, Grid, Vagas, Financeiro, Veiculos, EntradasSaidas} from "../../../widgets";

export default function DashboardAdmin(){
    return (
        // <div className="admin__layout">
            <main className="admin__grid">
                <Widget className="area__grid">
                    <Grid />
                </Widget>
                <Widget tituloWidget={"Usuarios Registrados"} className="area__usuarios">
                    <ClientesRegistrados />
                </Widget>
                <Widget tituloWidget={"Vagas"} className="area__vagas">
                    <Vagas />
                </Widget>
                <Widget tituloWidget={"Relatórios Financeiros"} className="area__relatorios">
                    <Financeiro />
                </Widget>
                <Widget tituloWidget={"Veículos Registrados"} className="area__veiculos">
                    <Veiculos />
                </Widget>
                <Widget tituloWidget={"Histórico de Entradas e Saídas"} className="area__historico">
                    <EntradasSaidas />
                </Widget>
            </main>
        // </div>
    )
}