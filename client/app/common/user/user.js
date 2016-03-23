import angular from 'angular';
import UserFactory from './user.service';
import Auth from '../auth/auth';

let userModule = angular.module('user', [Auth])

.service('User', UserFactory)

.name;

export default userModule;
