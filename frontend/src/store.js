import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./components/recipe/recipeSlice";


export default configureStore({
    reducer : {
        recipes:recipeSlice
    }
})