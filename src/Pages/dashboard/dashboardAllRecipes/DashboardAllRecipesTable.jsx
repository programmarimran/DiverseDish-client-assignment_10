import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router";

const DashboardAllRecipesTable = ({ recipes }) => {
  return (
    <div className="overflow-x-auto bg-base-100 p-4 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">All Recipes</h2>

      <table className="table table-zebra w-full">
        {/* Table Head */}
        <thead className="bg-base-200 text-base font-semibold text-base-content">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Chef</th>
            <th>Cuisine</th>
            <th>Likes</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {recipes?.map((recipe, index) => (
            <tr key={recipe._id?.$oid || index}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                </div>
              </td>
              <td className="font-medium">{recipe.title}</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={recipe.user?.photo} alt={recipe.user?.name} />
                    </div>
                  </div>
                  <span>{recipe.user?.name}</span>
                </div>
              </td>
              <td>{recipe.cuisineType || "N/A"}</td>
              <td className="flex items-center gap-1">
                <FaRegHeart className="text-red-500" />
                {recipe.likeCount?.$numberInt || 0}
              </td>
              <td>{recipe.preparationTime} min</td>
              <td>
                <Link to={`/recipe-details/${recipe._id}`}>
                  <button
                    className="btn btn-sm btn-primary gap-2"
                    title="View Details"
                  >
                    <FaEye /> View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardAllRecipesTable;
