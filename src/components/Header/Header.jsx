import Logo from "#components/Logo/Logo";
import "./Header.css";
import { UserRound, Moon, Settings, Bell, Sun } from "lucide-react";
import { useAuth } from "#contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Header({ role, setRole, tema, mudarTema }) {
  const { logout: authLogout } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    authLogout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__faixa">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__conteudo">
          <div className="header_icones">
            <div className="icone" onClick={mudarTema}>
              {tema === "dark" ? <Sun /> : <Moon />}
            </div>
            <div className="icone">
              <Settings />
            </div>
            <div className="icone">
              <Bell />
            </div>
          </div>
          <div className="header__usuario">
            <div className="icone">
              <UserRound />
            </div>
            <div>
              <p>Username</p>
              <p className="usuario__role">{role}</p>
              {/* Botão de logout */}
              <button onClick={logout}>SAIR</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
