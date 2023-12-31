import React from 'react';
import { useMemo, useState } from 'react';

export default function UseMemo(props) {
  const [count, setCount] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTaskList((t) => [...t, 'Nueva tarea']);
  };

  return (
    <div>
      <h2>4. useMemo </h2>
      <p>
        Guardar en caché un cálculo para no volver a ejecutar la funcion costosa
        cada vez que se re-renderiza el componente por un cambio de estado
      </p>
      <p>Objetivo: Optimización de rendimiento</p>
      <div>
        <h2>Mis tareas</h2>
        {taskList.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Agregar tarea</button>
        <p>
          Cuando se agrega la tarea no se vuelve a ejecutar el calculo
          demandante de recursos, solo se ejecutara cuando se actualice la
          dependencia count.
        </p>
      </div>
      <div>
        <h2>Expensive Calculation</h2>
        Count: {count}
        <button onClick={increment}>+</button>
        {calculation}
      </div>
      <hr />
    </div>
  );
}

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  let largeNum = 100; //usar 1000000000 sin useMemo para ver la diferencia
  for (let i = 0; i < largeNum; i++) {
    num += 1;
  }
  return num;
};
