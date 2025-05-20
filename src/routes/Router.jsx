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
            Component:AllRecipes,
        },
        {
          path:"/my-recipes",
          errorElement:<InternalError></InternalError>,
          Component:MyRecipes
        },
        {
          path:"/add-recipes",
          Component:AddRecipe
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