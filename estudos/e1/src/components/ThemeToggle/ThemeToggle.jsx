import { useState, useEffect } from "react";
import "../ThemeToggle/ThemeToggle.css"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Aplica as classes ao body
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}