import angular from 'angular';
import AuthFactory from './auth.factory';

let userModule = angular.module('auth', [])

.factory('Auth', ['$firebaseAuth', AuthFactory])

.name;

export default userModule;
