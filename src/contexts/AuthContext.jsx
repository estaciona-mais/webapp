import { createContext, useContext, useState } from "react";
import {
  loginComApi as authLogin,
  loginComGoogle as authLoginGoogle,
  logout as authLogout,
} from "../services/api/auth";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const salvo = localStorage.getItem("usuario");
    return salvo ? JSON.parse(salvo) : null;
  });

  /**
   * Inicia a sessão do usuário.
   * @param {{
   *   token: string,
   *   nome: string,
   *   papel: string
   * }} dados - Dados da sessão do usuário.
   */
  const iniciarSessao = (dados) => {
    const { token, nome, papel } = dados;
    const resumo = { nome, papel };
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(resumo));
    setUsuario(resumo);
  };

  const login = async (email, senha) =>
    iniciarSessao(await authLogin(email, senha));

  const loginComGoogle = async (credential) =>
    iniciarSessao(await authLoginGoogle(credential));

  const logout = () => {
    authLogout();
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, loginComGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const contexto = useContext(AuthContext);
  if (!contexto)
    throw new Error("useAuth deve ser usado dentro do AuthProvider.");
  return contexto;
};

export { AuthProvider, useAuth };
