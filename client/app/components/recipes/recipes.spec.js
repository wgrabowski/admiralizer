import RecipesModule from './recipes'
import RecipesController from './recipes.controller';
import RecipesComponent from './recipes.component';
import RecipesTemplate from './recipes.html';

describe('Recipes', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RecipesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RecipesController();
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
      expect(RecipesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RecipesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RecipesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RecipesController);
      });
  });
});
