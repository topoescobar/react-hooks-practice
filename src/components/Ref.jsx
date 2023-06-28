import React from 'react';
import { useRef } from 'react';

export default function Ref(props) {
  const handleRef = () => {
    props.setName('useRef');
    props.refButton.current.click;
  };

  return (
    <div>
      <h2>3. useRef </h2>
      <p ref={props.refButton}>
        Accede a elementos del DOM directamente, en este ejemplo cambiara el
        fondo de este texto
      </p>
      <p>
        Utilidad: en asincronismo, para ejecutar solo cuando el componente este
        montado.
      </p>
      <button onClick={handleRef}> Ejecutar B1</button>
    </div>
  );
}
