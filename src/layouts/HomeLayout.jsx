// import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import HomeCard from "../components/HomeCard";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/UserReview";

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
     <section>
       <h1 className=" text-2xl text-center font-extrabold py-12 ">Top Liked Recipes</h1>
      <div className=" pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <HomeCard key={recipe._id} recipe={recipe}></HomeCard>
        ))}
      </div>
      <Link to={"/all-recipes"}>
      <button className=" btn hover:border-2 text-gray-800 bg-green-200 mx-auto flex justify-center">
        View All Recipes
      </button>
      </Link>
     </section>
     <section className=" py-12">
      <WhyChooseUs></WhyChooseUs>
     </section>
     <section className=" py-12">
      <CustomerReviews></CustomerReviews>
     </section>
    </div>
  );
};

export default HomeLayout;
