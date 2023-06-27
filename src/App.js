import React from 'react';
import './style.css';
import { useState, useRef, useEffect } from 'react';

export default function App() {
  //getter y setter
  const [name, setName] = useState('Persona');
  const [nameChanged, setNameChanged] = useState(false);

  //permite controlar que hace en todos los ciclos de vida del componente
  useEffect(() => {
    //1 montaje o creacion, se ejecuta siempre una vez al inicio
    setNameChanged(!nameChanged);
    //2 destruccion
    return () => {};

    //3 arreglo de dependencias, cuando cambien se ejecuta nuevamente 1
  }, [name]);

  const handleClick = () =>{
    setName('Topo')
  }
 
  return (
    <div>
      <h1>Hello {name}!</h1>
      {nameChanged ? (
        <p>
          CLickea para cambiar el nombre y esconder este texto
        </p>
      ) : ( <p> Ejecutaste setName y la variable nameChanged con useEffect por dependencia con name </p> ) }

      <button onClick={handleClick}> Cambiar nombre</button>

    </div>
  );
}
