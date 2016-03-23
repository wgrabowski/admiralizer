import angular from 'angular';
import uiRouter from 'angular-ui-router';
import recipeFromIngredientsComponent from './recipeFromIngredients.component';

let recipeFromIngredientsModule = angular.module('recipeFromIngredients', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('recipeFromIngredients', {
      url: '/recipeFromIngredients',
      template: '<recipe-from-ingredients></recipe-from-ingredients>'
    });
})

.component('recipeFromIngredients', recipeFromIngredientsComponent)

.name;

export default recipeFromIngredientsModule;
