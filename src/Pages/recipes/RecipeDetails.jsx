import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AiFillLike } from "react-icons/ai";
import AuthContext from "../../contexts/AuthContext";
import ProductContext from "../../contexts/ProductContext";

const RecipeDetails = () => {
  const { user } = use(AuthContext);
  const { darkIstrue } = use(ProductContext);
  const navigate = useNavigate();
  const recipe = useLoaderData();
  const [likeCount, setLikeCount] = useState(recipe?.likeCount);
  const [currentUser, setCurrentUser] = useState(false);
  // const [wishlistRecipe, setWishlistRecipe] = useState({});
  const wishlistRecipe = {
    wishlist_user: {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    },
  };
  wishlistRecipe.recipe = recipe;
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (user?.email === recipe?.user?.email) {
      setCurrentUser(true);
      return;
    }
  }, [user, recipe]);

  const handleLikeButton = () => {
    const updateLike = { likeCount: recipe?.likeCount };

    fetch(`${import.meta.env.VITE_serverBaseURL}/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateLike),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("After Updated likeCount", data);
        if (currentUser) {
          return;
        } else if (user?.email === recipe?.user?.email) {
          setCurrentUser(true);
          return;
        } else if (data?.modifiedCount > 0) {
          setLikeCount(likeCount + 1);
          toast.success("Like Success");
        }
      });
  };
  const handleAddToWishlist = () => {
    // console.log(recipe);

    //wishlist database start
    fetch(`${import.meta.env.VITE_serverBaseURL}/wishlist/recipes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("after wishlisted ", data);
        if (data.insertedId) {
          toast.success("Your Recipe Add To Wishlist successfully!");
        } else if (data.message) {
          Swal.fire({
            icon: "warning",
            title: "Notice",
            text: data?.message,
            confirmButtonText: "OK",
          });
        }
      });
  };

  // console.log(wishlistRecipe)
  // Custom text colors for dark/light mode
  const textColor = darkIstrue ? "text-gray-100" : "text-gray-800";
  const subTextColor = darkIstrue ? "text-gray-200" : "text-gray-700";

  return (
    <div className="pt-8 pb-24 space-y-6">
      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl p-4 rounded-lg text-center">
        <div
          className={`flex flex-col justify-center items-center text-2xl font-extrabold ${textColor}`}
        >
          <h1 className="bg-blue-200 border border-blue-400 text-blue-700 rounded-lg px-2">
            {likeCount}
          </h1>
          <h1> People interested in this recipe</h1>
        </div>
      </div>

      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl rounded-lg p-4 flex flex-col md:flex-row gap-4">
        <div className="w-full h-full md:w-3/4">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className={`w-full  md:w-1/2 space-y-4 mb-4 ${textColor}`}>
            <h2 className="text-2xl font-bold">{recipe?.title}</h2>
            <p>
              <strong className="text-xl font-bold">Origin:</strong>{" "}
              <span className={subTextColor}>{recipe?.cuisineType}</span>
            </p>
            <p>
              <strong className="text-xl font-bold">Cooking Time:</strong>{" "}
              <span className={subTextColor}>
                {recipe?.preparationTime} mins
              </span>
            </p>
            <p>
              <strong className="text-xl font-bold">Ingredients:</strong>{" "}
              <span className={subTextColor}>
                {recipe?.ingredients?.slice(0, 4).join(", ")}
              </span>
            </p>
            <p title={recipe?.instructions}>
              <strong className="text-xl font-bold">Instructions:</strong>{" "}
              <span className={subTextColor}>{recipe?.instructions}</span>
            </p>
            <div className="flex flex-wrap md:flex-nowrap overflow-x-auto gap-2 py-2">
              {recipe.categories.map((cat, index) => (
                <button
                  className="text-green-600 bg-green-200 whitespace-nowrap rounded-lg px-3 py-1"
                  key={index}
                >
                  {cat}
                </button>
              ))}
            </div>
            <h3 className="text-xl font-bold">Author: {recipe?.user.name}</h3>
          </div>
          <div className="w-full flex gap-3 flex-col">
            <button
              className={`btn ${
                currentUser ? "cursor-not-allowed" : ""
              } text-xl shadow-2xl`}
              onClick={currentUser || handleLikeButton}
            >
              <AiFillLike size={30} className="text-blue-500 shadow-2xl" />
            </button>
            <button
              onClick={() => handleAddToWishlist()}
              className=" btn  btn-success"
            >
              Add to wishlistRecipe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl p-5 rounded-lg">
        <button onClick={handleGoBack} className="btn btn-success w-full">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
