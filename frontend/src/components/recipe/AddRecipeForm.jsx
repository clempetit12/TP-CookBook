import { useRef } from "react";
import style from "./recipe-style/Form.module.css";


const AddRecipeForm = () => {
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

    // add one recipe
    const name = titreName.current.value
    const description = descriptionRef.current.value
    const timeCooking = timeCookingRef.current.value
    const prepTime = prepTimeRef.current.value
    const servings = servingsRef.current.value

    // ingredients ?

  }
 
  return (
    <>
      <h3>Add a recipe</h3>

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
              <label htmlFor="">Ingredients</label>
            </div>

            <div>
              <input type="text" name="name" ref={ingredientNameRef} />
            </div>

            <div>
              <label htmlFor="">Quantity</label>
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
