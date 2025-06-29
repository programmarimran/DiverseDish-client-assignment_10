import { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import WishlistTable from "./WishlistTable";

import Swal from "sweetalert2";

const WishListRecipes = () => {
  const { user } = use(AuthContext);
  const [recipes, setRecipes] = useState([]);

  //fetch wishlist recipes
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_serverBaseURL}/wishlist/recipes?email=${
        user.email
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  const handleDeleteWishlist = (item) => {
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
        fetch(
          `${import.meta.env.VITE_serverBaseURL}/wishlist/recipes/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("wihtl dleeted successfuy", data);
            if (data.deletedCount > 0) {
              const remainingWishlistRecipe = recipes.filter(
                (recipe) => recipe._id !== item._id
              );
              setRecipes(remainingWishlistRecipe);
            }
          })
          .catch((error) => {
            console.error("Error deleting wishlist item:", error);
          });

        Swal.fire({
          title: "Deleted!",
          text: `${item.recipe.title} remove the wishlist`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-4">
      <WishlistTable
        handleDeleteWishlist={handleDeleteWishlist}
        recipes={recipes}
      />
    </div>
  );
};
export default WishListRecipes;
