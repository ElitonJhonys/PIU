import { useState } from "react";

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
        textDecoration: isCompleted ? "line-through" : "none",
        color: isCompleted ? "#888" : "var(--color)",
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
          width: "30px",
          height: "30px",
          objectFit: "cover",
          opacity: isCompleted ? "0.5" : "1"
        }}
      />
      <span>{task.text}</span>
      <button onClick={handleToggle} style={{ marginLeft: "auto" }}>
        {isCompleted ? "Desmarcar" : "Concluir"}
      </button>
    </div>
  );
}