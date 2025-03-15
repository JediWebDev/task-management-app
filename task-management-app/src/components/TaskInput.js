"use client";

import { useState } from "react";

export default function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    onAddTask(task); // Send task to parent component
    setTask(""); // Clear input field after adding
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded w-full"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </div>
  );
}
