import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./recipe-style/Form.module.css";



const EditRecipe = () => {

  const selectRecipe = useSelector(state => state.recipes.selectRecipe)

    const dispatch = useDispatch()
    const titreName = useRef();
    const timeCookingRef = useRef();
    const prepTimeRef = useRef();
    const servingsRef = useRef();
    const descriptionRef = useRef();
    const ingredientNameRef = useRef();
    const ingredientQuantityRef = useRef();
    const ingredientUnitRef = useRef();
  
    const handleEditFormSubmission = (e) => {
      e.preventDefault()
 
    }
    useEffect(() => {
      console.log(selectRecipe);
    })

  return (
    <>
      <h1>EditRecipe</h1>


      <>

<form action="#" onSubmit={handleEditFormSubmission}>
  <div className={style.labelsAndInputs}>
    <div className={style.topLabels}>
      <label htmlFor="name">name</label>
      <label htmlFor="cookingTime">CookingTime</label>
      <label htmlFor="prepTime">prepTime</label>
      <label htmlFor="servings">Servings</label>
    </div>

    <div className={style.topInput}>
      <input type="text" name="name" ref={titreName} defaultValue={selectRecipe?.name}/>
      <input type="text" name="timeCooking" ref={timeCookingRef} defaultValue={selectRecipe?.timeCooking}/>
      <input type="text" name="prepTime" ref={prepTimeRef} defaultValue={selectRecipe?.prepTime}/>
      <input type="text" name="servings" ref={servingsRef} defaultValue={selectRecipe?.servings}/>
    </div>
  </div>
  <div>
    <label htmlFor="description">description</label>
  </div>
  <div>
    <textarea type="text" name="description" ref={descriptionRef} defaultValue={selectRecipe?.description}/>
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


      
    </>
  );
};
export default EditRecipe;
