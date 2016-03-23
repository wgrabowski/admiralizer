import angular from 'angular';
import uiRouter from 'angular-ui-router';
import recipeAdminComponent from './recipeAdmin.component';

let recipeAdminModule = angular.module('recipeAdmin', [
    uiRouter
  ])
    .config(($stateProvider) => {
    "ngInject";
    $stateProvider.state('recipeAdmin', {
      url: '/admin/recipes',
      template: '<recipe-admin></recipe-admin>'
    });
  })
  .component('recipeAdmin', recipeAdminComponent
)
.name;

export default recipeAdminModule;
