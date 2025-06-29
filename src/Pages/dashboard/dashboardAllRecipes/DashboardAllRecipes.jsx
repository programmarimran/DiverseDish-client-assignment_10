import { useEffect, useState } from "react";
import DashboardAllRecipesTable from "./DashboardAllRecipesTable";

const DashboardAllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_serverBaseURL}/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="p-4">
      <DashboardAllRecipesTable recipes={recipes} />
    </div>
  );
};
export default DashboardAllRecipes;
