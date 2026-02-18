import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const modes = {
  light: {
    label: "Switch to dark mode",
    icon: <FiMoon aria-hidden="true" />
  },
  dark: {
    label: "Switch to light mode",
    icon: <FiSun aria-hidden="true" />
  }
};

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const MotionSpan = motion.span;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-slate-900 backdrop-blur transition hover:scale-105 dark:text-slate-100"
      aria-label={modes[theme].label}
    >
      <AnimatePresence mode="wait" initial={false}>
        <MotionSpan
          key={theme}
          initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 25, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {modes[theme].icon}
        </MotionSpan>
      </AnimatePresence>
    </button>
  );
}
