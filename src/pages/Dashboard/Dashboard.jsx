import "./Dashboard.css"
import { useState } from "react";
import DashboardUsuario from "./components/DashboardUsuario"
import DashboardAdmin from "./components/DashboardAdmin"
import Header from "../../components/Header/Header";
import Sidebar from "#src/components/Sidebar/Sidebar";

export default function Dashboard({tema, mudarTema}){
//    Temporário, para a construção dos layouts!
    const [role, setRole] = useState("cliente")
    const header = (<Header role={role} setRole={setRole} tema={tema} mudarTema={mudarTema} />)
    return (
        <div>
            {header}
            {role === "admin" ? <DashboardAdmin /> : <DashboardUsuario />}
        </div>
    )
}