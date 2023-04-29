import './App.css';
import contadordeclip from "./img/logo.jpg";
import Boton from './componet/boton';
import Contador from "./componet/contador";
import { useState } from 'react';

function App () {
  
  const [numClic, setNumClic] = useState(0);
  
  const manejarClip = () => {
   setNumClic(numClic + 1) 
  }

  const reiniciarContador = () => {
    setNumClic(0)
  }

  
  return (
    <div className="App">
      <h1>Contador de DMG de Luffi</h1>
      <div className='logo-contenedor'>
        <img className='logo' 
          src={contadordeclip} 
          alt='logotipo'/>
      </div>
      <div className='dmg-counter'>
        <Contador 
        numClic={numClic} />
        <Boton 
          texto="DMG"
          botonClip={true}
          manejarClip={manejarClip} />
        <Boton 
          texto="Reiniciar"
          botonClip={false}
          manejarClip={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
