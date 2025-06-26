import { } from "react";
import { FaUser } from "react-icons/fa";
import ProductContext from "../contexts/ProductContext";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router";

const HomeCard = ({ recipe }) => {
 
  return (
    <div
      className="mx-auto w-full shadow-2xl rounded-2xl min-h-[550px] flex flex-col 
                 bg-green-200 border-2 hover:border-4 border-gray-300 text-gray-800
                 dark:bg-green-700 dark:border-green-500 dark:text-white"
    >
      <img
        src={recipe?.image}
        alt={recipe?.title}
        className="w-11/12 mx-auto mt-4 shadow-2xl h-48 object-cover rounded-t-2xl"
      />

      <div className="p-4 rounded-b-2xl flex flex-col justify-between flex-grow">
        <div className="w-11/12 space-y-4 mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{recipe?.title}</h2>
            <div className="bg-amber-400 text-sm p-1 rounded-xl dark:bg-amber-600">
              {recipe?.cuisineType}
            </div>
          </div>

          <p className="font-bold italic text-sm">{recipe?.instructions}</p>

          <div className="flex items-center justify-between mt-3 text-sm">
            <div className="text-sm">
              ⏱ Prep Time: {recipe?.preparationTime} min
            </div>

            <div>{recipe?.categories.join(", ")}</div>
          </div>

          <hr className="border-2 border-dashed border-gray-500 dark:border-gray-400" />

          <div className="flex items-center justify-between text-sm mt-2">
            <div className="font-bold">
              <div className="flex items-center text-green-600 bg-green-200 border border-green-400 p-2 rounded-xl dark:bg-green-800 dark:text-green-300 dark:border-green-600">
                <AiFillLike />
                <span className="ml-1">: {recipe?.likeCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaUser className="text-blue-400 dark:text-blue-300" />
              <span className="text-sm">{recipe?.user.name}</span>
            </div>
          </div>
        </div>

        <Link to={`/recipe-details/${recipe?._id}`}>
          <button className="btn bg-blue-500 shadow-none border-none w-full text-white mt-4 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
