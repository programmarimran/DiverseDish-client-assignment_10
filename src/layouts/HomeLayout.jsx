import React from "react";
import { useLoaderData } from "react-router";
import HomeCard from "../components/HomeCard";

const HomeLayout = () => {
  const recipes = useLoaderData();

  return (
    <div>
      <h1>this is home apge</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <HomeCard key={recipe._id} recipe={recipe}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
