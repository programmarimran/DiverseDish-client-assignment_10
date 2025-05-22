import { use, useEffect, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import ProductContext from "../contexts/ProductContext";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const { setDarkIStrue, darkIstrue } = use(ProductContext);

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

  const hadleHandleToggleButton = () => {
    toggleTheme();
    setDarkIStrue(!darkIstrue);
  };
  return (
    <button onClick={hadleHandleToggleButton} className="">
      {theme === "light" ? <FaToggleOff size={50} /> : <FaToggleOn size={50} />}
    </button>
  );
};

export default ThemeToggle;
