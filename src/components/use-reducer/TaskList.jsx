import React from 'react';

export default function TaskList({ tasksArr }) {
  return (
    <div>
      <div className="result">
        <ul>
          {tasksArr.map((task) => (
            <li key={task.id}>
              {task.id} {task.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
