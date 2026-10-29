import Logo from "#components/Logo/Logo";
import "./HeaderLanding.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderLanding() {
  return (
    <header className="cabecalho">
      <div className="cabecalho__faixa">
        <div className="header-landing__logo">
          <Logo />
        </div>
        <nav className="navbar__landing">
          <a href="#">Sobre Nós</a>
          <a href="#">Planos</a>
          <a href="#">Como Funciona</a>
        </nav>
        <div className="btn__conta">
          {/* TODO: SUBSTITUIR BTN__ENTRAR POR UM <LINK> */}
          <Link to="/login" className="btn btn__entrar">
            <span className="btn__texto">Entrar</span>
            <ArrowRight size={20} />
          </Link>
          <Link to="/cadastro" className="btn btn__cadastro">
            Cadastre-se <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
