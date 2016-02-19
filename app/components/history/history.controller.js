'use strict';

angular.module('plokerApp')
  .controller('HistoryCtrl', ['$scope', '$routeParams', '$log', function ($scope, $routeParams, $log) {
    $log.debug($routeParams);
    var date = Date.now();

    // MOCKS

    $scope.teams = {
      "1": {
        avatar: "http://img07.deviantart.net/3292/i/2012/115/f/a/team_avatar_by_lostatsea101-d4xi67w.jpg",
        name: "Mobile Products KRK"
      }
    };

    $scope.historyList = [
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      },
      {
        date: date,
        title: "Planning - sprint #61",
        teamId: 1
      }
    ];
  }]);
