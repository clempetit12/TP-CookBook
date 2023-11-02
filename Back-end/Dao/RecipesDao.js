
export default class Recipesdao {
    constructor(file){
    this.recipes = []
    this.file =  resolve("./data/recipes.json")
}

readFileRecipes() {
    const file = readFileSync(this.file, { encoding: "utf-8" });
    this.recipes = JSON.parse(file);
}

writeFileRecipes() {
    writeFileSync(this.file, JSON.stringify(this.recipes));
}
    
getAllRecipes () {
    return this.recipes
}

getOneRecipe (id) {
    return this.recipes.find(r=>r.id === id)
}

saveRecipe (recipe) {
    recipe.id = Date.now()
    this.recipes.push(recipe)
    this.writeFileRecipes()
    return recipe

}

updateRecipe (recipeUpdate) {
    const recipe = this.getOneRecipe(recipeUpdate.id)
    if (recipe === undefined) {
        return false 
    } else {
        recipe.name = recipeUpdate.name
        recipe.description = recipeUpdate.description
        recipe.timeCooking = recipeUpdate.timeCooking
        recipe.prepTime = recipeUpdate.prepTime
        recipe.servings = recipeUpdate.servings
        recipe.ingredients = recipeUpdate.ingredients
        this.writeFileRecipes
        return true
    }
}



deleteRecipe (id) {
    this.recipes.filter(r=> r.id !== id)
    this.writeFileRecipes
}


}