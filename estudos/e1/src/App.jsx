import { useState } from "react";
import { tasks as initialTasks } from "./data/tasks";
import { Task } from "./components/Task";
import { TaskList } from "./components/TaskList";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app-container">
      <ThemeToggle />
      <h1>Minha To-Do List</h1>
      
      <TaskList title="Tarefas">
        {tasks.map(task => (
          <Task key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </TaskList>
    </div>
  );
}