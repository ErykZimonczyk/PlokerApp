'use strict';

angular.module('plokerApp')
  .service('ApiService',['$http', 'API_URL',function($http, API_URL) {
    var teamsUrl = "/teams",
        historyUrl = "/history",
        sessionsUrl = "/sessions";

    var baseGet = function(baseUrl, baseId) {
      if(baseId && typeof baseId === 'string') {
        baseUrl += baseId;
      }

      return $http.get(API_URL+baseUrl);
    };

    this.getTeams = function(teamId) {
      return baseGet(teamsUrl, teamId);
    };

    this.getHistory = function(teamId) {
      return baseGet(historyUrl, teamId);
    };

    this.getSessions = function(sessionId) {
      return baseGet(sessionsUrl, sessionId);
    };
  }
]);
