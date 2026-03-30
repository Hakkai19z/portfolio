import { useApp } from "../context/AppContext";

const COLORS = [
  "#6366f1", "#8b5cf6", "#a855f7",
  "#ec4899", "#ef4444", "#f97316",
  "#22d3ee", "#10b981", "#3b82f6",
];

export default function ColorPicker() {
  const { accentColor, changeColor } = useApp();

  return (
    <div className="color-picker">
      {COLORS.map((c) => (
        <div
          key={c}
          className={`color-swatch${accentColor === c ? " active" : ""}`}
          style={{ background: c }}
          onClick={() => changeColor(c)}
          title={c}
        />
      ))}
    </div>
  );
}
