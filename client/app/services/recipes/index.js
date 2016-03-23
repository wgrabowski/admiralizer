import angular from 'angular';
import RecipesService from './recipes.service';

let recipesModule = angular.module('Recipes', [])

.service('Recipes', RecipesService).name;

export default recipesModule;
