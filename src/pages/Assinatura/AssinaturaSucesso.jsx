import { Link } from "react-router-dom";

function AssinaturaSucesso() {
  return (
    <div>
      <h1>Pagamento Recebido!</h1>
      <p>
        Sua assinatura será ativada em instantes. Seu dashboard está pronto para
        uso!
      </p>
      <Link to="/dashboard">Acessar dashboard</Link>
    </div>
  );
}

export default AssinaturaSucesso;
