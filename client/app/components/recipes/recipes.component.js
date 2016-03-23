import template from './recipes.html';
import controller from './recipes.controller';
import './_recipes.scss';

let recipesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default recipesComponent;
