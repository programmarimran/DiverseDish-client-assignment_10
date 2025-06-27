import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { } from "react";


const FeaturedHomeCooks = () => {

  const [recipes,setRecipes]=useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_serverBaseURL}/recipes`)
    .then(res=>res.json())
    .then(data=>{
      setRecipes(data)
    })
  },[])

  // unique users extract (email দিয়ে filter)
  const uniqueUsersMap = new Map();
  recipes.forEach((r) => {
    if (r.user?.email && !uniqueUsersMap.has(r.user.email)) {
      uniqueUsersMap.set(r.user.email, r.user);
    }
  });
  const uniqueUsers = Array.from(uniqueUsersMap.values());

  return (
    <div className="my-16">
      <h2
        className={`text-3xl font-bold text-center mb-10 dark:text-white text-gray-800`}
      >
        🍳 Featured Home Cooks
      </h2>

      <div className="py-4 flex bg-green-100 dark:bg-gray-800 rounded-xl">
        <Marquee pauseOnHover={true} speed={50} gradient={true}>
          {uniqueUsers.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mx-24 "
            >
              <img
                src={user.photo}
                alt={user.name}
                className="w-16 h-16 rounded-full border-2 border-green-500"
              />
              <p
                className={`mt-2 font-semibold text-sm dark:text-gray-200 text-gray-800 `}
              >
                {user.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FeaturedHomeCooks;
