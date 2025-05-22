import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AiFillLike } from "react-icons/ai";
import AuthContext from "../../contexts/AuthContext";

const RecipeDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const recipe = useLoaderData();
  const [likeCount, setLikeCount] = useState(recipe?.likeCount);
  const handleGoBack = () => {
    navigate(-1);
  };

  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    if (user?.email === recipe?.user?.email) {
      setCurrentUser(true);
    }
  }, []);
  const handleLikeButton = () => {
    const updateLike = { likeCount: recipe?.likeCount };
    //MongoDb Added
    fetch(`https://diverse-dish-server.vercel.app/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateLike),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After Updated likeCount", data);
        if (user?.email === recipe?.user?.email) {
          setCurrentUser(true);
          return;
        } else if (data?.modifiedCount > 0) {
          setLikeCount(likeCount + 1);
          toast.success("Like Success");
        }
      });
  };

  return (
    <div className="pt-8 pb-24 space-y-6">
      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl  p-4 rounded-lg text-center">
        <div className=" flex flex-col justify-center items-center text-2xl font-extrabold">
          <h1 className=" bg-blue-200 border border-blue-400 text-blue-700 rounded-lg px-2">
            {likeCount}
          </h1>
          <h1> People interested in this recipe</h1>
        </div>
        <h1 className=" text-lg md:text-2xl font-bold text-gray-600">
          {recipe.title}
        </h1>
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
          <h3 className="text-lg font-semibold">Author: {recipe?.user.name}</h3>
          <button
            onClick={handleLikeButton}
            className={`btn btn-success ${
              currentUser ? "cursor-not-allowed" : ""
            } text-xl shadow-2xl w-full`}
          >
            <AiFillLike size={30} className=" text-blue-500 shadow-2xl" /> Like
          </button>
        </div>
      </div>

      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl  p-5 rounded-lg">
        <button onClick={handleGoBack} className="btn btn-success w-full">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
