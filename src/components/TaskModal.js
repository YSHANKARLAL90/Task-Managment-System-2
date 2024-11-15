import React, { useState, useEffect } from 'react';

const TaskModal = ({ setTasks, setIsModalOpen, editTask }) => {
  const [title, setTitle] = useState(editTask ? editTask.title : '');
  const [description, setDescription] = useState(editTask ? editTask.description : '');
  const [dueDate, setDueDate] = useState(editTask ? editTask.dueDate : '');
  const [priority, setPriority] = useState(editTask ? editTask.priority : 'Low');

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setDueDate(editTask.dueDate);
      setPriority(editTask.priority);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTask) {
      // Edit Task
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === editTask.id ? { ...task, title, description, dueDate, priority } : task
        )
      );
    } else {
      // Add New Task
      setTasks(prevTasks => [
        ...prevTasks,
        { id: Date.now(), title, description, dueDate, priority, completed: false }
      ]);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{editTask ? 'Edit Task' : 'New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full p-2 rounded-md border"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Priority</label>
            <select
              value={priority}
              onChange={e => setPriority(e.target.value)}
              className="w-full p-2 rounded-md border"
              required
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mr-4 bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md">
              {editTask ? 'Save Changes' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
