'use strict';

angular.module('plokerApp')
  .service('ApiService',['$http', function($http) {
    var teamsUrl = "/teams";


    this.getTeams = function(teamId) {
      var url = teamsUrl;
      if(teamId && typeof teamId === 'string') {
        url += teamId;
      }

      return $http.get(url)
    }
  }
]);
