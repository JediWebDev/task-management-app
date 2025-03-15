import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: newTask, completed: false }],
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  toggleTaskCompletion: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),
  editTask: (taskId, newText) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      ),
    })),
  reorderTasks: (startIndex, endIndex) =>
    set((state) => {
      const updatedTasks = [...state.tasks];
      const [movedTask] = updatedTasks.splice(startIndex, 1);
      updatedTasks.splice(endIndex, 0, movedTask);
      return { tasks: updatedTasks };
    }),
}));

export default useTaskStore;
