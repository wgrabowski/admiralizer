import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './_<%= name %>.scss';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default <%= name %>Component;
