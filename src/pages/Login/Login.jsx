import AreaForms from "../../components/AreaForms/AreaForms"
import LoginUsuario from "./components/LoginUsuario"

export default function Login() {

    // TODO: TROCAR PELA CHAMADA DA API
    function fazerLogin(dados) {
        console.log("Login:", dados)
    }

    return(
        <AreaForms subtitulo="Faça Login na sua Conta Estaciona+" textoLink="Não tem conta? Cadastre-se" destinoLink="/cadastro">
            <LoginUsuario onConcluir={fazerLogin}/>
        </AreaForms>
    )
}