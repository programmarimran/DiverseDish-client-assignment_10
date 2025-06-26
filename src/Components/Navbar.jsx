import React, { useState, use } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import ThemeToggle from "../components/ThemeToggle";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
  const { logOutUser, user, loading } = use(AuthContext);

  const handleLogoutUser = () => {
    logOutUser().then(() => {
      toast.warning("Logout Successfully");
    });
  };

  const [state, setState] = useState(false);
  const handleHamburger = () => setState(!state);

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
      <li className="my-1">
        <NavLink className="link-hover" to={"/add-recipes"}>
          Add Recipe
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

      {user && (
        <li className="my-1">
          <NavLink className="link-hover" to={"/my-recipes"}>
            My Recipes
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar p-0">
      {/* Navbar Start */}
      <div className="navbar-start md:gap-4">
        <div className="dropdown">
          <button onClick={handleHamburger} type="button">
            <div tabIndex={0} className="lg:hidden">
              {state ? <RxCross2 size={35} /> : <GiHamburgerMenu size={35} />}
            </div>
          </button>

          {state && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          )}
        </div>

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

        {user?.photoURL ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
              <div className="tooltip tooltip-bottom rounded-full bg-gray-200">
                <div className="tooltip-content">
                  <div
                    className={`animate-bounce text-orange-400 ${
                      user?.email.length < 15 ? "text-lg" : "text-xs"
                    } font-black`}
                  >
                    {user ? user.displayName : ""}
                  </div>
                </div>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                    <img src={user?.photoURL} alt="User" />
                  </div>
                </div>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-300 rounded-2xl min-w-max px-4 py-2"
            >
              <li className=" w-full">
                <h1 className=" whitespace-nowrap w-full text-lg font-bold">{user.displayName}</h1>
              </li>
              <li>
                <button onClick={handleLogoutUser} className="btn btn-primary bg-gray-950">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            {loading ? (
              <span className="loading loading-dots loading-xl"></span>
            ) : (
              <FaCircleUser size={40} />
            )}
          </>
        )}

        <div>
          {loading && (
            <Link to={"/login"}>
              <button className="btn btn-primary bg-gray-950">LogIn</button>
            </Link>
          )}
        </div>

        {!user && (
          <div className={`flex gap-1 ${loading && "hidden"}`}>
            <Link to={"/signup"}>
              <button className="btn btn-primary bg-gray-950">SignUp</button>
            </Link>
            <Link to={"/login"}>
              <button className="btn btn-primary bg-gray-950">LogIn</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
