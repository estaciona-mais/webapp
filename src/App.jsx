import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import AssinaturaSucesso from "./pages/Assinatura/AssinaturaSucesso";
import AssinaturaCancelada from "./pages/Assinatura/AssinaturaCancelada";

function App() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem("tema");
    if (salvo) return salvo;

    const prefereEscuro = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefereEscuro) return "dark";

    return "light";
  });

  function mudarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assinatura/sucesso" element={<AssinaturaSucesso />} />
        <Route path="/assinatura/cancelada" element={<AssinaturaCancelada />} />
        <Route
          path="/dashboard"
          element={<Dashboard tema={tema} mudarTema={mudarTema} />}
        />
      </Routes>
    </>
  );
}

export default App;
