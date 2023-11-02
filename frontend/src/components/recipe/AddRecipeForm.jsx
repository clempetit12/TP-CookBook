const AddRecipeForm = () => {
  return (
    <>
      <h3>Add a recipe</h3>

      <form action="#">
        <div>
          <label htmlFor="name">name</label>
          <label htmlFor="cookingTime">CookingTime</label>
          <label htmlFor="prepTime">prepTime</label>
          <label htmlFor="servings">Servings</label>
        </div>

        <div>
          <input type="text" name="name" ref={titreName}/>
          <input type="text" name="timeCooking" ref={timeCookingRef}/>
          <input type="text" name="prepTime" ref={prepTimeRef} />
          <input type="text" name="servings" ref={servingsRef} />
        </div>

        <div>
            <label htmlFor="description">description</label>
        </div>
        <div>
            <input type="text" name="description" ref={descriptionRef} />
        </div>

        <div>

        </div>


      </form>
    </>
  );
};
export default AddRecipeForm;
