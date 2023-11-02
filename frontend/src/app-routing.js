import App from "./App"
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/recipe/ErrorPage"
import AuthPage from "./components/auth/AuthPage";
import RecipeDisplay from "./components/recipe/RecipeDisplay";


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
        }
          
        ]

    }
])
export default router