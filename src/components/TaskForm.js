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
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="p-2 rounded-md w-full border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="p-2 rounded-md w-full border"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Priority</label>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="p-2 rounded-md w-full border"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
