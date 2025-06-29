import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../../../contexts/AuthContext";
import DashboardResponsiveDrawer from "./DashboardResponsiveDrawer";

const DashboardHambarger = () => {
  const { loading } = useContext(AuthContext); // ✅ context properly
  const [active, setActive] = useState(false); // ✅ drawer state
  const dropdownRef = useRef(null);

  // toggle drawer
  const handleHambargar = () => setActive((prev) => !prev);
  const handleHambargarFalse = () => setActive(false);

  // close drawer when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <li>
        <NavLink onClick={handleHambargarFalse} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleHambargarFalse} to="/dashboard">
          Dashboard Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleHambargarFalse} to="/dashboard/all-recipes">
          All Recipes
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleHambargarFalse} to="/dashboard/wishlist">
          Wishlist Recipes
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleHambargarFalse} to="/dashboard/my-recipes">
          My Recipes
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleHambargarFalse} to="/dashboard/add-recipes">
          Add Recipe
        </NavLink>
      </li>

      {loading && (
        <li>
          <span className="loading loading-dots loading-md"></span>
        </li>
      )}
    </>
  );

  return (
    <div ref={dropdownRef}>
      <DashboardResponsiveDrawer
        active={active}
        handleHambargar={handleHambargar}
        links={links}
      />
    </div>
  );
};

export default DashboardHambarger;
