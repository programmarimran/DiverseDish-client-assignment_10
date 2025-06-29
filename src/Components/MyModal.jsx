import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { use } from 'react'
import ProductContext from '../contexts/ProductContext'


 const  MyModal=()=> {
  const{close,isOpen}=use(ProductContext)
 
// const remainingRecipe=recipes.find(recipe=>recipe._id===modalId)
// console.log(remainingRecipe)
  return (
    <>
  
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Payment successful
              </DialogTitle>
             <form >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Image URL</label>
                <input
                  type="text"
                  name="image"
                  // defaultValue={findingUpdateRecipe?.image}
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
                  // defaultValue={findingUpdateRecipe?.title}
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
                  // defaultValue={findingUpdateRecipe?.ingredients}
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
                  // defaultValue={findingUpdateRecipe?.instructions}
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
                  // defaultValue={findingUpdateRecipe?.cuisineType || ""}
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
                  // defaultValue={findingUpdateRecipe?.preparationTime}
                
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
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default MyModal