import React, { use, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import AuthContext from '../../contexts/AuthContext';

const Hambarger = () => {
    const {loading}=use(AuthContext)
      const [active, setActive] = useState(false);
      const handleHambargar = () => setActive(!active);
      const handleHambargarFalse = () => setActive(false);
      const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(dropdownRef.current)
      // console.log(dropdownRef.current.contains(event.target))
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const links = (
    <>
      <li className="my-1">
        <NavLink onClick={handleHambargarFalse} className="link-hover" to={"/"}>
          Home
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink onClick={handleHambargarFalse} className="link-hover" to={"/all-recipes"}>
          All Recipes
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink onClick={handleHambargarFalse} className="link-hover" to={"/add-recipes"}>
          Add Recipe
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink onClick={handleHambargarFalse} className="link-hover" to={"/my-recipes"}>
          My Recipes
        </NavLink>
      </li>

      {loading && (
        <>
          <li className="my-1">
            <NavLink onClick={handleHambargarFalse} className="link-hover" to={"/add-recipes"}>
              <span className="loading loading-dots loading-xl"></span>
            </NavLink>
          </li>
          <li className="my-1">
            <NavLink onClick={handleHambargarFalse} className="link-hover" to={"/my-recipes"}>
              <span className="loading loading-dots loading-xl"></span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );
    return (
     <div className="dropdown"  ref={dropdownRef}>
          <button onClick={handleHambargar}>
            <div tabIndex={0} role="button" className=" lg:hidden">
              {active ? (
                <>
                  {/* close icon */}
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </>
              ) : (
                <>
                  {/* hamburger icon */}
                  <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                </>
              )}
            </div>
          </button>
          <div>
            {active && (
              <ul
                tabIndex={0}
                className="menu menu-sm left-10 top-12 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            )}
          </div>
        </div>
    );
};

export default Hambarger;