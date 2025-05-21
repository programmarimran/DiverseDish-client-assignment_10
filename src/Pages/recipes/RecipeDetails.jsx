import React from "react";
import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";
import {} from "react-toastify";
import Swal from "sweetalert2";

const RecipeDetails = () => {
  const recipe = useLoaderData();

  return (
    <div className="pt-8 pb-24 space-y-6">
      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl  p-4 rounded-lg text-center">
        <h1 className=" text-2xl font-extrabold">
          <span className=" bg-blue-200 border border-blue-400 text-blue-700 rounded-lg px-2">
            {recipe.likeCount}
          </span>{" "}
          People interested in this recipe{" "}
        </h1>
        <h1 className="text-2xl font-bold text-gray-600">{recipe.title}</h1>
      </div>

      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl  rounded-lg p-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold">{recipe?.title}</h2>
          <p>
            <strong>Origin:</strong> {recipe?.cuisineType}
          </p>
          <p>
            <strong>Cooking Time:</strong> {recipe?.preparationTime} mins
          </p>
          <p>
            <strong>Ingredients:</strong>{" "}
            {recipe.ingredients?.slice(0, 3).join(", ")}
          </p>
          <p title={recipe?.instructions}>
            <strong>Instructions:</strong> {recipe.instructions?.slice(0, 80)}
            ...
          </p>
          <button className="btn btn-success shadow-2xl w-full">Like</button>
        </div>
      </div>

      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl  p-5 rounded-lg">
        <button className="btn btn-success w-full">Go Back</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
