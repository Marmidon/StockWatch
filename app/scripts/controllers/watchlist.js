'use strict';

/**
 * @ngdoc function
 * @name stockWatchApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockWatchApp
 */
angular.module('stockWatchApp')
  .controller('WatchlistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
