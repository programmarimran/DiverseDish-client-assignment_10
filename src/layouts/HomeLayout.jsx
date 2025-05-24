// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import HomeCard from "../components/HomeCard";
import Hero from "../components/Hero";

const HomeLayout = () => {
  // const [recipes,setRecipes]=useState([])
  // useEffect(()=>{
  //   fetch("https://diverse-dish-server.vercel.app/recipes/home")
  //   .then(res=>res.json())
  //   .then(data=>setRecipes(data))
  // },[])
  const recipes = useLoaderData();

  return (
    <div>
      <section className=" my-12">
        <Hero></Hero>
      </section>
      <h1 className=" text-2xl text-center font-extrabold py-12 ">Top Liked Recipes</h1>
      <div className=" pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <HomeCard key={recipe._id} recipe={recipe}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
