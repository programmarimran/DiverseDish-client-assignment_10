// import { use, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdateRacipeModal from "./UpdateRacipeModal";
import { FaEdit, FaUser } from "react-icons/fa";
import { use } from "react";
import { toast } from "react-toastify";

const MyRecipeCard = ({ recipe, myRecipes }) => {
  const { darkIstrue, setModalId } = use(ProductContext);

  const handleDeleteForDB = (_id) => {
    fetch(`http://localhost:3000/recipes/${_id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("after delete",data)
      if(data?.deletedCount>0){
        toast.info("Deleted Successfully ")
      }
    })
  };
  
  return (
    <div
      className={`${
        darkIstrue ? "bg-green-900 text-gray-100" : "bg-green-200 text-gray-800"
      } mx-auto w-full shadow-2xl rounded-2xl ${
        myRecipes.length < 3 ? "max-w-xl mx-auto" : ""
      }   min-h-[550px] flex flex-col`}
    >
      <img
        src={recipe?.image}
        alt={recipe?.title}
        className="w-[96%] mx-auto mt-3 shadow-2xl h-48 object-cover rounded-t-2xl"
      />

      <div className="p-4  rounded-b-2xl flex flex-col justify-between flex-grow">
        <div className="w-11/12 mx-auto space-y-4">
          <div
            className={`flex justify-between items-center gap-4 p-4 rounded-xl shadow-md ${
              darkIstrue ? "bg-green-800" : "bg-green-200"
            }`}
          >
            {/* ************************************** */}

            <div className="p-2 rounded-full bg-green-300 hover:bg-green-400 cursor-pointer transition-all duration-300">
              <button
                onClick={() => {
                  setModalId(recipe?._id);
                  document.getElementById("my_modal_1").showModal();
                }}
                className=""
              >
                <FaEdit
                  size={24}
                  className="text-green-900 hover:text-green-950"
                />
              </button>
            </div>

            {/* <div>
              <UpdateRacipeModal ></UpdateRacipeModal>
            </div> */}

            <div className="p-2 rounded-full bg-red-200 hover:bg-red-300 cursor-pointer transition-all duration-300">
              <button onClick={()=>handleDeleteForDB(recipe?._id)}>
                <RiDeleteBin6Line
                  size={24}
                  className="text-red-700 hover:text-red-900"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{recipe?.title}</h2>
            <div
              className={`${
                darkIstrue ? "bg-green-700" : "bg-amber-400"
              } text-sm p-1 rounded-xl`}
            >
              {recipe?.cuisineType}
            </div>
          </div>

          <p className="font-bold italic text-sm">{recipe?.instructions}</p>

          <hr className="border-2 border-dashed border-gray-500" />

          <ul
            className={`text-sm mt-2 ${
              darkIstrue ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {recipe?.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="border-2 border-dashed border-gray-500" />

          <div className="flex items-center justify-between mt-3 text-sm">
            <div
              className={`${darkIstrue ? "text-gray-300" : "text-gray-700"}`}
            >
              ⏱ Prep Time: {recipe?.preparationTime} min
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-blue-400" />
              <span className="text-sm">{recipe?.user.name}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <div className="font-bold">
              <div className="flex items-center text-green-600 bg-green-200 border border-green-400 p-2 rounded-xl">
                <AiFillLike /> : <span>{recipe?.likeCount}</span>
              </div>
            </div>
            <div className={darkIstrue ? "text-gray-300" : "text-gray-600"}>
              {recipe?.categories.join(",")}
            </div>
          </div>
        </div>

        <Link to={`/recipe-details/${recipe?._id}`}>
          <button className="btn bg-blue-500 shadow-none border-none w-full text-white mt-4">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyRecipeCard;
