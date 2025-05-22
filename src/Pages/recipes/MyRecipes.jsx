import React, { use } from 'react';
import AuthContext from '../../contexts/AuthContext';
import ProductContext from '../../contexts/ProductContext';
import HomeCard from '../../components/HomeCard';

const MyRecipes = () => {
    const {user}=use(AuthContext)
    const {recipes}=use(ProductContext)
    const userEmail=user?.email;
    console.log(recipes)
   const myRecipes=recipes.filter(re=>re.user.email===userEmail)
   console.log(myRecipes)
    return (
        <div>
      <h1 className=" text-2xl text-center font-extrabold py-12 ">Top Liked Recipes</h1>
      <div className=" pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myRecipes.map((recipe) => (
          <HomeCard key={recipe._id} recipe={recipe}></HomeCard>
        ))}
      </div>
    </div>
    );
};

export default MyRecipes;