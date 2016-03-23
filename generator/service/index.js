import angular from 'angular';
import <%= serviceName %> from './<%= name %>.service';

let <%= name %>Module = angular.module('<%= upCaseName %>', [])

.service('<%= upCaseName %>', <%= serviceName %>)

.name;

export default <%= name %>Module;
