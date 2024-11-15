import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
