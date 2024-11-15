import React from 'react';

const TaskItem = ({ task, setTasks }) => {
  const toggleComplete = () => {
    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="p-4 bg-white shadow rounded-md mb-4 sm:max-w-xs md:max-w-md lg:max-w-lg">
      <h3 className="text-lg font-bold text-ellipsis overflow-hidden">{task.title}</h3>
      <p className="text-sm break-words max-h-20 overflow-y-auto">{task.description}</p>
      
      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        <span 
          className={`text-xs font-bold px-2 py-1 rounded mb-2 sm:mb-0 ${task.priority === 'High' ? 'bg-red-200 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
          {task.priority}
        </span>

        {/* Button to toggle complete */}
        <button
          className="text-pink-500 underline"
          onClick={toggleComplete}
        >
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
