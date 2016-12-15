'use strict';

/**
 * @ngdoc service
 * @name yeomanTestApp.endpoint
 * @description
 * # endpoint
 * Factory in the yeomanTestApp.
 */
angular.module('recipeBookApp')
  .factory('EndpointService', [function() {
    var baseUrl = 'http://localhost:8080/API'

    return {
      getURL: function(endpoint, recipeId) {
        switch (endpoint) {
          case 'getCategories':
            return baseUrl + '/categories';
          case 'getRecipies':
            return baseUrl + '/recipies';
          case 'postRecipe':
            return baseUrl + '/recipies';
          case 'deleteRecipe':
            return baseUrl + '/recipies/' + recipeId;
          default:
            return '';
        }

      }
    };
  }]);