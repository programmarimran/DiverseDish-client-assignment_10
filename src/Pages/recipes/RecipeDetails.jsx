import React from "react";
import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";
import {} from "react-toastify";
import Swal from "sweetalert2";

const RecipeDetails = () => {
    // const id=useParams()
  const recipe = useLoaderData();
  const handleLikeButton=()=>{
    const updateLike={likeCount:recipe?.likeCount}
    //MongoDb Added
    fetch(`https://diverse-dish-server.vercel.app/recipes/${recipe._id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateLike)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("After Updated likeCount",data)
    })

  }

  return (
    <div className="pt-8 pb-24 space-y-6">
      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl  p-4 rounded-lg text-center">
        <div className=" flex flex-col justify-center items-center text-2xl font-extrabold">
          <h1 className=" bg-blue-200 border border-blue-400 text-blue-700 rounded-lg px-2">
            {recipe.likeCount}
          </h1>
         <h1> People interested in this recipe</h1>
        </div>
        <h1 className=" text-lg md:text-2xl font-bold text-gray-600">{recipe.title}</h1>
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
            {recipe?.ingredients?.slice(0, 4).join(",")}
          </p>
          <p title={recipe?.instructions}>
            <strong>Instructions:</strong> {recipe?.instructions?.slice(0, 80)}
            ...
          </p>
          <button onClick={handleLikeButton} className="btn btn-success shadow-2xl w-full">Like</button>
        </div>
      </div>

      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl  p-5 rounded-lg">
        <button className="btn btn-success w-full">Go Back</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
