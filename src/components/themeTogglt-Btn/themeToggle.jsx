import React, { useEffect, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div>
      <div
        onClick={() => setIsDark(!isDark)}
        className="w-14 p-1 cursor-pointer border border-black dark:border-white dark:text-white rounded-full transition-colors ease-in-out duration-800 "
      >
        <div className="translate-x-0 dark:translate-x-5 transition-all ease-linear duration-200">
          {isDark ? <DarkMode /> : <LightMode />}
        </div>
      </div>
    </div>
  );
}
