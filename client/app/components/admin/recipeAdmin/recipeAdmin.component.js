import template from './recipeAdmin.html';
import controller from './recipeAdmin.controller';
import './_recipeAdmin.scss';

let recipeAdminComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default recipeAdminComponent;
