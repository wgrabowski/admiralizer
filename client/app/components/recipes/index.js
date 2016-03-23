import angular from 'angular';
import uiRouter from 'angular-ui-router';
import recipesComponent from './recipes.component';

let recipesModule = angular.module('recipes', [
    uiRouter
  ])
    .config(($stateProvider) => {
    "ngInject";
    $stateProvider.state('recipes', {
      url: '/recipes',
      template: '<recipes></recipes>'
    });
  })
  .component('recipes', recipesComponent).name;

export default recipesModule;
