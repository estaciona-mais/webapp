import "./Dashboard.css";
import { useState } from "react";
import DashboardUsuario from "./components/DashboardUsuario";
import DashboardAdmin from "./components/DashboardAdmin";
import Header from "../../components/Header/Header";

export default function Dashboard({ tema, mudarTema }) {
  //    Temporário, para a construção dos layouts!
  const [role, setRole] = useState("cliente");
  const header = (
    <Header role={role} setRole={setRole} tema={tema} mudarTema={mudarTema} />
  );
  return (
    <div>
      {header}
      {role === "ADMIN" ? <DashboardAdmin /> : <DashboardUsuario />}
    </div>
  );
}
