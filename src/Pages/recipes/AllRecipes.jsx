import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import "react-tabs/style/react-tabs.css";

import { Helmet } from "react-helmet-async";
import RecipeCard from "../../components/RecipeCard";
const AllRecipes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const cuisine = searchParams.get("cuisine");
  // console.log(cuisine);

  const [specificAllRecipes, setSpecificAllRecipes] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");

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

  return (
    <>
      <div>
        <Helmet>
          <title>DiverseDish|| All recipes</title>
        </Helmet>

        <div className="py-12 ">
          <h2 className="text-4xl font-bold mb-4 text-center ">All Recipes</h2>
          <p className="text-center text-base text-gray-600 mb-8 w-3/4 mx-auto">
            Browse our collection of {specificAllRecipes?.length} carefully
            selected recipes from different cuisines including Bangladeshi,
            Italian, Chinese, and more.
          </p>

          <section>
            <div className="fieldset my-4 max-w-64 mx-auto  border-base-300 rounded-box border">
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
            </div>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specificAllRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRecipes;
