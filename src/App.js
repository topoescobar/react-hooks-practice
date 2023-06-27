import React from "react";
import "./style.css";
import {useState, useRef, useEffect} from 'react'

export default function App() {

  //getter y setter
  const [name, setName] = useState('Ivan')

//permite controlar que hace en todos los ciclos de vida del componente
  useEffect(()=> {
    //1 montaje o creacion

    //2 destruccion
    return () => {}

    //3 arreglo de dependencias, cuando cambien se ejecuta el 1
  }, []
  )

  
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={ () => setName('Topo')} >
        Cambiar nombre
      </button>
    </div>
  );
}
