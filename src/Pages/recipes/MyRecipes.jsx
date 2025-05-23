import React, { use } from "react";
import AuthContext from "../../contexts/AuthContext";
import ProductContext from "../../contexts/ProductContext";
import MyRecipeCard from "../../components/MyRecipeCard";

const MyRecipes = () => {
  const { user } = use(AuthContext);
  const { recipes } = use(ProductContext);
  const userEmail = user?.email;
  // console.log(recipes);
  const myRecipes = recipes.filter((re) => re.user.email === userEmail);
  // console.log(myRecipes);
  return (
    <div>
     
      <h1 className="text-2xl text-center font-extrabold py-12">
        My{" "}
        <span className="text-green-600 bg-green-200 border border-green-400 px-2 py-1 rounded-full">
          {myRecipes.length}
        </span>{" "}
        Recipes found!
      </h1>
      <div className={`pb-12 grid ${myRecipes.length<2?"grid-cols-1 max-w-xl mx-auto":myRecipes.length<3?" grid-cols-1 md:grid-cols-2 gap-6 ":myRecipes.length>=3?" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":""} `}>
        {
          myRecipes.map(recipe=><MyRecipeCard key={recipe?._id} recipe={recipe}></MyRecipeCard>)
        }
      </div>
      
    </div>
  );
};

export default MyRecipes;
