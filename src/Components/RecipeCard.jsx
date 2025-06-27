import React, { use } from "react";
import ProductContext from "../contexts/ProductContext";
import { Link } from "react-router";
import { AiFillLike } from "react-icons/ai";

const RecipeCard = ({ recipe }) => {
  const { darkIstrue } = use(ProductContext);
  return (
    <div  data-aos="fade-up"
     data-aos-duration="2000"
      key={recipe._id}
      className={`${
        darkIstrue
          ? "bg-green-200 border-2  hover:border-4 border-gray-300 text-gray-800"
          : "bg-green-200 border-2  hover:border-4 border-gray-300 text-gray-800"
      } shadow-2xl rounded-xl  overflow-hidden flex flex-col justify-between`}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-40 pt-1 px-1 rounded-t-2xl w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold mb-1">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          Cuisine: {recipe.cuisineType}
        </p>
        <div className=" flex justify-between">
          <Link
            to={`/recipe-details/${recipe._id}`}
            className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            See Details
          </Link>
          <p className=" bg-blue-200 flex items-center border border-blue-400 text-blue-700 rounded-2xl px-2">
            <AiFillLike className=" text-blue-500 shadow-2xl" />:{" "}
            {recipe.likeCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
