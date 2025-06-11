import { useState } from "react";
import "../ThemeToggle/ThemeToggle.css"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    // Modifica o body DIRETAMENTE no clique (sem useEffect)
    document.body.classList.toggle("dark-theme", !isDark);
    setIsDark(!isDark); // Atualiza o estado
  };
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}