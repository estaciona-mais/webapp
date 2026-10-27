import { GoogleLogin } from "@react-oauth/google";
import "./CadastroLoginGoogle.css";

function CadastroLoginGoogle({ onSuccess, onError }) {
  return (
    <div className="cadastro_login_google">
      <p>ou</p>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

export default CadastroLoginGoogle;
