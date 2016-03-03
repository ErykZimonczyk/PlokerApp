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
        templateUrl: 'components/sessions/sessions.view.html',
        controller: 'SessionsCtrl',
        controllerAs: 'session'
      })
      .otherwise({
        redirectTo: '/'
      });

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('blue')
      .warnPalette('red')
  })
  .constant("API_URL","127.0.0.1:8080");
