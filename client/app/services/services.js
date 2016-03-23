import angular from 'angular';
import Recipes from './recipes';

let serviceModule = angular.module('app.services', [
  Recipes
]).name;

export default serviceModule;
