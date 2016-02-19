'use strict';

/**
 * @ngdoc function
 * @name stockWatchApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the stockWatchApp
 */
angular.module('stockWatchApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
