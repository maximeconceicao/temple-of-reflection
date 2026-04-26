import { useState } from "react";

export function useThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const toggleTheme = () => {
    const newIsDark = !isDark;
    document.documentElement.classList.toggle("dark", newIsDark);
    setIsDark(newIsDark);
  };

  return { isDark, toggleTheme };
}
