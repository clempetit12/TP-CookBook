import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(

  //GET all
  "recipes/fetchRecipes",
  async () => {
    const response = await fetch(`http://127.0.0.1:3001/recipesRoad`);
    const data = await response.json();
    console.log(data);
    const recipes = [];
    for (const key in data) {
      recipes.push({ id: key, ...data[key] });
    }
    return recipes;
  }
);

//GET id
export const fetchRecipesById = createAsyncThunk(
  "recipes/fetchRecipesById",
  async (selectedRecipe) => {
    const response = await fetch(
      `http://127.0.0.1:3001/recipesRoad/${selectedRecipe.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedRecipe),
      }
    );
    const data = await response.json();
    console.log(data);
    return selectedRecipe;
  }
);

//ADD
export const postRecipes = createAsyncThunk(
  "recipes/postRecipes",
  async (newRecipe) => {
    const response = await fetch(`http://127.0.0.1:3001/recipesRoad`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    const data = await response.json();
    console.log(data);
    return {
      id: data.id,
      ...newRecipe,
    };
  }
);
//DELETE
export const deleteRecipes = createAsyncThunk(
  "recipes/deleteRecipes",
  async (recipe) => {
    const response = await fetch(
      `http://127.0.0.1:3001/recipesRoad/${recipe.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      return recipe;
    }
  }
);

//UPDATE
export const editRecipe = createAsyncThunk(
  "recipes/editRecipe",
  async ({ recipeId, ...newRecipe }) => {
    const response = await fetch(
      `http://127.0.0.1:3001/recipesRoad/${recipeId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      }
    );
    const data = await response.json();
    console.log(data);
    console.log(newRecipe);

    return { recipeId, ...data };
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    formMode: "",
    selectedRecipe: null,
  },
  reducers: {
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
      console.log(state.recipes);
    });
    builder.addCase(postRecipes.fulfilled, (state, action) => {
      state.recipes.push(action.payload);
      console.log(state.recipes);
    });
    builder.addCase(deleteRecipes.fulfilled, (state, action) => {
      let foundRecipe = state.recipes.find(r => r.id === action.payload.id)
            console.log(foundRecipe);
            if (foundRecipe) {
                state.recipes = state.recipes.filter(r => r.id !== action.payload.id)
            }
        })
    builder.addCase(editRecipe.fulfilled, (state, action) => {
      state.recipes = [
        ...state.recipes.filter((r) => r.id !== action.payload.id),
        action.payload,
      ];
      console.log(state.recipes);
    });
  },
});
export const { setSelectedRecipe} = recipeSlice.actions
export default recipeSlice.reducer
