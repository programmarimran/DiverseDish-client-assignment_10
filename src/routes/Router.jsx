import {
  createBrowserRouter,
 
} from "react-router";
import Root from "../Layout/Root";
import HomeLayout from "../Layout/HomeLayout";
import AllRecipesPage from "../Pages/AllRecipesPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:HomeLayout
        },
        {
            path:"/all-recipes-page",
            Component:AllRecipesPage
        }
    ]
  },
]);
export default router