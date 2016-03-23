class RecipesController {
  /*@ngInject*/
  constructor(Recipes) {
    this.name = 'recipes';
    this.recipesService = Recipes;

    this.fetchRecipesList();
  }
  fetchRecipesList(){
    this.recipesService.getAllRecipes();
  }
}

export default RecipesController;
