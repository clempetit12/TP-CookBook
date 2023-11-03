import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./components/recipe/recipeSlice";
import authSlice from "./components/auth/authSlice";
import ingredientsSlice from "./components/recipe/ingredientsSlice";


export default configureStore({
    reducer : {
      auth : authSlice,
        recipes:recipeSlice,
        ingredients: ingredientsSlice
    }
})
