import React from "react";
import "./Aviso.css";

export default function () {
  const aviso = () => {
    alert(
      "Possiveis erros podem acontecer por causa da estabilidade da API, neste caso o problema é resolvido dentro de alguns segundos. Obrigado!"
    );
  };
  return (
    <div className="aviso-container">
      <button className="btn-aviso" onClick={aviso}>
        Aviso
      </button>
    </div>
  );
}
