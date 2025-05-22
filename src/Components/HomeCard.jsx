import { use } from "react";
import { FaUser } from "react-icons/fa";
import ProductContext from "../contexts/ProductContext";

const HomeCard = ({ recipe }) => {
const {darkIstrue}=use(ProductContext)
  return (
    <div className="bg-linear-to-br from-[#70e00050] to-[#4ade8090] mx-auto w-full h-full shadow-2xl rounded-2xl">
      <img
        src={recipe?.image}
        alt={recipe?.title}
        className="w-11/12 mx-auto mt-4 shadow-2xl h-48 object-cover rounded-t-2xl"
      />

      <div className="p-4 space-y-2  border-t-2 border-gray-200 rounded-b-2xl">
        <div className="w-11/12 space-y-4 mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{recipe?.title}</h2>
            <div className="bg-amber-400 text-sm p-1 rounded-xl">
              {recipe?.cuisineType}
            </div>
          </div>

          <p className="text-gray-600 font-bold italic text-sm">
            {recipe?.instructions}
          </p>

          <hr className="border-2 border-dashed border-gray-500" />

          <ul className={`text-sm  mt-2   ${darkIstrue?"text-gray-200 drop-shadow-md":"text-gray-700"}`}>
            {recipe?.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="border-2 border-dashed border-gray-500" />

          <div className="flex items-center justify-between mt-3">
            <div className="text-sm text-gray-600">
              ⏱ Prep Time: {recipe?.preparationTime} min
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-blue-600" />
              <span className="text-sm">{recipe?.user.name}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <div className="text-yellow-500 font-bold">
              ❤️ {recipe?.likeCount} Likes
            </div>
            <div className="text-gray-500">{recipe?.categories.join(", ")}</div>
          </div>

          <button className="btn btn-primary btn-sm w-full mt-4">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
