import { create } from "zustand";
import { useEffect } from "react";

const useTaskStore = create((set, get) => ({
  tasks: [],

  addTask: (newTask) => {
    const updatedTasks = [...get().tasks, { id: Date.now(), text: newTask, completed: false }];
    set({ tasks: updatedTasks });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Save to localStorage
  },

  deleteTask: (taskId) => {
    const updatedTasks = get().tasks.filter((task) => task.id !== taskId);
    set({ tasks: updatedTasks });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Save to localStorage
  },

  toggleTaskCompletion: (taskId) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    set({ tasks: updatedTasks });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Save to localStorage
  },

  editTask: (taskId, newText) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    set({ tasks: updatedTasks });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Save to localStorage
  },

  reorderTasks: (startIndex, endIndex) => {
    const updatedTasks = [...get().tasks];
    const [movedTask] = updatedTasks.splice(startIndex, 1);
    updatedTasks.splice(endIndex, 0, movedTask);
    set({ tasks: updatedTasks });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Save to localStorage
  },

  loadTasks: () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      set({ tasks: JSON.parse(savedTasks) });
    }
  },
}));

// ✅ Custom Hook to Load Tasks When Component Mounts
export function useTaskStoreWithPersistence() {
  const loadTasks = useTaskStore((state) => state.loadTasks);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return useTaskStore();
}

export default useTaskStore;
