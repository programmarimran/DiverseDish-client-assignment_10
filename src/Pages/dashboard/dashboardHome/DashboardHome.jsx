// DashboardHome.jsx
import { FaUtensils, FaHeart, FaClipboardList } from "react-icons/fa";
import DashboardCard from "../dashboard/DashboardCard";
import { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { Link } from "react-router";

const DashboardHome = () => {
  const { user } = use(AuthContext);
  const [allRecipe, setAllRecipe] = useState([]);
  const [wishlistRecipes, setWishlistRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  //fetch total recipes
  useEffect(() => {
    fetch(`${import.meta.env.VITE_serverBaseURL}/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllRecipe(data);
      });
  }, []);
  //fetch wishlist recipes
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_serverBaseURL}/wishlist/recipes?email=${
        user.email
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setWishlistRecipes(data);
      });
  }, []);
  //fetch my reipes
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_serverBaseURL}/my-recipes?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyRecipes(data);
      });
  }, []);
  return (
    <div className="grid py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <Link to={"/dashboard/all-recipes"}>
      <DashboardCard
        title="Total Recipes"
        value={allRecipe?.length || 0}
        icon={<FaUtensils />}
      />
     </Link>
    <Link to={'/dashboard/wishlist'}>
      <DashboardCard
        title="Wishlist Recipes"
        value={wishlistRecipes?.length || 0}
        icon={<FaHeart />}
      />
    </Link>
     <Link to={"/dashboard/my-recipes"}>
      <DashboardCard
        title="My Recipes"
        value={myRecipes?.length || 0}
        icon={<FaClipboardList />}
      />
     </Link>
    </div>
  );
};
export default DashboardHome;
