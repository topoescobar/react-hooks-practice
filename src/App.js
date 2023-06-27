import React from 'react';
import './style.css';
import { useState, useRef, useEffect } from 'react';

export default function App() {
  //USE STATE: getters y setters
  const [name, setName] = useState('Persona');
  const [nameChanged, setNameChanged] = useState(false);

  //USE EFFECT: permite controlar que hace en todos los ciclos de vida del componente
  useEffect(() => {
    //1 montaje o creacion, se ejecuta siempre una vez al inicio
    setNameChanged(!nameChanged);
    if (name != 'Persona' ) {
      refButton.current.style.backgroundColor = 'blueviolet'
    }
    //2 destruccion
    return () => {};

    //3 arreglo de dependencias, cuando cambien se ejecuta nuevamente 1
  }, [name]);

  //USE REF: para arreglar problemas con el estado
  const refButton = useRef(null) 


  const handleClick = () =>{
    setName('Topo')
  }

  const handleRef = () => {
     refButton.current.click
  }
 
  return (
    <div>
      <h1>Hello {name}!</h1>
      {nameChanged ? (
        <p>
          CLickea para cambiar el nombre y esconder este texto
        </p>
      ) : ( <p> Ejecutaste setName y la variable nameChanged con useEffect por dependencia con name </p> ) }

      {/* con ref el boton ya no deberia andar y se puede ejecutar desde el 2do boton */}
      <button ref={refButton} onClick={handleClick}> B1 Cambiar nombre</button>

      <button onClick={handleRef}> Ejecutar B1</button>


    </div>
  );
}
