import React from 'react';
import { useState } from 'react';

export default function AddTask(props) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleClick = () => {
    setTaskTitle('');
    props.addTask(taskTitle);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add task"
        value={taskTitle}
        onChange={handleChange}
      />
      <p> valor de estado: {taskTitle} </p>

      <button onClick={handleClick}>Agregar tarea</button>
    </div>
  );
}
