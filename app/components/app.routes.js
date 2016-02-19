'use strict';

angular
  .module('plokerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/main/main.view.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'components/about/about.view.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/history/:team?', {
        templateUrl: 'components/history/history.view.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })
      .when('/sessions/:session?', {
        templateUrl: 'session/session.html',
        controller: 'SessionCtrl',
        controllerAs: 'session'
      })
      .otherwise({
        redirectTo: '/'
      });

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('blue')
      .warnPalette('red')
  });
