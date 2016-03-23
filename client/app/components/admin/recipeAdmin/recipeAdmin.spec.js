import RecipeAdminModule from './recipeAdmin'
import RecipeAdminController from './recipeAdmin.controller';
import RecipeAdminComponent from './recipeAdmin.component';
import RecipeAdminTemplate from './recipeAdmin.html';

describe('RecipeAdmin', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RecipeAdminModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RecipeAdminController();
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
      expect(RecipeAdminTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RecipeAdminComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RecipeAdminTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RecipeAdminController);
      });
  });
});
