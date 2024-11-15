
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TaskModal from './components/TaskModal';

function App() {
  // Load tasks from localStorage or set to an empty array if none exist
  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasks); // Initialize tasks from localStorage
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar tasks={tasks} setFilteredTasks={setFilteredTasks} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 bg-pink-500 text-white px-4 py-2 rounded-md"
        >
          New Task
        </button>
        <Dashboard tasks={filteredTasks} setTasks={setTasks} />
      </div>

      {/* Task Modal */}
      {isModalOpen && (
        <TaskModal setTasks={setTasks} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default App;
