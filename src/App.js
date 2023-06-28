import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './style.css';
import UseMemo from './components/Memo';
import StateEffect from './components/StateEffect';
import Ref from './components/Ref';
import Callback from './components/Callback';

export default function App() {
  //USE STATE: getters y setters
  const [name, setName] = useState('Juancito');
  const [nameChanged, setNameChanged] = useState(false);

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

  const refButton = useRef(null);

  return (
    <div>
      <StateEffect
        name={name}
        setName={setName}
        nameChanged={nameChanged}
        setNameChanged={setNameChanged}
      />
      <Ref setName={setName} refButton={refButton} />
      <UseMemo name={name} setName={setName} />
      <Callback />
    </div>
  );
}
