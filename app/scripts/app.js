'use strict';

/**
 * @ngdoc overview
 * @name stockWatchApp
 * @description
 * # stockWatchApp
 *
 * Main module of the application.
 */
angular
  .module('stockWatchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
