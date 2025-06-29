import React, { use, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ProductContext from "../contexts/ProductContext";

const UpdateRacipeModal = ({ myRecipes, setMyRecipes }) => {
  // const [cuisineType,setCusineType]=useState("")
  const [findingUpdateRecipe, setUpdateRecipe] = useState({});
  const { modalId } = use(ProductContext);
  // console.log(modalId);
  const navigate = useNavigate();
  // console.log(modalId);
  useEffect(() => {
    if (modalId) {
      fetch(`${import.meta.env.VITE_serverBaseURL}/recipes/${modalId}`)
        .then((res) => res.json())
        .then((data) => {
          setUpdateRecipe(data);
        });
    }
  }, [modalId]);

  const handleUpdateRacipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRecipe = Object.fromEntries(formData.entries());
    updatedRecipe.ingredients = form.ingredients.value.split(",");
    updatedRecipe.categories = formData.getAll("categories");
    updatedRecipe.likeCount = parseInt(form.likeCount.value);
    // const cuisineType=form.
    // console.log(updatedRecipe)
    fetch(
      `${import.meta.env.VITE_serverBaseURL}/recipes/${
        findingUpdateRecipe?._id
      }`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("after update ", data);
        if (data?.modifiedCount == 0) {
          toast.info("You didn't make any changes.");
        } else if (data?.modifiedCount > 0) {
          toast.success("Your Recipe Updated Successfully !!");
          navigate("/dashboard/my-recipes");
          const updatedMyRecipes = myRecipes.map((item) =>
            item._id == findingUpdateRecipe?._id
              ? { ...item, ...updatedRecipe }
              : data
          );
          setMyRecipes(updatedMyRecipes);
          return;
        }
      });
  };
  // console.log(findingUpdateRecipe?.cuisineType)
  const handleClose = () => {
    setUpdateRecipe({});
    document.getElementById("my_modal_1").close();
  };
  return (
    <>
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
                  defaultValue={findingUpdateRecipe?.image}
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
                  defaultValue={findingUpdateRecipe?.title}
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
                  defaultValue={findingUpdateRecipe?.ingredients}
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
                  defaultValue={findingUpdateRecipe?.instructions}
                  required
                  placeholder="Example: 1.Boil pasta 2.Add cream..."
                  className="input bg-[#70e00020] w-full"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Cuisine Type</label>
                {findingUpdateRecipe?.cuisineType && (
                  <select
                    name="cuisineType"
                    required
                    defaultValue={findingUpdateRecipe?.cuisineType}
                    className="select select-bordered w-full"
                  >
                    <option disabled>Select cuisine</option>
                    <option value={"BanglaDeshi"}>BanglaDeshi</option>
                    <option value={"Italian"}>Italian</option>
                    <option value={"Mexican"}>Mexican</option>
                    <option value={"Indian"}>Indian</option>
                    <option value={"Chinese"}>Chinese</option>
                    <option value={"Others"}>Others</option>
                  </select>
                )}
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Preparation Time (minutes)</label>
                <input
                  type="number"
                  min={1}
                  defaultValue={findingUpdateRecipe?.preparationTime}
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
                      {findingUpdateRecipe?.categories?.length > 0 && (
                        <input
                          type="checkbox"
                          defaultChecked={findingUpdateRecipe?.categories?.includes(
                            cat
                          )}
                          className="checkbox bg-[#70e00020] checkbox-primary mr-2"
                          name="categories"
                          value={cat}
                        />
                      )}

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
                defaultValue={findingUpdateRecipe?.likeCount}
                readOnly
                className="input bg-[#70e00020] w-full"
              />
            </fieldset>
            {/* modal end */}
            <div className=" flex items-center justify-between">
              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => handleClose()}
                  className="btn bg-green-100 text-green-600 border border-green-400 hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
                >
                  Close
                </button>
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
