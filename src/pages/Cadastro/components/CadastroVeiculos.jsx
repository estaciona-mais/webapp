import { useState } from "react";
import { ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";

const dadosEsperados = {
  tipo: "Carro",
  cor: "Preto",
  fabricante: "",
  placa: "",
  modelo: "",
};
const cores = [
  "Preto",
  "Branco",
  "Cinza",
  "Vermelho",
  "Azul",
  "Verde",
  "Amarelo",
  "Laranja",
  "Rosa",
  "Roxo",
];

export default function CadastroVeiculos({
  dadosIniciais,
  onConcluir,
  onVoltar,
}) {
  const [dados, setDados] = useState(dadosIniciais || dadosEsperados);

  function atualizarCampos(e) {
    setDados((d) => ({ ...d, [e.target.name]: e.target.value }));
  }

  function enviar(e) {
    e.preventDefault();
    onConcluir(dados);
  }

  return (
    <form onSubmit={enviar}>
      <label className="form__label" htmlFor="tipo">
        Tipo de veículo
      </label>
      <div className="form__selector selector">
        <select
          id="tipo"
          name="tipo"
          value={dados.tipo}
          onChange={atualizarCampos}
        >
          <option value="Carro">Carro</option>
          <option value="Moto">Moto</option>
        </select>
        <ChevronDown className="selector__seta" size={36} />
      </div>

      <label className="form__label" htmlFor="cor">
        Cor do veículo
      </label>
      <div className="form__selector selector">
        <select
          id="cor"
          name="cor"
          value={dados.cor}
          onChange={atualizarCampos}
        >
          {cores.map((cor) => {
            return (
              <option key={cor} value={cor}>
                {cor}
              </option>
            );
          })}
        </select>
        <ChevronDown className="selector__seta" size={36} />
      </div>

      <label className="form__label" htmlFor="fabricante">
        Marca do veículo
      </label>
      <input
        className="form__input"
        placeholder="Digite a marca do veículo"
        type="text"
        id="fabricante"
        name="fabricante"
        value={dados.fabricante}
        onChange={atualizarCampos}
        required
      />

      <label className="form__label" htmlFor="placa">
        Placa
      </label>
      <input
        className="form__input"
        placeholder="Digite a placa do veículo"
        type="text"
        id="placa"
        name="placa"
        value={dados.placa}
        onChange={atualizarCampos}
        required
      />

      <label className="form__label" htmlFor="modelo">
        Modelo
      </label>
      <input
        className="form__input"
        placeholder="Digite o modelo do veículo"
        type="text"
        id="modelo"
        name="modelo"
        value={dados.modelo}
        onChange={atualizarCampos}
        required
      />

      {/* TODO: ENVIAR PARA A PAGINA DE PAGAMENTO */}
      <button type="submit" className="btn btn__submit">
        Confirmar e Continuar <ArrowRight size={20} />
      </button>
      <button
        type="button"
        className="btn btn__submit"
        onClick={() => onVoltar(dados)}
      >
        <ArrowLeft size={20} />
        Voltar
      </button>
    </form>
  );
}
