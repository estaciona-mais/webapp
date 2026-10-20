import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AreaForms from "../../components/AreaForms/AreaForms";
import { useAuth } from "../../contexts/AuthContext";
import { ArrowRight } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

import "./Login.css";

export default function Login() {
  const dadosEsperados = { email: "", senha: "" };
  const [dados, setDados] = useState(dadosEsperados);
  const [aviso, setAviso] = useState("");

  const { login, loginComGoogle } = useAuth();
  const navigate = useNavigate();

  function atualizarCampos(e) {
    setDados((d) => ({ ...d, [e.target.name]: e.target.value }));
  }

  async function enviar(e) {
    e.preventDefault();
    setAviso("");
    try {
      const { email, senha } = dados;
      await login(email, senha);
      navigate("/dashboard");
    } catch (erro) {
      setAviso(erro.message);
    }
  }

  async function aoEntrarComGoogle(res) {
    try {
      await loginComGoogle(res.credential);
      navigate("/dashboard");
    } catch (err) {
      setAviso(err.message);
    }
  }

  return (
    <AreaForms
      subtitulo="Faça Login na sua Conta Estaciona+"
      textoLink="Não tem conta? Cadastre-se"
      destinoLink="/cadastro"
    >
      <form className="form__login" onSubmit={enviar}>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Digite seu email"
          className="form__input"
          type="email"
          id="email"
          name="email"
          value={dados.email}
          onChange={atualizarCampos}
          required
        />
        {/* TODO: REDIRECIONAR PARA A RECUPERAÇÃO DE EMAIL */}
        <a className="link__ajuda" href="#">
          Esqueci meu email
        </a>

        <label className="form__label" htmlFor="senha">
          Senha
        </label>
        <input
          placeholder="Digite sua senha"
          className="form__input"
          type="password"
          id="senha"
          name="senha"
          value={dados.senha}
          onChange={atualizarCampos}
          required
        />
        {/* TODO: REDIRECIONAR PARA A RECUPERAÇÃO DE SENHA */}
        <a className="link__ajuda" href="#">
          Esqueci minha senha
        </a>

        {aviso && <p className="aviso">{aviso}</p>}

        <button type="submit" className="btn btn__submit">
          Confirmar e Fazer Login <ArrowRight size={20} />
        </button>

        <div className="form__login__outros-logins">
          <p>ou</p>
          <GoogleLogin
            onSuccess={aoEntrarComGoogle}
            onError={() => setAviso("O login com o Google foi interrompido.")}
          />
        </div>
      </form>
    </AreaForms>
  );
}
