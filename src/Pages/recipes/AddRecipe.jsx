import React from "react";
import Swal from "sweetalert2";

const AddRecipe = () => {
  const handleAddRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const recipeData = Object.fromEntries(formData.entries());

    const ingredientsData = form.ingredients.value;
    const arryingredients = ingredientsData
      .split(",")
      .map((item) => item.trim());
    recipeData.ingredients = arryingredients;

    // Like count should be number and start from 0
    recipeData.likeCount = parseInt(recipeData.likeCount);
    recipeData.preparationTime = parseInt(recipeData.preparationTime);

    // Convert checkbox values to array
    recipeData.categories = formData.getAll("categories");

    console.log(recipeData);

    // POST to server
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Recipe Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="py-12">
      <div className="text-center space-y-4 p-6">
        <h1 className="text-2xl font-bold">Add New Recipe</h1>
        <p className="text-base">
          Fill out the form to add a delicious new recipe to the collection.
        </p>
      </div>
      {/* bg-base-300 */}
      <form onSubmit={handleAddRecipe}>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
          <fieldset className="fieldset bg-base-300  border-base-300 rounded-box border p-4">
            <label className="label">Image URL</label>
            <input
              type="text"
              className="input bg-[#70e00020] w-full"
              name="image"
              placeholder="Enter image URL"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              className="input bg-[#70e00020] w-full"
              name="title"
              placeholder="Enter recipe title"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Ingredients</label>
            <input
              type="text"
              className="input bg-[#70e00020] w-full"
              name="ingredients"
              placeholder="List ingredients"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Instructions</label>
            <input
              type="text"
              className="input bg-[#70e00020] w-full"
              name="instructions"
              placeholder="Write instructions"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Cuisine Type</label>
            <select
              name="cuisine"
              className="select bg-[#70e00020] select-bordered w-full"
            >
              <option disabled selected>
                Select cuisine
              </option>
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Others</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Preparation Time (minutes)</label>
            <input
              type="number"
              className="input bg-[#70e00020] w-full"
              name="preparationTime"
              placeholder="Time in minutes"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset my-6 bg-base-300 border-base-300 rounded-box border p-4">
          <label className="label">Categories</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label key={cat} className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox bg-[#70e00020] checkbox-primary mr-2"
                  name="categories"
                  value={cat}
                />
                <span className="label-text">{cat}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="fieldset mb-6 bg-base-300 border-base-300 rounded-box border p-4">
          <label className="label">Like Count (default 0)</label>
          <input
            type="number"
            className="input bg-[#70e00020]  w-full"
            name="likeCount"
            value={0}
            readOnly
          />
        </fieldset>

        <button
          type="submit"
          className="btn bg-[#70e00080] hover:bg-[#70e000] w-full"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
