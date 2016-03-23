import template from './about.html';
import controller from './about.controller';
import './_about.scss';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default aboutComponent;
