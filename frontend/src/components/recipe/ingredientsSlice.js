import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchIngredients = createAsyncThunk(

  //GET all
  "ingredients/fetchIngredients",
  async () => {
    const response = await fetch(`http://127.0.0.1:3001/ingredientsRoad`);
    const data = await response.json();
    console.log(data);
    const ingredients = [];
    for (const key in data) {
      ingredients.push({ id: key, ...data[key] });
    }
    return ingredients;
  }
);

//GET id
export const fetchIngredientsbyId = createAsyncThunk(
  "ingredients/fetchIngredientsbyId",
  async (selectIngredient) => {
    const response = await fetch(
      `http://127.0.0.1:3001/ingredientsRoad/${selectIngredient.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectIngredient),
      }
    );
    const data = await response.json();
    console.log(data);
    return selectIngredient;
  }
);

//ADD
export const postIngredients = createAsyncThunk(
  "ingredients/postIngredients",
  async (newIngredient) => {
    const response = await fetch(`http://127.0.0.1:3001/ingredientsRoad`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIngredient),
    });
    const data = await response.json();
    console.log(data);
    return {
      id: data.id,
      ...newIngredient,
    };
  }
);
//DELETE
export const deleteIngredient = createAsyncThunk(
  "ingredients/deleteIngredients",
  async (selectIngredient) => {
    const response = await fetch(
      `http://127.0.0.1:3001/ingredientsRoad/${selectIngredient.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      return selectIngredient;
    }
  }
);

//UPDATE
export const editIngredient = createAsyncThunk(
  "ingredients/editIngredient",
  async ({ ingredientId, ...newIngredient }) => {
    const response = await fetch(
      `http://127.0.0.1:3001/ingredientsRoad/${ingredientId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newIngredient),
      }
    );
    const data = await response.json();
    console.log(data);
    console.log(newIngredient);

    return { ingredientId, ...data };
  }
);

const ingredientSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
    userIngredients: [],
    formMode: "",
    selectIngredient: null,
  },
  reducers: {
    setIngredients: (state, action) => {
        state.ingredients=action.payload
    },
    setUserIngredients: (state, action) => {
        state.userIngredients=action.payload
    },
    setSelectIngredient: (state, action) => {
      state.selectIngredient = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload;
      console.log(state.ingredients);
    });
    builder.addCase(postIngredients.fulfilled, (state, action) => {
      state.ingredients.push(action.payload);
      console.log(state.ingredients);
    });
    builder.addCase(deleteIngredient.fulfilled, (state, action) => {
      let ingredientsdelete = state.ingredients.find((i) => i.id === action.payload.id);
      console.log(ingredientsdelete);
      if (ingredientsdelete) {
        state.ingredients = state.ingredients.filter(
          (i) => i.id !== action.payload.id
        );
      }
    });
    builder.addCase(editIngredient.fulfilled, (state, action) => {
      state.ingredients = [
        ...state.ingredients.filter((i) => i.id !== action.payload.id),
        action.payload,
      ];
      console.log(state.ingredients);
    });
  },
});
export const { setSelectIngredient, setIngredients,setUserIngredients} = ingredientSlice.actions
export default ingredientSlice.reducer
