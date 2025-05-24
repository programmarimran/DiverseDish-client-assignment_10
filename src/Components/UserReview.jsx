import React, { use } from "react";
import ProductContext from "../contexts/ProductContext";

const diverseDishPromise = fetch("/diverse-dish.json").then((res) =>
  res.json()
);

const CustomerReviews = () => {
  const { darkIstrue } = use(ProductContext);
  const info = use(diverseDishPromise);

  const { diverseDishInfo } = info;
  const data = diverseDishInfo.userReviews;
  const features = data.reviews;

  return (
    <div>
      <div className="text-center w-3/4 mx-auto mb-8">
        <h1
          className={`text-3xl font-extrabold mb-2 ${
            darkIstrue ? "text-green-200" : "text-green-900"
          }`}
        >
          What Our Home Cooks Are Saying About Diverse Dish
        </h1>
        <p
          className={`text-md font-medium max-w-xl mx-auto ${
            darkIstrue ? "text-green-300" : "text-green-700"
          }`}
        >
          Home cooks worldwide love Diverse Dish for easy, authentic recipes
          that bring joy to every meal.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-6 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 px-4 md:px-0">
        {features?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-8 space-y-4 rounded-2xl
             shadow-lg bg-green-100 border-2 border-green-200 hover:border-green-300"
          >
            <p
              className={`text-lg font-medium first-letter:text-3xl first-letter:font-bold first-letter:uppercase ${
                darkIstrue ? "text-green-700" : "text-green-900"
              }`}
            >
              {item.comment}
            </p>

            <h1
              className={`text-xl font-bold ${
                darkIstrue ? "text-green-700" : "text-green-900"
              }`}
            >
              Location:{" "}
              <span
                className={`${
                  darkIstrue ? "text-green-700" : "text-green-900"
                } font-semibold`}
              >
                {item.location}
              </span>
            </h1>

            <div className="flex space-x-1 items-center">
              <span
                className={darkIstrue ? "text-green-700" : "text-green-900"}
              >
                Rating:
              </span>
              {[1, 2, 3, 4, 5].map((num, i) =>
                num <= item.rating ? (
                  <p
                    key={i}
                    className={
                      darkIstrue ? "text-yellow-400" : "text-yellow-500"
                    }
                  >
                    ⭐
                  </p>
                ) : (
                  <p
                    key={i}
                    className={darkIstrue ? "text-green-700" : "text-green-400"}
                  >
                    ☆
                  </p>
                )
              )}
            </div>

            <hr className={`border-2 border-dashed border-green-300`} />

            <div className="flex items-center space-x-4">
              <img
                className="h-10 w-10 rounded-full border-2 border-green-300"
                src={item.image}
                alt={item.name}
              />
              <h3
                className={`font-bold text-2xl ${
                  darkIstrue ? "text-green-700" : "text-green-900"
                }`}
              >
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
