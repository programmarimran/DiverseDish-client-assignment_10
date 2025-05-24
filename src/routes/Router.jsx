import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomeLayout from "../layouts/HomeLayout";
import AllRecipes from "../Pages/recipes/AllRecipes";
import MyRecipes from "../Pages/recipes/MyRecipes";
import AddRecipe from "../Pages/recipes/AddRecipe";
import ExternalError from "../Pages/errors/ExternalError";
import InternalError from "../Pages/errors/InternalError";
import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import RecipeDetails from "../Pages/recipes/RecipeDetails";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ExternalError></ExternalError>,
    Component: RootLayout,
    children: [
      {
        index: true,
        errorElement:<InternalError></InternalError>,
        loader:()=>fetch("https://diverse-dish-server.vercel.app/recipes/home"),
        Component: HomeLayout,
      },
      {
        path: "/all-recipes",
        errorElement:<InternalError></InternalError>,
        element: <AllRecipes />,
      },
      {
        path: "/recipe-details/:id",
        errorElement:<InternalError></InternalError>,
        loader:({params})=>fetch(`https://diverse-dish-server.vercel.app/recipes/${params.id}`),
        Component:RecipeDetails
      },
      {
        path: "/my-recipes",
        errorElement: <InternalError></InternalError>,
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-recipes",
        errorElement:<InternalError></InternalError>,
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
     
      {
        path: "/login",
        errorElement:<InternalError></InternalError>,
        Component: Login,
      },
      {
        path: "/signup",
        errorElement:<InternalError></InternalError>,
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
