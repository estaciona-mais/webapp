import { useState } from "react";
import CadastroUsuario from "./components/CadastroUsuario";
import CadastroVeiculos from "./components/CadastroVeiculos";
import AreaForms from "../../components/AreaForms/AreaForms";

export default function Cadastro() {
  const [etapa, setEtapa] = useState(1);
  const [dadosUsuario, setDadosUsuario] = useState(null);
  const [dadosVeiculo, setDadosVeiculo] = useState(null);

  function concluirEtapaUsuario(dados) {
    setDadosUsuario(dados);
    setEtapa(2);
  }

  function voltarEtapaUsuario(dados) {
    setDadosVeiculo(dados);
    setEtapa(1);
  }

  // TODO: ENVIAR PARA O BANCO DE DADOS
  function enviarCadastro(dados) {
    console.log("Cadastro enviado:", dados);
  }

  function concluirEtapaVeiculo(dados) {
    setDadosVeiculo(dados);
    const { confirmarSenha, senha, ...usuarioSemConfirmacao } = dadosUsuario;
    enviarCadastro({ usuario: usuarioSemConfirmacao, veiculo: dados });
  }

  return (
    <main>
      <AreaForms
        subtitulo="Crie sua Conta Estaciona+"
        textoLink="Já tem conta? Conecte-se"
        destinoLink="/login"
      >
        {etapa === 1 ? (
          <CadastroUsuario
            dadosIniciais={dadosUsuario}
            onConcluir={concluirEtapaUsuario}
          />
        ) : (
          <CadastroVeiculos
            dadosIniciais={dadosVeiculo}
            onVoltar={voltarEtapaUsuario}
            onConcluir={concluirEtapaVeiculo}
          />
        )}
      </AreaForms>
    </main>
  );
}
