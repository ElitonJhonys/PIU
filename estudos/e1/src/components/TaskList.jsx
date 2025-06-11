export function TaskList({ children, title }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}