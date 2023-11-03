import { useEffect, useRef, useState } from "react";
import style from "./recipe-style/Form.module.css";
import Ingredient from "../../models/Ingredient.js"
import Recipe from "../../models/Recipe.js"
import { useDispatch, useSelector } from "react-redux"
import { postRecipes } from "./recipeSlice";
import { fetchIngredients, setIngredients, setSelectIngredient } from "./ingredientsSlice";

const AddRecipeForm = () => {

  const dispatch = useDispatch()
  const titreName = useRef();
  const timeCookingRef = useRef();
  const prepTimeRef = useRef();
  const servingsRef = useRef();
  const descriptionRef = useRef();
  const ingredientNameRef = useRef();
  const ingredientQuantityRef = useRef();
  const ingredientUnitRef = useRef();
  const ingredients = useSelector(state => state.ingredients.ingredients)


  const ingredientsRef = useRef()
  const [recipeIngredients, setRecipeIngredients] = useState([
    {
      name: "",
      quantity: "",
      unit: "gr",
    },
  ]);
  const selectedIngredients = recipeIngredients.filter((ingredient) => ingredient.name);


  const handleAddIngredient = () => {
    console.log("ajouter");
    setRecipeIngredients((prevIngredients) => [
      ...prevIngredients,
      {
        name: "",
        quantity: "",
        unit: "gr",
      },

    ]);
    console.log(recipeIngredients);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedRecipeIngredients = [...recipeIngredients];
    updatedRecipeIngredients[index] = {
      ...updatedRecipeIngredients[index],
      [field]: value,
    };
    setRecipeIngredients(updatedRecipeIngredients);
  };

  const handleAddFormSubmission = (e) => {
    e.preventDefault();

    const name = titreName.current.value;
    const description = descriptionRef.current.value;
    const timeCooking = timeCookingRef.current.value;
    const prepTime = prepTimeRef.current.value;
    const servings = servingsRef.current.value;
    if (selectedIngredients.length === 0) {
      alert("Veuillez sélectionner au moins un ingrédient.");
      return; // Empêche la soumission si aucun ingrédient n'est sélectionné.
    }

    const recipeIngredientList = selectedIngredients.map((ingredient) => ({
      name: ingredient.name,
      quantity: ingredient.quantity,
      unit: ingredient.unit,
    }));

    // Ajout du tableau d'ingrédients à la recette
    const newRecipe = new Recipe(name, description, timeCooking, prepTime, servings, recipeIngredientList);
    console.log(newRecipe);
    // Envoi à Redux
    dispatch(postRecipes(newRecipe));

    
  };
  useEffect(() => {
    dispatch(fetchIngredients())


  }, [])
  return (
    <>
      <h1 className="display-6 m-4">Ajouter une recette</h1>
      <form action="#" onSubmit={handleAddFormSubmission}>
        <div className={style.labelsAndInputs}>
          <div className={style.topLabels}>
            <label htmlFor="name">name</label>
            <label htmlFor="cookingTime">CookingTime</label>
            <label htmlFor="prepTime">prepTime</label>
            <label htmlFor="servings">Servings</label>
          </div>

          <div className={style.topInput}>
            <input type="text" name="name" ref={titreName} />
            <input type="text" name="timeCooking" ref={timeCookingRef} />
            <input type="text" name="prepTime" ref={prepTimeRef} />
            <input type="text" name="servings" ref={servingsRef} />
          </div>
        </div>
        <div>
          <label htmlFor="description">description</label>
        </div>
        <div>
          <textarea type="text" name="description" ref={descriptionRef} />
        </div>
        <div className={style.bottom}>
          {recipeIngredients.map((ingredient, index) => (
            <div key={index} className={style.ingredientContainer}>
              <div>
                <label htmlFor="ingredient">Ingredient</label>
                <input
                  type="text"
                  name="ingredientName"
                  value={ingredient.name}
                  onChange={(e) =>
                    handleIngredientChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div>
              <label htmlFor="quantity">Quantité</label>
                <input
                  type="text"
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    handleIngredientChange(index, "quantity", e.target.value)
                  }
                />
              </div>
              <div>
              <label htmlFor="unit">Unité</label>
                <select
                  name="unit"
                  value={ingredient.unit}
                  onChange={(e) =>
                    handleIngredientChange(index, "unit", e.target.value)
                  }
                >
                  <option value="gr">gr</option>
                  <option value="ml">ml</option>
                  <option value="unit">unit</option>
                </select>
              </div>
            </div>
          ))}
          <button type="button" onClick={handleAddIngredient}>
            Ajouter un ingrédient
          </button>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default AddRecipeForm;


