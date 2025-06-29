import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import MyRecipesTable from "./MyRecipesTable";
import UpdateRacipeModal from "../../../components/UpdateRacipeModal";

const DashboardMyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_serverBaseURL}/my-recipes?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyRecipes(data);
      });
  }, []);
  console.log(myRecipes)
  return (
    <div className="p-4">
      <MyRecipesTable setMyRecipes={setMyRecipes} myRecipes={myRecipes} />
      <UpdateRacipeModal myRecipes={myRecipes} setMyRecipes={setMyRecipes}></UpdateRacipeModal>
    </div>
  );
};

export default DashboardMyRecipes;
