import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './style.css';
import UseMemo from './components/UseMemo';

export default function App() {
  //USE STATE: getters y setters
  const [name, setName] = useState('Juancito');
  const [nameChanged, setNameChanged] = useState(false);

  //USE EFFECT: permite controlar que hace en todos los ciclos de vida del componente
  useEffect(() => {
    //1 mount y update, se ejecuta siempre una vez al inicio
    setNameChanged(!nameChanged);
    if (name == 'useRef') {
      refButton.current.style.backgroundColor = 'blueviolet';
    }
    //2 unmount - destruccion
    return () => {};

    //3 arreglo de dependencias, cuando cambien se ejecuta nuevamente 1
  }, [name]);

  //USE REF: para arreglar problemas con el estado
  const refButton = useRef(null);

  const handleClick = () => {
    setName('Topo');
  };

  const handleRef = () => {
    setName('useRef');
    refButton.current.click;
  };

  return (
    <div>
      <h1>Usos de hooks en React</h1>
      <p>Funciones conectadas al ciclo de vida del componente</p>
      <h2>1. useState</h2>
      Variable y su setter
      <p>const [name, setName] = useState('Juancito');</p>
      <p className="console"> {'<p>Hello {name}! </p>  '} </p>
      <h3>Hello {name}! </h3>
      <h2>2. useEffect</h2>
      <p>
        Inicializa variables y se ejecuta cada vez que cambia el state de
        dependencia
      </p>
      {nameChanged ? (
        <p>Clickea para cambiar el nombre y esconder este texto</p>
      ) : (
        <p>
          {' '}
          Ejecutaste setName (con useState) para cambiar el nombre y se ejecuto
          el codigo de useEffect por dependencia con la variable name{' '}
        </p>
      )}
      {/* con ref el boton ya no deberia andar y se puede ejecutar desde el 2do boton */}
      <button onClick={handleClick}>B1 Cambiar nombre</button>
      <h2>3. useRef </h2>
      <p ref={refButton}>
        Accede a elementos del DOM directamente, en este ejemplo cambiara el
        fondo de este texto
      </p>
      <p>
        Utilidad: en asincronismo, para ejecutar solo cuando el componente este
        montado.
      </p>
      <button onClick={handleRef}> Ejecutar B1</button>
      <UseMemo name={name} setName={setName} />
    </div>
  );
}
