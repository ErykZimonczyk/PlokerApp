'use strict';

angular.module('plokerApp')
  .controller('SideCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', '$location', function ($scope, $timeout, $mdSidenav, $log, $location) {

    var close = function () {
      $mdSidenav('sidebar').close()
        .then(function () {
          $log.debug("close sidenav is done");
        });
    };


    $scope.navigateTo = function(location, $event) {
      $location.path(location);
      close();
      $location.replace();
    };

    $scope.menu = [
      {
        title: "Create session",
        icon: "add",
        location: "/session/new"
      },
      {
        title: "Join session",
        icon: "redo",
        location: "/session/join"
      },
      {
        title: "History",
        icon: "history",
        location: "/history"
      },
      {
        title: "Team",
        icon: "group",
        location: "/team"
      }
    ];
  }]);
