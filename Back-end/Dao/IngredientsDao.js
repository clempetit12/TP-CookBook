
export default class IngredientsDao {
    constructor(file){
    this.ingredients = []
    this.file =  resolve("./data/ingredients.json")
}

readFileIngredients() {
    const file = readFileSync(this.file, { encoding: "utf-8" });
    this.ingredients = JSON.parse(file);
}

writeFileIngredients() {
    writeFileSync(this.file, JSON.stringify(this.ingredients));
}
    
getAllIngredients () {
    return this.ingredients
}

getOneIngredient (id) {
    return this.ingredients.find(i=>i.id === id)
}

saveIngredient (ingredient) {
    ingredient.id = Date.now()
    this.ingredients.push(ingredient)
    this.writeFileIngredients()
    return ingredient

}

updateIngredient (ingredientUpdate) {
    const ingredient = this.getOneIngredient(ingredientUpdate.id)
    if (ingredient === undefined) {
        return false 
    } else {
        ingredient.name = ingredientUpdate.name
        ingredient.description = ingredientUpdate.description
        ingredient.timeCooking = ingredientUpdate.timeCooking
        ingredient.prepTime = ingredientUpdate.prepTime
        ingredient.servings = ingredientUpdate.servings
        ingredient.ingredients = ingredientUpdate.ingredients
        this.writeFileIngredients()
        return true
    }
}



deleteIngredient (id) {
    this.ingredients.filter(i=> i.id !== id)
    this.writeFileIngredients()
}


}