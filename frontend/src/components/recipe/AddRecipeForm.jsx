import { useRef } from "react";
import style from "./recipe-style/Form.module.css";
import Ingredient from "../../models/Ingredient.js"
import Recipe from "../../models/Recipe.js"
import {useDispatch} from "react-redux"
import { postRecipes } from "./recipeSlice";

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

  const handleAddFormSubmission = (e) => {
    e.preventDefault()

    const name = titreName.current.value
    const description = descriptionRef.current.value
    const timeCooking = timeCookingRef.current.value
    const prepTime = prepTimeRef.current.value
    const servings = servingsRef.current.value
    const ingredientName = ingredientNameRef.current.value
    const quantity = ingredientQuantityRef.current.value
    const unit = ingredientUnitRef.current.value


    // ajout d'ingrédients dans le tableau ingrédient
    const ingredients = []
    const newIngredient = new Ingredient(ingredientName,quantity,unit)
    ingredients.push(newIngredient)

    // ajout du tableau ingrédient à recette
    const newRecipe = new Recipe(name,description,timeCooking,prepTime,servings,ingredients)

    // envoi à redux
    dispatch(postRecipes(newRecipe))

    

    titreName.current.value =""
    descriptionRef.current.value=""
    timeCookingRef.current.value=""
    prepTimeRef.current.value=""
    servingsRef.current.value=""
    ingredientNameRef.current.value=""
    ingredientQuantityRef.current.value=""
    ingredientUnitRef.current.value=""


  }
 
  return (
    <>

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
        <div>
          <div className={style.bottom}>
            <div>
              <label htmlFor="Ingredientname">Ingredient</label>
            </div>

            <div>
              <input type="text" name="Ingredientname" ref={ingredientNameRef} />
            </div>

            <div>
              <label htmlFor="quantity">Quantity</label>
            </div>

            <div>
              <input type="text" name="quantity" ref={ingredientQuantityRef} />
            </div>

            <div>
              <label htmlFor="unit">Unit</label>
            </div>

            <div>
              <select name="unit" ref={ingredientUnitRef}>
                <option selected>Select your unit</option>
                <option value="gr">gr</option>
                <option value="ml">ml</option>
                <option value="unity">unity</option>
              </select>
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
export default AddRecipeForm;
