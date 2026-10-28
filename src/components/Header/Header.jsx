import Logo from "#components/Logo/Logo";
import "./Header.css";
import { UserRound, Moon, Settings, Bell, Sun } from "lucide-react";

export default function Header({ role, setRole, tema, mudarTema}){
    return (
        <header className="header">
            <div className="header__faixa">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__conteudo">
                    <div className="header__testes">
                        {/* Botão temporário pra testes */}
                        <button className="btn btn__teste" onClick={() => setRole("cliente")}>Ver dashboard usuário(TESTE)</button>
                        <button className="btn btn__teste" onClick={() => setRole("admin")}>Ver dashboard admin(TESTE)</button>
                    </div>
                    <div className="header_icones">
                        <div className="icone" onClick={mudarTema}>
                            {tema === 'dark' ? <Sun /> : <Moon />}
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}