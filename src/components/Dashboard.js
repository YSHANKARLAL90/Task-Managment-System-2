import React, { useState } from 'react';
import TaskModal from './TaskModal';

const Dashboard = ({ tasks, setTasks }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [expandedTasks, setExpandedTasks] = useState({});

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = (task) => {
    setTasks(tasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    ));
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };

  const toggleDescription = (id) => {
    setExpandedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`p-4 rounded-md shadow-md flex flex-col gap-2 ${
              task.completed ? 'bg-green-100' : 'bg-gray-100'
            }`}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="text-gray-600 break-words">
                {expandedTasks[task.id] ? task.description : `${task.description.slice(0, 100)}...`}
              </p>
              {task.description.length > 100 && (
                <button
                  onClick={() => toggleDescription(task.id)}
                  className="text-blue-500 text-sm underline"
                >
                  {expandedTasks[task.id] ? 'Read Less' : 'Read More'}
                </button>
              )}
              <p className="text-gray-500 text-sm">Due Date: {task.dueDate}</p>
              <p className={`text-sm ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                Priority: {task.priority}
              </p>
              <p className={`text-sm ${task.completed ? 'text-green-500' : 'text-gray-500'}`}>
                Status: {task.completed ? 'Completed' : 'Pending'}
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-2 mt-2 lg:mt-0">
              <button
                onClick={() => openEditModal(task)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
              <button
                onClick={() => toggleCompletion(task)}
                className={`${
                  task.completed ? 'bg-gray-400' : 'bg-green-500'
                } text-white px-4 py-2 rounded-md`}
              >
                {task.completed ? 'Mark as Pending' : 'Mark as Complete'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditModalOpen && (
        <TaskModal
          setTasks={setTasks}
          setIsModalOpen={setIsEditModalOpen}
          editTask={currentTask}
        />
      )}
    </div>
  );
};

export default Dashboard;

