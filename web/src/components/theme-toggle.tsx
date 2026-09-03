"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: "system" as const, label: "System" },
    { value: "light" as const, label: "Light" },
    { value: "dark" as const, label: "Dark" },
  ];

  return (
    <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: "var(--bg)" }}>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={`
            px-3 py-1 text-xs rounded-md transition-colors
            ${theme === opt.value ? "font-semibold shadow-sm" : ""}
          `}
          style={{
            backgroundColor: theme === opt.value ? "var(--bg-card)" : "transparent",
            color: theme === opt.value ? "var(--text-primary)" : "var(--text-tertiary)",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
