import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateRecipe = () => {
    const navigate=useNavigate()
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
        //   `https://diverse-dish-server.vercel.app/recipes/${findingUpdateRecipe?._id}`,
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
              navigate("/my-recipes");
    
              document.getElementById("add-recipe-modal").close();
    
              return;
            }
          });
      };
      return (
        <>
         <form onSubmit={handleUpdateRacipe}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Image URL</label>
                    <input
                      type="text"
                      name="image"
                    //   defaultValue={findingUpdateRecipe?.image}
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
                    //   defaultValue={findingUpdateRecipe?.title}
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
                    //   defaultValue={findingUpdateRecipe?.ingredients}
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
                    //   defaultValue={findingUpdateRecipe?.instructions}
                      required
                      placeholder="Example: 1.Boil pasta 2.Add cream..."
                      className="input bg-[#70e00020] w-full"
                    />
                  </fieldset>
    
                  <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Cuisine Type</label>
                    <select
                      name="cuisineType"
                      required
                    //   defaultValue={findingUpdateRecipe?.cuisineType || ""}
                      className="select select-bordered w-full"
                    >
                      <option  disabled>
                        Select cuisine
                      </option>
                      <option value={"BanglaDeshi"}>BanglaDeshi</option>
                      <option value={"Italian"}>Italian</option>
                      <option value={"Mexican"}>Mexican</option>
                      <option value={"Indian"}>Indian</option>
                      <option value={"Chinese"}>Chinese</option>
                      <option value={"Others"}>Others</option>
                    </select>
                  </fieldset>
    
                  <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Preparation Time (minutes)</label>
                    <input
                      type="number"
                      min={1}
                    //   defaultValue={findingUpdateRecipe?.preparationTime}
                    
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
                    {/* {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                      (cat) => (
                        <label key={cat} className="cursor-pointer label">
                          <input
                            type="checkbox"
                            defaultChecked={findingUpdateRecipe?.categories.includes(
                              cat
                            )}
                            className="checkbox bg-[#70e00020] checkbox-primary mr-2"
                            name="categories"
                            value={cat}
                          />
                          <span className="label-text">{cat}</span>
                        </label>
                      )
                    )} */}
                  </div>
                </fieldset>
    
                <fieldset className="fieldset mb-6 bg-base-300 border-base-300 rounded-box border p-4">
                  <label className="label">Like Count (default 0)</label>
                  <input
                    type="number"
                    name="likeCount"
                    // value={findingUpdateRecipe?.likeCount}
                    readOnly
                    className="input bg-[#70e00020] w-full"
                  />
                </fieldset>
                {/* modal end */}
                <div className=" flex items-center justify-between">
                  <div className="modal-action">
                    <button
                      type="button"
                     
                      className="btn bg-green-100 text-green-600 border border-green-400 hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
                    >
                      Close
                    </button>
                  </div>
                  <button
                    className=" btn bg-green-100 text-green-600 border border-green-400 hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
                    type="submit"
                   
                  >
                    update
                  </button>
                </div>
              </form>
        </>
      );
};

export default UpdateRecipe;