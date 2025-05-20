import { useEffect, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="">
     {theme === "light" ? <FaToggleOff size={50} /> : <FaToggleOn size={50} />}
    </button>
  );
};

export default ThemeToggle;
