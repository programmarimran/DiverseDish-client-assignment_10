import {
  createBrowserRouter,
 
} from "react-router";
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




const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ExternalError></ExternalError>,
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:HomeLayout
        },
        {
            path:"/all-recipes",
            element:<AllRecipes/>
        },
        {
          path:"/my-recipes",
          errorElement:<InternalError></InternalError>,
          element:<PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
        },
        {
          path:"/add-recipes",
          element:<PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
        },
        {
          path:"/login",
          Component:Login
        },
        {
          path:"/signup",
          Component:SignUp
        }
    ]
  },
  {
    path:"*",
    element:<ExternalError></ExternalError>
  }
]);
export default router