# Task Management Application

This project is a Task Management Application built with React. The app allows users to add, edit, delete, and view tasks in a simple and organized manner. This README provides an overview of the project, instructions on setting up the project locally, the project structure, and assumptions made during the development process.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Assumptions](#assumptions)

## Overview

The Task Management Application is designed to help users manage their tasks efficiently. Users can create new tasks, mark tasks as complete, edit task details, and delete tasks they no longer need. This application is built with React and styled using CSS. It follows a modular structure, making it easy to scale and maintain.

## Features

- **Add Tasks**: Users can add new tasks with a title and description.
- **Edit Tasks**: Users can edit existing tasks to update information.
- **Delete Tasks**: Users can remove tasks they no longer need.
- **Task Status**: Mark tasks as complete or incomplete.
- **Responsive Design**: The application is responsive and works well on various screen sizes.

## Project Structure

Here's an overview of the project structure:

```plaintext
TASK MGMT3/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── TaskForm.js
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   ├── TaskModal.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
|__ Answer_to_teachnical_questions.md


## Setup Instructions
Prerequisites
    Node.js (version 14 or higher recommended)
    Yarn or npm


Steps to Run the Project
   Clone the repository: git clone https://github.com/your-username/task-management-app.git
   cd task-management-app


Install dependencies:
    yarn install
    or if you prefer npm:
    npm install


Run the application:
    yarn start
    or with npm:
    npm start


Open your browser and go to http://localhost:3000 to see the app in action.

Running Tests
To run tests, if tests are included:
    yarn test
    or with npm:
    npm test


## Assumptions
Single User: The application is assumed to be a single-user application, meaning there is no authentication or user management.
Task Data: Task data is stored in the application's state. For production, a backend or database would be necessary to persist task data.
Minimalist Design: The design is kept simple for this version. Additional styling and UI enhancements could be added with more time.
Task Properties: Each task only includes a title, description, and status (complete/incomplete). Additional features like due dates, priority levels, or categories could be added as enhancements.
Real-time Syncing: Currently, there is no real-time syncing between clients. If real-time functionality is required, WebSockets or a real-time database could be used.
Future Enhancements
If time allows, the following features could be considered:

User Authentication: Enable multiple users with individual task lists.
Task Prioritization: Allow users to set priority levels for tasks.
Due Dates and Reminders: Add due dates and reminder notifications for tasks.
Offline Mode: Allow the app to work offline and sync when reconnected.


### Future Enhancements
With additional time, the following features could be considered:

User Authentication: Enable multiple users with individual task lists.
Task Prioritization: Allow users to set priority levels for tasks.
Due Dates and Reminders: Add due dates and notifications for tasks.
Offline Mode: Allow offline functionality with syncing when reconnected