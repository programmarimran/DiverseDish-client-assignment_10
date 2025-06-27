import React from "react";
import { FaUtensils, FaUsers, FaThumbsUp, FaGlobeAsia } from "react-icons/fa";
import CountUp from "react-countup";

const DishStatusCount = () => {
  const stats = [
    {
      icon: <FaUtensils className="text-4xl text-green-500" />,
      quantity: 1250,
      name: "Recipes Shared",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      quantity: 980,
      name: "Home Cooks Joined",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-pink-500" />,
      quantity: 15200,
      name: "Total Likes",
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-purple-500" />,
      quantity: 40,
      name: "Countries Represented",
    },
  ];

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Diverse Dish by the Numbers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-11/12 mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 text-center shadow-md border bg-white border-gray-200 text-gray-800 hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h1 className="text-2xl font-bold text-green-600">
              <CountUp
                start={0}
                end={item.quantity}
                duration={
                  item.quantity < 500 ? 4 : item.quantity < 1000 ? 6 : 8
                }
                suffix="+"
              />
            </h1>
            <p className="mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishStatusCount;
