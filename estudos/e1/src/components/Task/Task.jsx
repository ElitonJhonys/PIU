import { useState } from "react";
import "../Task/Task.css"

export function Task({ task, onToggle }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
    onToggle(task.id);
  };

  return (
    <div 
      className={`task ${isCompleted ? 'completed' : ''}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        margin: "5px",
        border: "1px solid var(--border-color)",
        borderRadius: "4px"
      }}
    >
      <img 
        src={`/src/assets/${task.image}`} 
        alt={task.text} 
        style={{
          width: "60px",
          objectFit: "cover",
          opacity: isCompleted ? "0.5" : "1"
        }}
      />
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          color: isCompleted ? "#888" : "var(--color)",
      }}
    >
      {task.text}</span>
      <button onClick={handleToggle} className="handleToggle" style={{ 
        marginLeft: "auto",
        backgroundColor: isCompleted ? "red" : "green",
      }}>
        {isCompleted ? "Desmarcar" : "Concluir"}
      </button>
    </div>
  );
}