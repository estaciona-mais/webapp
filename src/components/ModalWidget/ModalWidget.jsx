import "./ModalWidget.css";
import Modal from "@mui/material/Modal";
import { X } from "lucide-react";

export default function ModalWidget({ aberto, titulo, fechar, children }) {
  return (
    <Modal open={aberto} onClose={fechar}>
      <div className="modal__container">
        <div className="modal__header">
          <p className="modal__titulo">{titulo}</p>
          <X className="modal__fechar" onClick={fechar} />
        </div>
        <div className="modal__conteudo">{children}</div>
      </div>
    </Modal>
  );
}
