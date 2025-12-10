import React, { useState, useEffect } from "react";
import AddTask from "./assets/components/AddTask";
import TaskList from "./assets/components/TaskList";
import "./App.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className="app p-6 max-w-md mx-auto rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        ToDo App
      </h1>
      <AddTask onAdd={addTask} />

      <div className="filters flex gap-2 mb-6 justify-center">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full font-medium ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          } transition-all duration-300`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-full font-medium ${
            filter === "completed"
              ? "bg-green-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          } transition-all duration-300`}
        >
          Completadas
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-full font-medium ${
            filter === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          } transition-all duration-300`}
        >
          Pendientes
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
