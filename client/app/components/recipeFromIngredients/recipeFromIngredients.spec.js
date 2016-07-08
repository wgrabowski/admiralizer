import RecipeFromIngredientsModule from './recipeFromIngredients'
import RecipeFromIngredientsController from './recipeFromIngredients.controller';
import RecipeFromIngredientsComponent from './recipeFromIngredients.component';
import RecipeFromIngredientsTemplate from './recipeFromIngredients.html';

describe('RecipeFromIngredients', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RecipeFromIngredientsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RecipeFromIngredientsController();
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
      expect(RecipeFromIngredientsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RecipeFromIngredientsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RecipeFromIngredientsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RecipeFromIngredientsController);
      });
  });
});
