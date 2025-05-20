import {
  createBrowserRouter,
 
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomeLayout from "../layouts/HomeLayout";
import AllRecipes from "../Pages/recipes/AllRecipes";
import MyRecipes from "../Pages/recipes/MyRecipes";
import AddRecipe from "../Pages/recipes/AddRecipe";



const router = createBrowserRouter([
  {
    path: "/",
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
          Component:MyRecipes
        },
        {
          path:"/add-recipes",
          Component:AddRecipe
        }
    ]
  },
  {
    path:"*",
    errorElement:<p>error 404</p>
  }
]);
export default router