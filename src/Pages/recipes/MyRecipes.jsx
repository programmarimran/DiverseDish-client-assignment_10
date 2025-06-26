import React, { use, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import ProductContext from "../../contexts/ProductContext";
import MyRecipeCard from "../../components/MyRecipeCard";
import UpdateRacipeModal from "../../components/UpdateRacipeModal";
import { Helmet } from "react-helmet-async";

const MyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const { user } = use(AuthContext);
 
  useEffect(() => {
  fetch(`${import.meta.env.VITE_serverBaseURL}/my-recipes?email=${user.email}`)
  .then(res=>res.json())
  .then(data=>{
    setMyRecipes(data)
  })
  }, []);
  // console.log(myRecipes);
  let layoutClass =
    myRecipes.length === 2
      ? "flex justify-center gap-6 flex-wrap"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
  return (
    <div>
      <Helmet><title>DiverseDish ||My Recipes</title></Helmet>
      <h1 className="text-2xl text-center font-extrabold py-12">
        My{" "}
        <span className="text-green-600 bg-green-200 border border-green-400 px-2 py-1 rounded-full">
          {myRecipes.length}
        </span>{" "}
        Recipes found!
      </h1>
      <div className={`pb-12 ${layoutClass} `}>
        {myRecipes.map((recipe) => (
          <MyRecipeCard
            key={recipe?._id} 
            setMyRecipes={setMyRecipes}
            myRecipes={myRecipes}
            recipe={recipe}
          ></MyRecipeCard>
        ))}
        <UpdateRacipeModal></UpdateRacipeModal>
      </div>
    </div>
  );
};

export default MyRecipes;
