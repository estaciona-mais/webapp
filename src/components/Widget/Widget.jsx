import { Ellipsis } from "lucide-react";
import "./Widget.css";
import { useState } from "react";

export default function Widget({
  tituloWidget,
  className = "",
  fullscreen,
  children,
}) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className={`widget__container ${className}`}>
      {fullscreen && (
        <div className="widget__opcoes">
          <Ellipsis onClick={() => setMenuAberto((aberto) => !aberto)} />
          {menuAberto && (
            <div className="widget__menu">
              <button
                onClick={() => {
                  (setMenuAberto(false), fullscreen());
                }}
              >
                Abrir em tela cheia
              </button>
            </div>
          )}
        </div>
      )}
      <p className="widget__titulo">{tituloWidget}</p>
      <div className="widget__conteudo">{children}</div>
    </div>
  );
}
