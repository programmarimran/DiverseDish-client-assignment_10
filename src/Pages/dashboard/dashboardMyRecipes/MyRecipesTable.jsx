import { use } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import ProductContext from "../../../contexts/ProductContext";
import Swal from "sweetalert2";

const MyRecipesTable = ({ myRecipes, setMyRecipes }) => {
  const { setModalId } = use(ProductContext);
  const handleDeleteForDB = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_serverBaseURL}/recipes/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if (data?.deletedCount > 0) {
              const afterFilteredRecipes = myRecipes.filter(
                (recipe) => recipe._id !== _id
              );
              setMyRecipes(afterFilteredRecipes);
              
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Recipe has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto p-4 bg-base-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">My Recipes</h2>
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold text-base-content">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Time</th>
            <th>Cuisine</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myRecipes?.map((item, idx) => (
            <tr key={item._id?.$oid || idx}>
              <td>{idx + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              </td>
              <td className="font-medium">{item.title}</td>
              <td>{item.preparationTime} min</td>
              <td>{item.cuisineType || "N/A"}</td>
              <td className="flex gap-2">
                <Link to={`/recipe-details/${item._id}`}>
                  <button
                    className="btn btn-sm btn-primary gap-2"
                    title="View Details"
                  >
                    <FaEye /> View
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setModalId(item?._id);
                    document.getElementById("my_modal_1").showModal();
                  }}
                  className="btn btn-sm btn-warning"
                  title="Edit Recipe"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteForDB(item._id)}
                  className="btn btn-sm btn-error"
                  title="Delete Recipe"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
          {(!myRecipes || myRecipes.length === 0) && (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                You haven't added any recipes yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecipesTable;
