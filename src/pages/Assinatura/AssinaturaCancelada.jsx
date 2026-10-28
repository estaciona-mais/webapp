import { Link } from "react-router-dom";

function AssinaturaSucesso() {
  return (
    <div>
      <h1>Pagamento cancelado.</h1>
      <p>Nenhuma cobrança foi feita. Você pode assinar quando quiser.</p>
      <Link to="/cadastro">Voltar para o cadastro</Link>
    </div>
  );
}

export default AssinaturaSucesso;
