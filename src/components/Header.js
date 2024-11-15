import React, { useState } from 'react';

const Header = ({ setIsModalOpen }) => {
  return (
    <header className="bg-pink-500 p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">Task Manager</h1>
      <button
        className="bg-white text-pink-500 px-4 py-2 rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        New Task
      </button>
    </header>
  );
};

export default Header;

