import "./Dashboard.css";
import { useState } from "react";
import DashboardUsuario from "./components/DashboardUsuario";
import DashboardAdmin from "./components/DashboardAdmin";
import Header from "../../components/Header/Header";
import { log } from "#misc/debug.js";

export default function Dashboard({ tema, mudarTema }) {
  const [role, setRole] = useState(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    log("Usuario:", usuario);
    return usuario.papel;
  });
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
