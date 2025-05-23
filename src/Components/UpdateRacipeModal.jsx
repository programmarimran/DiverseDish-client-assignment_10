import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateRacipeModal = ({ recipe }) => {
  const navigate = useNavigate();
  const {
    _id,
    title,
    preparationTime,
    likeCount,
    instructions,
    ingredients,
    image,
    cuisine,
    categories,
  } = recipe;
  // const categoryArray = Array.isArray(categories)
  // ? categories
  // : categories?.split(",") || [];
  const [value, setValue] = useState(preparationTime);
  // const [error,setError]=useState("")

  const handleUpdateRacipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRecipe = Object.fromEntries(formData.entries());
    updatedRecipe.ingredients = form.ingredients.value.split(",");
    updatedRecipe.categories = formData.getAll("categories");
    updatedRecipe.likeCount = parseInt(form.likeCount.value);
    // console.log(updatedRecipe)
    fetch(`http://localhost:3000/recipes/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update ", data);
        if (data?.modifiedCount > 0) {
          toast.success("Your Recipe Updated Successfully !!");
          navigate("/my-recipes");

          document.getElementById("add-recipe-modal").close();

          return;
        }
      });
  };

  return (
    <>
      <div className="p-2 rounded-full bg-green-300 hover:bg-green-400 cursor-pointer transition-all duration-300">
        <button
          className=""
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <FaEdit size={24} className="text-green-900 hover:text-green-950" />
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-4xl w-full">
          <h3 className=" my-12 text-center bg-green-100 text-green-600 border border-green-200  rounded-lg py-2 px-4 text-2xl font-bold">
            Update Recipe
          </h3>
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
                        defaultChecked={categories.includes(cat)}
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
            {/* modal end */}
            <div className=" flex items-center justify-between">
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className=" btn bg-green-100 text-green-600 border border-green-400 hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold">
                    Close
                  </button>
                </form>
              </div>
              <button
                className=" btn bg-green-100 text-green-600 border border-green-400 hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
                type="submit"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateRacipeModal;
