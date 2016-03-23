import IngredientsAdminModule from './ingredientsAdmin'
import IngredientsAdminController from './ingredientsAdmin.controller';
import IngredientsAdminComponent from './ingredientsAdmin.component';
import IngredientsAdminTemplate from './ingredientsAdmin.html';

describe('IngredientsAdmin', () => {
  let $rootScope, makeController;

  beforeEach(window.module(IngredientsAdminModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new IngredientsAdminController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(IngredientsAdminTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = IngredientsAdminComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(IngredientsAdminTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(IngredientsAdminController);
      });
  });
});
