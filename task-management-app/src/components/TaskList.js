"use client";

export default function TaskList({ tasks, onDeleteTask, onToggleTask }) {
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
            <span
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
              onClick={() => onToggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
