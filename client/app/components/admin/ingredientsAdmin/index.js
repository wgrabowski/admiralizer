import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ingredientsAdminComponent from './ingredientsAdmin.component';

let ingredientsAdminModule = angular.module('ingredientsAdmin', [
    uiRouter
  ])
    .config(($stateProvider) => {
    "ngInject";
    $stateProvider.state('ingredientsAdmin', {
      url: '/admin/ingredientsAdmin',
      template: '<ingredients-admin></ingredients-admin>'
    });
  })
  .component('ingredientsAdmin', ingredientsAdminComponent
)
.name;

export default ingredientsAdminModule;
