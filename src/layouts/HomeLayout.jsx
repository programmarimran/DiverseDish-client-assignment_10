import { Link, useLoaderData } from "react-router";
// import HomeCard from "../components/HomeCard";
import Hero from "../components/Hero";

import { Helmet } from "react-helmet-async";
import RecipeCard from "../components/RecipeCard";
import ExploreByCuisine from "../Pages/recipes/home/ExploreByCuisine";
import CustomerReviewsSection from "../Pages/recipes/home/customerReview/CustomerReviewsSection";
import FeatureSection from "../Pages/recipes/home/featuresSection/FeatureSection";
import DIshStatusCount from "../Pages/recipes/home/statusCount/DIshStatusCount";
import FeaturedHomeCooks from "../Pages/recipes/home/featureHomeCook/FeaturedHomeCooks";

const HomeLayout = () => {
  const recipes = useLoaderData();
  console.log(recipes);
  return (
    <div className=" text-gray-800 dark:text-gray-300">
      <Helmet>
        <title>Home page</title>
      </Helmet>

      <section className="py-12">
        <Hero recipes={recipes} />
      </section>

      <section>
        <h1 className="text-2xl text-center font-extrabold py-12 text-gray-800 dark:text-gray-200">
          Top Liked Recipes
        </h1>

        <div className="pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
          ))}
        </div>

        <Link to={"/all-recipes"}>
          <button className="btn bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100 hover:border-2 mx-auto flex justify-center">
            View All Recipes
          </button>
        </Link>
      </section>
      <section>
        <ExploreByCuisine></ExploreByCuisine>
      </section>

      <section>
        <FeatureSection></FeatureSection>
      </section>
      <section className="py-12">
        <CustomerReviewsSection></CustomerReviewsSection>
      </section>
      <section className="py-12">
        <FeaturedHomeCooks></FeaturedHomeCooks>
      </section>
      <section className="py-12">
        <DIshStatusCount></DIshStatusCount>
      </section>
    </div>
  );
};

export default HomeLayout;
