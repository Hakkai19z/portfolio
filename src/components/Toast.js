import { useApp } from "../context/AppContext";

export default function Toast() {
  const { toast } = useApp();
  if (!toast) return null;

  return (
    <div className={`toast toast--${toast.type}`} role="alert">
      <span className="toast__icon">{toast.type === "success" ? "✓" : "✕"}</span>
      <span>{toast.msg}</span>
    </div>
  );
}
