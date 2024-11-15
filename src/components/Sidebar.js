// import React, { useState, useEffect } from 'react';

// const Sidebar = ({ tasks, setFilteredTasks }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [priorityFilter, setPriorityFilter] = useState('all');

//   // Calculate the percentage of completed tasks
//   const completedTasks = tasks.filter(task => task.completed).length;
//   const totalTasks = tasks.length;
//   const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

//   useEffect(() => {
//     let filtered = tasks;

//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(task =>
//         task.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filter by status
//     if (statusFilter !== 'all') {
//       filtered = filtered.filter(task =>
//         statusFilter === 'completed' ? task.completed : !task.completed
//       );
//     }

//     // Filter by priority
//     if (priorityFilter !== 'all') {
//       filtered = filtered.filter(task => task.priority === priorityFilter);
//     }

//     setFilteredTasks(filtered);
//   }, [tasks, searchTerm, statusFilter, priorityFilter, setFilteredTasks]);

//   // Circle perimeter calculation
//   const radius = 40;
//   const circumference = 2 * Math.PI * radius;
//   const strokeOffset = circumference - (progress / 100) * circumference;

//   return (
//     <div className="w-64 h-full bg-gradient-to-b from-pink-500 to-purple-500 text-white p-4 space-y-4 shadow-lg">
//       {/* Title */}
//       <h2 className="text-2xl font-bold mb-3">Task Manager</h2>

//       {/* Task Completion Progress */}
//       <div className="text-center mb-3">
//         <h3 className="text-lg font-semibold mb-1">Progress</h3>
//         <div className="relative w-24 h-24 mx-auto">
//           <svg className="w-full h-full transform rotate-90" xmlns="http://www.w3.org/2000/svg">
//             <circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               fill="transparent"
//               stroke="white"
//               strokeWidth="8"
//             />
//             <circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               fill="transparent"
//               stroke="#34D399"  // Green stroke
//               strokeWidth="8"
//               strokeDasharray={circumference}
//               strokeDashoffset={strokeOffset}
//               strokeLinecap="round"
//               transition="stroke-dashoffset 0.3s ease"
//             />
//           </svg>
//           <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">{progress}%</span>
//         </div>
//         <p className="text-sm mt-1">{completedTasks} of {totalTasks} tasks completed</p>
//       </div>

//       {/* Search Bar */}
//       <div>
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           className="w-full p-2 rounded-md text-gray-900 focus:outline-none"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Filter by Status */}
//       <div>
//         <h3 className="text-lg font-semibold mb-1">Filter by Status</h3>
//         <div className="space-y-1">
//           <button
//             onClick={() => setStatusFilter('all')}
//             className={`w-full py-2 rounded-md ${statusFilter === 'all' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setStatusFilter('completed')}
//             className={`w-full py-2 rounded-md ${statusFilter === 'completed' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
//           >
//             Completed
//           </button>
//           <button
//             onClick={() => setStatusFilter('pending')}
//             className={`w-full py-2 rounded-md ${statusFilter === 'pending' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
//           >
//             Pending
//           </button>
//         </div>
//       </div>

//       {/* Filter by Priority */}
//       <div>
//         <h3 className="text-lg font-semibold mb-1">Filter by Priority</h3>
//         <div className="space-y-1">
//           <button
//             onClick={() => setPriorityFilter('all')}
//             className={`w-full py-2 rounded-md ${priorityFilter === 'all' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setPriorityFilter('High')}
//             className={`w-full py-2 rounded-md ${priorityFilter === 'High' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
//           >
//             High
//           </button>
//           <button
//             onClick={() => setPriorityFilter('Medium')}
//             className={`w-full py-2 rounded-md ${priorityFilter === 'Medium' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
//           >
//             Medium
//           </button>
//           <button
//             onClick={() => setPriorityFilter('Low')}
//             className={`w-full py-2 rounded-md ${priorityFilter === 'Low' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
//           >
//             Low
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from 'react';

const Sidebar = ({ tasks, setFilteredTasks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  useEffect(() => {
    let filtered = tasks;

    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(task =>
        statusFilter === 'completed' ? task.completed : !task.completed
      );
    }

    if (priorityFilter !== 'all') {
      filtered = filtered.filter(task => task.priority === priorityFilter);
    }

    setFilteredTasks(filtered);
  }, [tasks, searchTerm, statusFilter, priorityFilter, setFilteredTasks]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-full md:w-64 bg-gradient-to-b from-pink-500 to-purple-500 text-white p-4 space-y-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-3">Task Manager</h2>

      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold mb-1">Progress</h3>
        <div className="relative w-24 h-24 mx-auto">
          <svg className="w-full h-full transform rotate-90" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke="white"
              strokeWidth="8"
            />
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke="#34D399"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
              transition="stroke-dashoffset 0.3s ease"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">{progress}%</span>
        </div>
        <p className="text-sm mt-1">{completedTasks} of {totalTasks} tasks completed</p>
      </div>

      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full p-2 rounded-md text-gray-900 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="md:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full py-2 rounded-md bg-pink-500 text-white"
        >
          Filters
        </button>
        {isDropdownOpen && (
          <div className="space-y-1 mt-2">
            <div>
              <h3 className="text-lg font-semibold mb-1">Filter by Status</h3>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full p-2 rounded-md bg-white text-pink-500"
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Filter by Priority</h3>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full p-2 rounded-md bg-white text-pink-500"
              >
                <option value="all">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Filters for Desktop */}
      <div className="hidden md:block">
        <h3 className="text-lg font-semibold mb-1">Filter by Status</h3>
        <div className="space-y-1">
          <button
            onClick={() => setStatusFilter('all')}
            className={`w-full py-2 rounded-md ${statusFilter === 'all' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter('completed')}
            className={`w-full py-2 rounded-md ${statusFilter === 'completed' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
          >
            Completed
          </button>
          <button
            onClick={() => setStatusFilter('pending')}
            className={`w-full py-2 rounded-md ${statusFilter === 'pending' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
          >
            Pending
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-1">Filter by Priority</h3>
        <div className="space-y-1">
          <button
            onClick={() => setPriorityFilter('all')}
            className={`w-full py-2 rounded-md ${priorityFilter === 'all' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
          >
            All
          </button>
          <button
            onClick={() => setPriorityFilter('High')}
            className={`w-full py-2 rounded-md ${priorityFilter === 'High' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
          >
            High
          </button>
          <button
            onClick={() => setPriorityFilter('Medium')}
            className={`w-full py-2 rounded-md ${priorityFilter === 'Medium' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
          >
            Medium
          </button>
          <button
            onClick={() => setPriorityFilter('Low')}
            className={`w-full py-2 rounded-md ${priorityFilter === 'Low' ? 'bg-white text-pink-500' : 'bg-pink-500'}`}
          >
            Low
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
