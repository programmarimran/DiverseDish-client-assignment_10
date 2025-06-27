import { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ProductContext from "../../contexts/ProductContext";
import { AiFillLike } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AuthContext from "../../contexts/AuthContext";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import RecipeCard from "../../components/RecipeCard";
const AllRecipes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const cuisine = searchParams.get("cuisine");
  console.log(cuisine);
  const { user } = use(AuthContext);
  const [specificAllRecipes, setSpecificAllRecipes] = useState([]);
  const [wishlistRecipes, setWishListRecipes] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedWishlistCountre, setSelectedWishlistCountey] = useState("");
  const handleCountryChange = (val) => {
    setSelectedCountry(val);

    if (val === "All") {
      // ?cuisine=___ remove and then current page navigate
      navigate("/all-recipes", { replace: true });
    }
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_serverBaseURL}/recipes`)
      .then((res) => res.json())
      .then((data) => {
        //if selectedCountry not showing then cuisine filter
        if (!selectedCountry || selectedCountry === "All") {
          if (cuisine) {
            const filtered = data.filter(
              (recipe) => recipe?.cuisineType === cuisine
            );
            setSpecificAllRecipes(filtered);
          } else {
            setSpecificAllRecipes(data);
          }
        } else {
          const filtered = data.filter(
            (recipe) => recipe?.cuisineType === selectedCountry
          );
          setSpecificAllRecipes(filtered);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedCountry, cuisine]);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(
      `${import.meta.env.VITE_serverBaseURL}/wishlist/recipes?email=${
        user?.email
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          selectedWishlistCountre === "All" ||
          selectedWishlistCountre === ""
        ) {
          setWishListRecipes(data);
        } else {
          const filtered = data?.filter(
            (recipe) => recipe?.cuisineType === selectedWishlistCountre
          );
          setWishListRecipes(filtered);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email, selectedWishlistCountre]);

  return (
    <>
      <div className=" pt-12">
        <Helmet>
          <title>DiverseDish|| All recipes</title>
        </Helmet>
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
                      onChange={(e) => handleCountryChange(e.target.value)}
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
                    <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
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
                        setSelectedWishlistCountey(e.target.value)
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
                      {wishlistRecipes?.length} Recipes Found
                    </h1>
                  </div>
                </section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {wishlistRecipes?.map((singleRecipe) => (
                    <RecipeCard
                      key={singleRecipe._id}
                      recipe={singleRecipe}
                    ></RecipeCard>
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
