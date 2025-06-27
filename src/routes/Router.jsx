import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomeLayout from "../Pages/recipes/home/homeLayout/HomeLayout";
import AllRecipes from "../Pages/recipes/AllRecipes";
import MyRecipes from "../Pages/recipes/MyRecipes";
import AddRecipe from "../Pages/recipes/AddRecipe";
import ExternalError from "../Pages/errors/ExternalError";
import InternalError from "../Pages/errors/InternalError";
import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import RecipeDetails from "../Pages/recipes/RecipeDetails";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../Pages/dashboard/dashboardHome/DashboardHome";
import DashboardAllRecipes from "../Pages/dashboard/dashboardAllRecipes/DashboardAllRecipes";
import DashboardMyRecipes from "../Pages/dashboard/dashboardMyRecipes/DashboardMyRecipes";
import WishList from "../Pages/dashboard/wishlist/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ExternalError></ExternalError>,
    Component: RootLayout,
    children: [
      {
        index: true,
        errorElement: <InternalError></InternalError>,
        loader: () =>
          fetch(`${import.meta.env.VITE_serverBaseURL}/recipes/home`),
        Component: HomeLayout,
      },
      {
        path: "/all-recipes",
        errorElement: <InternalError></InternalError>,
        element: <AllRecipes />,
      },
      {
        path: "/recipe-details/:id",
        errorElement: <InternalError></InternalError>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverBaseURL}/recipes/${params.id}`),
        Component: RecipeDetails,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ExternalError></ExternalError>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "add-recipes",
        errorElement: <InternalError></InternalError>,
        Component: AddRecipe,
      },
      {
        path: "all-recipes",
        errorElement: <InternalError></InternalError>,
        Component: DashboardAllRecipes,
      },
      {
        path: "my-recipes",
        errorElement: <InternalError></InternalError>,
        Component: DashboardMyRecipes,
      },
      {
        path: "wishlist",
        errorElement: <InternalError></InternalError>,
        Component: WishList,
      },
    ],
  },
  {
    path: "/",
    errorElement: <ExternalError></ExternalError>,
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        errorElement: <InternalError></InternalError>,
        Component: Login,
      },

      {
        path: "/signup",
        errorElement: <InternalError></InternalError>,
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    element: <ExternalError></ExternalError>,
  },
]);
export default router;
