import React from 'react';
import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

// la funcion reducer puede venir de otro componente por props
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          done: false,
        },
      ];
    }
    case 'modify': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
  }
}

//array para reducer
const initialTasks = [
  { id: 0, title: 'Visit Kafka Museum', done: true },
  { id: 1, title: 'Watch a puppet show', done: false },
  { id: 2, title: 'Lennon Wall pic', done: false },
];
let maxId = initialTasks.length;

export default function reducerComponent() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const addTask = (title) => {
    console.log(title);
    dispatch({
      type: 'add',
      id: maxId++,
      title: title,
    });
  };

  const editTask = (modTask) => {
    dispatch({
      type: 'modify',
      task: modTask,
    });
  };

  return (
    <div>
      <h2>6. useReducer</h2>
      <p>
        {' '}
        funcion similar a useState, pero maneja la logica afuera del componente
      </p>
      <p>util: cuando hay muchos estados con funcionamieno similar</p>

      <h2>Lista de tareas</h2>
      <AddTask addTask={addTask} />
      <TaskList tasksArr={tasks} editTask={editTask} />
    </div>
  );
}
