import template from './recipeFromIngredients.html';
import controller from './recipeFromIngredients.controller';
import './_recipeFromIngredients.scss';

let recipeFromIngredientsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default recipeFromIngredientsComponent;
