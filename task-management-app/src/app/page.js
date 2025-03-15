"use client";

import { useState } from "react";
import TaskInput from "@/components/TaskInput";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };
  return (
    <div className="max-w-2xl mx-auto mt-6">
      <TaskInput onAddTask={addTask} />
    </div>
  );
}
