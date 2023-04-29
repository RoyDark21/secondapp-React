import React from "react";
import "../style/contador.css";


function Contador({numClic}) {
  return (
    <div className="contador">
      {numClic}
    </div>
  )
}

export default Contador;