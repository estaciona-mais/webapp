import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { listarCores, listarTipos } from "#services/api/veiculos";

export default function CadastroVeiculos({
  dadosIniciais,
  onConcluir,
  onVoltar,
}) {
  const [dados, setDados] = useState(dadosIniciais);
  const [cores, setCores] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    async function coletarCores() {
      const [coresResponse, tiposResponse] = await Promise.all([
        listarCores(),
        listarTipos(),
      ]);
      setCores(coresResponse);
      setTipos(tiposResponse);
    }
    coletarCores();
  }, []);

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
          {tipos.map((t) => (
            <option key={t.id} value={t.id}>
              {t.titulo}
            </option>
          ))}
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
          {cores.map((cor) => (
            <option key={cor.id} value={cor.id}>
              {cor.titulo}
            </option>
          ))}
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

      <label className="form__label" htmlFor="placa">
        Placa
      </label>
      {/* TODO: APLICAR UM INPUT MASK. PADRÃO SUGERIDO: /[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}/ */}
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

      <label className="form__label" htmlFor="ano">
        Ano
      </label>
      <input
        className="form__input"
        placeholder="2008"
        type="number"
        id="ano"
        name="ano"
        value={dados.ano}
        onChange={atualizarCampos}
        required
      />

      <label className="form__label" htmlFor="observacao">
        Observação (opcional)
      </label>
      <input
        className="form__input"
        placeholder="Adesivo no capô."
        id="observacao"
        name="observacao"
        value={dados.observacao}
        onChange={atualizarCampos}
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
