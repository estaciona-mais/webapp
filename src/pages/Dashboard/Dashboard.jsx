import "./Dashboard.css"
import { useState } from "react";
import DashboardUsuario from "./components/DashboardUsuario"
import DashboardAdmin from "./components/DashboardAdmin"
import Header from "../../components/Header/Header";

export default function Dashboard({tema, mudarTema}){
//    Temporário, para a construção dos layouts!
    const [role, setRole] = useState("cliente")

    return (
        <div>
            <Header role={role} setRole={setRole} tema={tema} mudarTema={mudarTema} />
            {role === "admin" ? <DashboardAdmin /> : <DashboardUsuario />}
        </div>
    )
}