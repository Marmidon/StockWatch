'use strict';
angular.module('stockWatchApp')
.service('CompanyService', function CompanyService($resource) {
return $resource('companies.json');
});