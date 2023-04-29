import React from "react";
import "../style/boton.css";


function Boton({ texto, botonClip, manejarClip }) {
  return(
    <button
      className={botonClip? "boton-clip" : "boton-reiniciar" }
      onClick={manejarClip}>
      {texto}
    </button>
  );
}

export default Boton;