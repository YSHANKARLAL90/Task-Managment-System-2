import React, { useState } from 'react';

const TaskForm = ({ setTasks, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState(editingTask ? editingTask.title : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');
  const [priority, setPriority] = useState(editingTask ? editingTask.priority : 'Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      setTasks(prev => prev.map(task => task.id === editingTask.id ? { ...task, title, description, priority } : task));
      setEditingTask(null);
    } else {
      setTasks(prev => [...prev, { id: Date.now(), title, description, priority, completed: false }]);
    }
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-700 mb-6">{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-600 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="p-3 rounded-md w-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 transition"
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-600 mb-1">Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="p-3 rounded-md w-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 transition"
          placeholder="Describe the task"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-600 mb-1">Priority</label>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="p-3 rounded-md w-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 transition"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-md text-lg font-semibold transition-transform transform hover:scale-105 focus:scale-95 focus:outline-none shadow-lg"
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
