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
      getURL: function(endpoint, recipeId, author) {
        switch (endpoint) {
          case 'getCategories':
            return baseUrl + '/categories';
          case 'getRecipies':
            return baseUrl + '/recipies';
          case 'getRecipiesByAuthor':
            return baseUrl + '/recipiesByAuthor/' + author;
          case 'postRecipe':
            return baseUrl + '/recipies';
          case 'deleteRecipe':
            return baseUrl + '/recipies/' + recipeId;
          case 'getRecipe':
            return baseUrl + '/recipies/' + recipeId;
          case 'updateRecipe':
            return baseUrl + '/recipies/' + recipeId;
          default:
            return '';
        }

      }
    };
  }]);