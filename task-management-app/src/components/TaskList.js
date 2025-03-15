"use client";

import { useState } from "react";

export default function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditText(task.text);
  };

  const handleEdit = () => {
    if (editText.trim() === "") return;
    onEditTask(editingTaskId, editText);
    setEditingTaskId(null);
    setEditText("");
  };

  return (
    <ul className="mt-4 space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border rounded bg-white"
          >
            {editingTaskId === task.id ? (
              <input
                type="text"
                className="border border-gray-300 p-1 rounded w-full"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleEdit()} // Save when Enter is pressed
              />
            ) : (
              <span
                className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
                onClick={() => onToggleTask(task.id)}
              >
                {task.text}
              </span>
            )}

            <div className="flex gap-2">
              {editingTaskId === task.id ? (
                <button
                  onClick={handleEdit}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(task)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => onDeleteTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
