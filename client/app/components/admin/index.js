import angular from 'angular';
import uiRouter from 'angular-ui-router';
import adminComponent from './admin.component';
import recipeAdmin from './recipeAdmin';
import ingredientAdmin from './ingredientsAdmin';

let adminModule = angular.module('admin', [
    uiRouter,
    recipeAdmin,
    ingredientAdmin
  ])
    .config(($stateProvider) => {
    "ngInject";
    $stateProvider.state('admin', {
      url: '/admin',
      template: '<admin></admin>'
    });
  })
  .component('admin', adminComponent)
.name;

export default adminModule;
