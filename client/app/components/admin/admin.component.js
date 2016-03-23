import template from './admin.html';
import controller from './admin.controller';
import './_admin.scss';

let adminComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default adminComponent;
