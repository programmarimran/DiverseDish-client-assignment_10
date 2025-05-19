import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
    <div className=" flex items-center">
          <div className="avatar">
        <div className="w-8 rounded-full">
          <img src="https://i.ibb.co/vCWy2D9d/Chat-GPT-Image-May-20-2025-12-04-49-AM-removebg-preview-1.png" />
        </div>
      </div>
      <h1 className=" text-teal-500 text-2xl font-bold">Diverse<span className=" text-green-500">Dish</span></h1>
    </div>
      <NavLink className={"btn "} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"btn "} to={"/all-recipes-page"}>
        {" "}
        All recipes page
      </NavLink>
    </div>
  );
};

export default Navbar;
