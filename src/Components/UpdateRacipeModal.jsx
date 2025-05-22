import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const UpdateRacipeModal = ({ recipe }) => {
  const {
    title,
    preparationTime,
    likeCount,
    instructions,
    ingredients,
    image,
    cuisine,
    categories,
  } = recipe;
  const categoryArray = Array.isArray(categories)
  ? categories
  : categories?.split(",") || [];
  const [value, setValue] = useState(preparationTime);
  // const [error,setError]=useState("")
  const handleUpdateRacipe = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Trigger Button */}
      <label htmlFor="add-recipe-modal">
        <div className="p-2 rounded-full bg-green-300 hover:bg-green-400 cursor-pointer transition-all duration-300">
          <FaEdit size={24} className="text-green-900 hover:text-green-950" />
        </div>
      </label>

      {/* Modal */}
      <input type="checkbox" id="add-recipe-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-4xl w-full">
          <h3 className="font-bold text-xl text-center mb-4">Update Recipe</h3>

          <form onSubmit={handleUpdateRacipe}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Image URL</label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  required
                  placeholder="Enter image URL"
                  className="input bg-[#70e00020] w-full"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  required
                  placeholder="Enter recipe title"
                  className="input bg-[#70e00020] w-full"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Ingredients</label>
                <input
                  type="text"
                  name="ingredients"
                  defaultValue={ingredients}
                  required
                  placeholder="Example: Chicken, Pasta, Cream"
                  className="input bg-[#70e00020] w-full"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Instructions</label>
                <input
                  type="text"
                  name="instructions"
                  defaultValue={instructions}
                  required
                  placeholder="Example: 1.Boil pasta 2.Add cream..."
                  className="input bg-[#70e00020] w-full"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Cuisine Type</label>
                <select
                  name="cuisine"
                  required
                  defaultValue={cuisine}
                  className="select bg-[#70e00020] select-bordered w-full"
                >
                  <option value="" disabled>
                    Select cuisine
                  </option>
                  <option>BanglaDeshi</option>
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
                  min={1}
                  
                  value={`${value < 0 ? 0 : value}`}
                  onChange={(e) => setValue(e.target.value)}
                  className="input bg-[#70e00020] w-full"
                  name="preparationTime"
                  placeholder="Time in minutes"
                  required
                />
              </fieldset>
            </div>

            <fieldset className="fieldset my-6 bg-base-300 border-base-300 rounded-box border p-4">
              <label className="label">Categories</label>
              <span className="text-center text-2xl text-error">
                {/* {error && error} */}
              </span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                  (cat) => (
                    <label key={cat} className="cursor-pointer label">
                      <input
                        type="checkbox"
                       defaultChecked={categoryArray.includes(cat)}
                       
                        className="checkbox bg-[#70e00020] checkbox-primary mr-2"
                        name="categories"
                        value={cat}
                      />
                      <span className="label-text">{cat}</span>
                    </label>
                  )
                )}
              </div>
            </fieldset>

            <fieldset className="fieldset mb-6 bg-base-300 border-base-300 rounded-box border p-4">
              <label className="label">Like Count (default 0)</label>
              <input
                type="number"
                name="likeCount"
                value={likeCount}
                readOnly
                className="input bg-[#70e00020] w-full"
              />
            </fieldset>

            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-[#70e00080] hover:bg-[#70e000]"
              >
                Update Recipe
              </button>
              <label htmlFor="add-recipe-modal" className="btn">
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateRacipeModal;
