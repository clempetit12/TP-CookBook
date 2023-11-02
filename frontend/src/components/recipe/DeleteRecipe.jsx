import { useRef, useState } from "react";
import style from "./recipe-style/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipes } from "./recipeSlice";

const DeleteRecipe = () => {
  const selectedRecipe = useSelector(state => state.recipes.selectedRecipe);
  const dispatch = useDispatch();
  const titreName = useRef();
  const timeCookingRef = useRef();
  const prepTimeRef = useRef();
  const servingsRef = useRef();
  const descriptionRef = useRef();
  const ingredientNameRef = useRef();
  const ingredientQuantityRef = useRef();
  const ingredientUnitRef = useRef();


  
  const handleDeleteForm = (e) => {
    e.preventDefault();

    dispatch(deleteRecipes(selectedRecipe));
  };

  return (
    <>
      <h1>DeleteRecipe</h1>

      <>
        <form action="#" onSubmit={handleDeleteForm}>
          <div className={style.labelsAndInputs}>
            <div className={style.topLabels}>
              <label htmlFor="name">name</label>
              <label htmlFor="cookingTime">CookingTime</label>
              <label htmlFor="prepTime">prepTime</label>
              <label htmlFor="servings">Servings</label>
            </div>

            <div className={style.topInput}>
              <input type="text" name="name" ref={titreName} disabled />
              <input
                type="text"
                name="timeCooking"
                ref={timeCookingRef}
                disabled
              />
              <input type="text" name="prepTime" ref={prepTimeRef} disabled />
              <input type="text" name="servings" ref={servingsRef} disabled />
            </div>
          </div>
          <div>
            <label htmlFor="description">description</label>
          </div>
          <div>
            <textarea
              type="text"
              name="description"
              ref={descriptionRef}
              disabled
            />
          </div>
          <div>
            <div className={style.bottom}>
              <div>
                <label htmlFor="Ingredientname">Ingredient</label>
              </div>

              <div>
                <input
                  type="text"
                  name="Ingredientname"
                  ref={ingredientNameRef}
                  disabled
                />
              </div>

              <div>
                <label htmlFor="quantity">Quantity</label>
              </div>

              <div>
                <input
                  type="text"
                  name="quantity"
                  ref={ingredientQuantityRef}
                  disabled
                />
              </div>

              <div>
                <label htmlFor="unit">Unit</label>
              </div>

              <div>
                <select name="unit" ref={ingredientUnitRef} disabled>
                  <option selected>Select your unit</option>
                  <option value="gr">gr</option>
                  <option value="ml">ml</option>
                  <option value="unity">unity</option>
                </select>
              </div>
            </div>
          </div>
          <button>Delete</button>
        </form>
      </>
    </>
  );
};
export default DeleteRecipe;
