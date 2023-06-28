import React from 'react';

export default function StateEffect({
  name,
  setName,
  nameChanged,
  setNameChanged,
}) {
  const handleClick = () => {
    setName('Topo');
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
      <hr />
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
      <hr />
    </div>
  );
}
