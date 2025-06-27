import React from "react";
import { Link } from "react-router";

const cuisineList = [
  "Chinese",
  "Indian",
  "Mexican",
  "Italian",
  "BanglaDeshi",
  "All",
  "Others",
];

const ExploreByCuisine = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Explore by Cuisine Type
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          From spicy Indian curries to Italian pastas — discover recipes by cuisine type!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {cuisineList.map((cuisine) => (
          <Link
            to={`/all-recipes?cuisine=${encodeURIComponent(cuisine)}`}
            key={cuisine}
            className="rounded-xl text-center p-6 shadow-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300">
              {cuisine}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreByCuisine;
