import React from 'react';

export default function Task({ task, editTask }) {
  const handleCheckbox = (event) => {
    let modTask = {
      ...task,
      done: event.target.checked,
    };
    editTask(modTask);
    console.log('task ', task);
    console.log('mod task', modTask);
  };

  return (
    <div>
      <label>
        {task.id + ' '}
        <input type="checkbox" checked={task.done} onChange={handleCheckbox} />
        {' ' + task.title}
      </label>
    </div>
  );
}
