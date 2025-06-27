import React, { use } from "react";


import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";

import DashboardHambarger from "./DashboardHambarger";
import AuthContext from "../../../../contexts/AuthContext";
import ThemeToggle from "../../../../shared/themeChange/ThemeToggle";


const DashboardNavbar = () => {
  const { logOutUser, loading } = use(AuthContext);

  const handleLogoutUser = () => {
    logOutUser().then(() => {
      toast.warning("Logout Successfully");
    });
  };

  const links = (
    <>
      <li className="my-1">
        <NavLink className="link-hover" to={"/"}>
          Home
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink className="link-hover" to={"/all-recipes"}>
          All Recipes
        </NavLink>
      </li>

      {loading && (
        <>
          <li className="my-1">
            <NavLink className="link-hover" to={"/add-recipes"}>
              <span className="loading loading-dots loading-xl"></span>
            </NavLink>
          </li>
          <li className="my-1">
            <NavLink className="link-hover" to={"/my-recipes"}>
              <span className="loading loading-dots loading-xl"></span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar p-0">
      {/* Navbar Start */}
      <div className="navbar-start md:gap-4">
        <DashboardHambarger></DashboardHambarger>

        <div className="items-center md:hidden lg:flex gap-2">
          <div className="avatar">
            <div className="w-10 md:w-10 rounded-full">
              <img src="https://i.ibb.co/SX6hZdjg/Screenshot-2025-05-20-112334.png" />
            </div>
          </div>
          <Link to={"/"} className="text-xl hidden lg:flex font-bold">
            DiverseDish
          </Link>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar Middle for md only */}
      <div className="items-center hidden md:flex lg:hidden">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.ibb.co/j9wgB0GG/Screenshot-2025-05-20-112334-removebg-preview.png" />
          </div>
        </div>
        <Link to={"/"} className="text-xl font-bold">
          DiverseDish
        </Link>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2 md:gap-3">
        <ThemeToggle />

        <button onClick={handleLogoutUser} className=" btn btn-primary">Logout</button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
