import { toast } from "react-hot-toast";

export function showToast(message, type = "success", options = {}) {
  const bgColors = {
    success: "#fff",
    error: "#ffe6e6",
  };

  const textColors = {
    success: "#000",
    error: "#a60000",
  };

  const borderColors = {
    success: "#e0e0e0",
    error: "#ff4d4f",
  };

  const icons = {
    success: "✅",
    error: "❌",
  };

  toast.custom(
    (t) => (
      <div
        onClick={() => toast.dismiss(t.id)}
        style={{
          background: bgColors[type] || "#fff",
          color: textColors[type] || "#000",
          padding: "12px 20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          cursor: "pointer",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          border: `1px solid ${borderColors[type] || "#e0e0e0"}`,
        }}
      >
        <span>{options.icon || icons[type]}</span>
        <span>{message}</span>
      </div>
    ),
    {
      duration: 4000,
      ...options,
    }
  );
}
