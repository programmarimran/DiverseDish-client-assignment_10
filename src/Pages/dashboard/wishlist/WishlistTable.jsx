import { FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const WishlistTable = ({ recipes,handleDeleteWishlist}) => {
  return (
    <div className="overflow-x-auto p-4 bg-base-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">My Wishlist</h2>
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold text-base-content">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Cuisine</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((item, idx) => (
            <tr key={item?._id || idx}>
              <td>{idx + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.recipe.image} alt={item.recipe.title} />
                  </div>
                </div>
              </td>
              <td className="font-medium">{item.recipe.title}</td>
              <td>{item.recipe.cuisineType || "N/A"}</td>
              <td>{item.recipe.preparationTime} min</td>
              <td className="space-x-2">
                <Link to={`/recipe-details/${item.recipe._id}`}>
                <button
              
                  className="btn btn-sm btn-primary gap-2"
                  title="View Details"
                >
                  <FaEye /> View
                </button>
                </Link>
                <button
                 onClick={()=>handleDeleteWishlist(item)}
                  className="btn btn-sm btn-error gap-2"
                  title="Delete from Wishlist"
                >
                  <FaTrashAlt /> Delete
                </button>
              </td>
            </tr>
          ))}
          {(!recipes || recipes.length === 0) && (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No items in your wishlist yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistTable;
