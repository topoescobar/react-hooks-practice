import React from 'react';
import Task from './Task';

export default function TaskList({ tasksArr, editTask }) {
  return (
    <div>
      <div className="result">
        <ul>
          {tasksArr.map((task) => (
            <li key={task.id}>
              <Task task={task} editTask={editTask} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
