import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import ProductContext from "../../contexts/ProductContext";
import { AiFillLike } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AuthContext from "../../contexts/AuthContext";
const AllRecipes = () => {
  const {user}=use(AuthContext)
  const { recipes } = use(ProductContext);
  const [data,setData]=useState(null)
  useEffect(()=>{
    fetch(`http://localhost:3000/wishlist/recipes?email=${user?.email}`,{
      method:"GET"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("after get",data)
      setData(data)
    })
  },[user?.email])
  console.log(data)
  return (
    <>
      <div className=" pt-12">
        <Tabs >
        <TabList className={' border-b-2 border-green-800 rounded-full'} >
          <Tab >All Recipes</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
           <div className="p-4  ">
        <h2 className="text-3xl font-bold mb-6 text-center">All Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-linear-to-br from-[#70e00099] to-[#4ade8090] shadow-2xl rounded-xl  overflow-hidden flex flex-col justify-between"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-40 pt-1 px-1 rounded-t-2xl w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-semibold mb-1">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Cuisine: {recipe.cuisineType}
                </p>
                <div className=" flex justify-between">
                  <Link
                    to={`/recipe-details/${recipe._id}`}
                    className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    See Details
                  </Link>
                  <p className=" bg-blue-200 flex items-center border border-blue-400 text-blue-700 rounded-2xl px-2">
                    <AiFillLike className=" text-blue-500 shadow-2xl" />:{" "}
                    {recipe.likeCount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      </div>
     
    </>
  );
};

export default AllRecipes;
