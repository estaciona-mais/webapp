import { useState } from "react";
import { useAuth } from "#contexts/AuthContext.jsx";
import CadastroUsuario from "#pages/Cadastro/components/CadastroUsuario";
import CadastroVeiculos from "#pages/Cadastro/components/CadastroVeiculos";
import AreaForms from "#components/AreaForms/AreaForms";

import { cadastrarVeiculo } from "#services/api/veiculos";
import { tituloParaCampoEnum } from "#misc/utils";
import { iniciarCheckout } from "#services/api/assinaturas";
import { dadosIniciaisCliente, dadosIniciaisVeiculo } from "#misc/debug";

export default function Cadastro() {
  // TODO: substituir número por componente
  const [etapa, setEtapa] = useState(1);
  const [dadosUsuario, setDadosUsuario] = useState(dadosIniciaisCliente);
  const [dadosVeiculo, setDadosVeiculo] = useState(dadosIniciaisVeiculo);

  const { cadastrarClienteApi, cadastrarClienteGoogle } = useAuth();

  function concluirEtapaUsuario(dados) {
    setDadosUsuario(dados);
    setEtapa(2);
  }

  function voltarEtapaUsuario(dados) {
    setDadosVeiculo(dados);
    setEtapa(1);
  }

  async function executarCadastroDoCliente(usuario) {
    switch (usuario.provider) {
      case "LOCAL":
        return await cadastrarClienteApi(usuario);
      case "GOOGLE":
        return await cadastrarClienteGoogle(usuario);
      default:
        throw new Error("Provedor de login inválido.");
    }
  }

  async function enviarCadastro(dados) {
    console.log("Cadastro enviado:", dados);
    const { usuario, veiculo } = dados;

    const clienteCadastrado = await executarCadastroDoCliente(usuario);
    console.log("Cliente cadastrado:", clienteCadastrado);

    await cadastrarVeiculo({
      ...veiculo,
      cor: tituloParaCampoEnum(veiculo.cor),
      tipo: tituloParaCampoEnum(veiculo.tipo),
      clienteId: clienteCadastrado.id,
    });

    console.log("Plano:", usuario.plano);
    const checkoutResponse = await iniciarCheckout({ planoId: usuario.plano });
    switch (checkoutResponse.codigoStatus) {
      case 201:
        console.log("Checkout URL:", checkoutResponse.url);
        window.location.href = checkoutResponse.url;
        break;
      case 400:
        // setAviso(checkoutResponse.mensagem);
        alert(checkoutResponse.mensagem);
        break;
      default:
        throw new Error("Código de resposta inválido.");
    }
  }

  function concluirEtapaVeiculo(dados) {
    setDadosVeiculo(dados);
    enviarCadastro({ usuario: dadosUsuario, veiculo: dados });
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
