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
    <button
      onClick={() => setIsDark(!isDark)}
      className=" dark:bg-gray-200 bg-gray-800 text-black dark:text-white rounded-full w-8 h-8  desktop:w-10 desktop:h-10"
    >
      {isDark ? <LightMode /> : <DarkMode />}
    </button>
  );
}
