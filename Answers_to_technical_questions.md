# Answers to Technical Questions

### 1. How long did you spend on the coding test?

I spent approximately **8 hours** on the coding test. This included time for planning, coding, testing, and refining the features and functionality of the task management application.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

In React 18, one of the most useful additions was the introduction of **Automatic Batching** for state updates. This feature allows React to batch multiple state updates in one render, optimizing performance. Previously, state updates within asynchronous functions were not automatically batched, resulting in multiple re-renders. Now, React batches them by default.

Here's a code snippet illustrating how this feature is helpful:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleClick() {
    setCount1((prev) => prev + 1);
    setCount2((prev) => prev + 1);
  }

  return (
    <div>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <button onClick={handleClick}>Increment Both</button>
    </div>
  );
}



### 3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production, I would typically follow these steps:

Monitor and Log: Use monitoring tools like New Relic, Datadog, or Sentry to log performance metrics and identify slow requests or components. I’d look for specific patterns or anomalies in CPU usage, memory usage, and response times.
Profiling: Use browser developer tools (e.g., Chrome DevTools) to profile the application and identify slow-performing components. Tools like the React Profiler are useful to check component re-rendering frequency.
Analyze Network Requests: Look at network requests to ensure no unnecessary or redundant API calls are being made, and verify if any requests are taking longer than expected.
Optimize Code: Identify expensive computations and optimize them. Techniques like memoization with React.memo or useMemo, lazy loading, and code-splitting can help.
Database Optimization: Check if database queries are optimized, using indexing, caching, or pagination if applicable.
Load Testing: Simulate user load to understand how the application behaves under stress and identify bottlenecks.
Yes, I have had to address performance issues in production. In one instance, there was a page load delay due to large, unoptimized images. I resolved it by implementing lazy loading and serving images in modern formats, which significantly improved the load time.



### 4. If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, I would consider adding the following features and improvements:

User Authentication: Implement authentication so that users can have personalized task lists, with options to log in via Google or Facebook.
Real-time Syncing: Use WebSockets or a library like Firebase to enable real-time updates for task changes across multiple devices.
Prioritization and Due Dates: Add a priority level and due dates to tasks, with options to filter tasks by priority and sort by due date.
Notifications and Reminders: Implement reminders and notifications (push notifications on mobile or desktop) for upcoming tasks or due dates.
Offline Mode: Add offline functionality so users can still manage their tasks without internet access, and sync changes when they reconnect.
Subtasks and Comments: Allow users to create subtasks for more complex tasks and add comments for collaboration.
Responsive Design and Accessibility: Improve the UI for mobile devices and enhance accessibility for screen readers to ensure inclusivity.
```
