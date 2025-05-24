import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import ProductContext from "../../contexts/ProductContext";
import { AiFillLike } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AuthContext from "../../contexts/AuthContext";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
const AllRecipes = () => {
  const { user } = use(AuthContext);
  const { recipes, darkIstrue } = use(ProductContext);
  const [specificAllRecipes, setSpecificAllRecipes] = useState(recipes);
  const [wishlistRecipes, setWishListRecipes] = useState(null);
  const [specificWishlistRecipes, setSpecificWishlistRecipes] =
    useState(wishlistRecipes);
  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(
      `https://diverse-dish-server.vercel.app/wishlist/recipes?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((wishlistRecipes) => {
        // console.log("after get",wishlistRecipes)
        setWishListRecipes(wishlistRecipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);
  // console.log(wishlistRecipes);
  //hanlde All recipe Filter
  const handleFilterAllRecipes = (country) => {
    // console.log(country);
    if (country === "All") {
      setSpecificAllRecipes(recipes);
    } else {
      const remainingRecipes = recipes?.filter(
        (recipe) => recipe?.cuisineType === country
      );
      setSpecificAllRecipes(remainingRecipes);
    }
  };
  //handle WishList recipes Filter
  const handleFilterWishlistRecipes = (country) => {
    if (country === "All") {
      setSpecificWishlistRecipes(wishlistRecipes);
    }
     else {
      const remainingRecipes = wishlistRecipes?.filter(
        (singlerecipe) => singlerecipe?.recipe?.cuisineType === country
      );
      setSpecificWishlistRecipes(remainingRecipes);
    }
  };
  console.log(specificWishlistRecipes)
  return (
    <>
      <div className=" pt-12">
        <Helmet><title>DiverseDish|| All recipes</title></Helmet>
        <Tabs>
          <TabList className={" border-b-2 border-green-800 rounded-full"}>
            <Tab>All Recipes</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

         <Fade direction="left">
           <TabPanel>
            <div className="p-4 pb-12 ">
              <h2 className="text-3xl font-bold mb-6 text-center">
                All Recipes
              </h2>
              <section className=" my-6">
                <div className="fieldset max-w-64 mx-auto bg-base-300 border-base-300 rounded-box border">
                  <label className=" text-2xl font-bold text-center">
                    Filter
                  </label>
                  <select
                    name="cuisineType"
                    required
                    defaultValue=""
                    onChange={(e) => handleFilterAllRecipes(e.target.value)}
                    className="select select-bordered w-3/4 mx-auto"
                  >
                    <option value={""} disabled>
                      Select cuisine
                    </option>
                    <option>All</option>
                    <option>BanglaDeshi</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    <option>Others</option>
                  </select>
                  <h1 className=" text-center text-base font-medium">
                    {specificAllRecipes?.length} Recipes Found
                  </h1>
                </div>
              </section>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {specificAllRecipes.map((recipe) => (
                  <div
                    key={recipe._id}
                    className={`${
                      darkIstrue
                        ? "bg-green-200 border-2  hover:border-4 border-gray-300 text-gray-800"
                        : "bg-green-200 border-2  hover:border-4 border-gray-300 text-gray-800"
                    } shadow-2xl rounded-xl  overflow-hidden flex flex-col justify-between`}
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="h-40 pt-1 px-1 rounded-t-2xl w-full object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <h3 className="text-lg font-semibold mb-1">
                        {recipe.title}
                      </h3>
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
         </Fade>
          <Fade direction="right">
            <TabPanel>
            <div className=" p-4 pb-12">
              <h1 className="text-3xl font-bold mb-6 text-center">
                {!user?.email
                  ? null
                  : wishlistRecipes?.length > 0
                  ? `You have ${wishlistRecipes?.length} recipe(s) in your wishlist.`
                  : "You don't have any recipes in your wishlist yet."}
              </h1>
              <h1 className="text-3xl font-bold mb-6 text-center">
                {!user?.email
                  ? "Please log in to view your wishlist."
                  : wishlistRecipes?.length < 1}
              </h1>
              <section className=" my-6">
                <div className="fieldset max-w-64 mx-auto bg-base-300 border-base-300 rounded-box border">
                  <label className=" text-2xl font-bold text-center">
                    Filter
                  </label>
                  <select
                    name="cuisineType"
                    required
                    defaultValue=""
                    onChange={(e) =>
                      handleFilterWishlistRecipes(e.target.value)
                    }
                    className="select select-bordered w-3/4 mx-auto"
                  >
                    <option value={""} disabled>
                      Select cuisine
                    </option>
                    <option>All</option>
                    <option>BanglaDeshi</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    <option>Others</option>
                  </select>
                  <h1 className=" text-center text-base font-medium">
                    {specificWishlistRecipes?.length} Recipes Found
                  </h1>
                </div>
              </section>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {specificWishlistRecipes?.map((singleRecipe) => (
                  <div
                    key={singleRecipe.recipe._id}
                    className={`${
                      darkIstrue
                        ? "bg-green-200 border-2  hover:border-4 border-gray-300 text-gray-800"
                        : "bg-green-200 border-2  hover:border-4 border-gray-300 text-gray-800"
                    } shadow-2xl rounded-xl  overflow-hidden flex flex-col justify-between`}
                  >
                    <img
                      src={singleRecipe?.recipe?.image}
                      alt={singleRecipe?.recipe?.title}
                      className="h-40 pt-1 px-1 rounded-t-2xl w-full object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <h3 className="text-lg font-semibold mb-1">
                        {singleRecipe.recipe.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Cuisine: {singleRecipe.recipe.cuisineType}
                      </p>
                      <div className=" flex justify-between">
                        <Link
                          to={`/recipe-details/${singleRecipe.recipe._id}`}
                          className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
                        >
                          See Details
                        </Link>
                        <p className=" bg-blue-200 flex items-center border border-blue-400 text-blue-700 rounded-2xl px-2">
                          <AiFillLike className=" text-blue-500 shadow-2xl" />:{" "}
                          {singleRecipe.recipe.likeCount}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          </Fade>
        </Tabs>
      </div>
    </>
  );
};

export default AllRecipes;
