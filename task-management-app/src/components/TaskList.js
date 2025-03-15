"use client";

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Edit2, CheckCircle, Circle } from "lucide-react"; 

export default function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask, onReorderTasks }) {
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

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    onReorderTasks(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul
            className="mt-4 space-y-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <AnimatePresence>
              {tasks.length === 0 ? (
                <motion.p
                  key="no-tasks"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-500 dark:text-gray-400 text-center"
                >
                  No tasks added yet.
                </motion.p>
              ) : (
                tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <motion.li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex justify-between items-center p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm transition-all"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          {/* ✅ Toggle completion with an icon */}
                          <button onClick={() => onToggleTask(task.id)}>
                            {task.completed ? (
                              <CheckCircle className="text-green-500" size={20} />
                            ) : (
                              <Circle className="text-gray-400" size={20} />
                            )}
                          </button>

                          {editingTaskId === task.id ? (
                            <input
                              type="text"
                              className="border border-gray-300 dark:border-gray-600 p-1 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              onKeyDown={(e) => e.key === "Enter" && handleEdit()} // Save on Enter key
                            />
                          ) : (
                            <span
                              className={`cursor-pointer text-lg ${
                                task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""
                              }`}
                              onClick={() => onToggleTask(task.id)}
                            >
                              {task.text}
                            </span>
                          )}
                        </div>

                        <div className="flex gap-2">
                          {editingTaskId === task.id ? (
                            <button
                              onClick={handleEdit}
                              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => startEditing(task)}
                              className="text-yellow-500 hover:text-yellow-600 transition"
                            >
                              <Edit2 size={20} />
                            </button>
                          )}
                          <button
                            onClick={() => onDeleteTask(task.id)}
                            className="text-red-500 hover:text-red-600 transition"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </motion.li>
                    )}
                  </Draggable>
                ))
              )}
            </AnimatePresence>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}