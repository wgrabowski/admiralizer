import template from './home.html';
import controller from './home.controller';
import './_home.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default homeComponent;
