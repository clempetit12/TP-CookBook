import App from "./App"
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/recipe/ErrorPage"
import AuthPage from "./components/auth/AuthPage";
import RecipeDisplay from "./components/recipe/RecipeDisplay";
import DetailsPage from "./components/recipe/DetailPage";
import AddRecipeForm from "./components/recipe/AddRecipeForm";
import EditRecipe from "./components/recipe/EditRecipe";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement: <ErrorPage/>,
        children:[{
            path:"/auth",
            element:<AuthPage/>
        },
        {
            path:"/",
            element:<RecipeDisplay/>
        },
        {
            path:"/details",
            element:<DetailsPage/>
        },
        {
            path:"/addRecipe",
            element:<AddRecipeForm/>
        },
        {
            path:"/editRecipe",
            element:<EditRecipe/>
        },

          
        ]

    }
])
export default router