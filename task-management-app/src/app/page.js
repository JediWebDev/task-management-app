"use client";

import { useState, useEffect } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // Default filter is "all"

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  // ✅ Add missing reorder function
  const reorderTasks = (startIndex, endIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(startIndex, 1);
    updatedTasks.splice(endIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
  });

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <TaskInput onAddTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTaskCompletion}
        onEditTask={editTask}
        onReorderTasks={reorderTasks} // ✅ Pass reorder function
      />
    </div>
  );
}
