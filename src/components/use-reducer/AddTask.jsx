import React from 'react';
import { useState } from 'react';

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="add task" onChange={handleChange} />
      <p> valor de estado: {taskTitle} </p>

      <button
        onClick={() => {
          setText('');
          //onAddTask(text);
        }}
      >
        Agregar tarea
      </button>
    </div>
  );
}
