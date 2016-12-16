'use strict';

/**
 * @ngdoc service
 * @name yeomanTestApp.recipe
 * @description
 * # recipe
 * Factory in the yeomanTestApp.
 */
angular.module('recipeBookApp')
  .factory('RecipeService', ['$http', 'EndpointService', '$rootScope', function($http, EndpointService, $rootScope) {
    return {
      getRecipies: function() {
        return $http({
          url: EndpointService.getURL('getRecipies'),
          method: 'GET'
        }).then(function successCallback(response) {
          /*  */
          if (!Object.keys(response.data).length > 0) {
            response.data = null;
          }
          return response.data;
        }, function errorCallback(response) {
          //TODO: Handle error
          return null;
        });
      },
      getRecipiesByAuthor: function(author) {
        return $http({
          url: EndpointService.getURL('getRecipiesByAuthor', null, author),
          method: 'GET'
        }).then(function successCallback(response) {
          /*  */
          if (!Object.keys(response.data).length > 0) {
            response.data = null;
          }
          return response.data;
        }, function errorCallback(response) {
          //TODO: Handle error
          return null;
        });
      },
      getCategories: function() {
        return $http({
          url: EndpointService.getURL('getCategories'),
          method: 'GET'
        }).then(function successCallback(response) {
          /*  */
          if (!Object.keys(response.data).length > 0) {
            response.data = null;
          }
          return response.data;
        }, function errorCallback(response) {
          //TODO: Handle error
          return null;
        });
      },
      postRecipe: function(recipe) {
        return $http({
          url: EndpointService.getURL('postRecipe'),
          method: 'POST',
          data: {
            author: $rootScope.loggedInUser.id,
            category: recipe.category,
            ingredients: recipe.ingredients,
            steps: recipe.description,
            title: recipe.title
          }
        }).then(function successCallback(response) {
          /*  */
          if (!Object.keys(response.data).length > 0) {
            response.data = null;
          }
          return response.data;
        }, function errorCallback(response) {
          //TODO: Handle error
          return null;
        });
      },
      deleteRecipe: function(recipeId) {
        return $http({
          url: EndpointService.getURL('deleteRecipe', recipeId),
          method: 'POST'
        }).then(function successCallback(response) {
          /*  */
          if (!Object.keys(response.data).length > 0) {
            response.data = null;
          }
          return response.data;
        }, function errorCallback(response) {
          //TODO: Handle error
          return null;
        });
      },
      getRecipe: function(recipeId) {
        return $http({
          url: EndpointService.getURL('getRecipe', recipeId),
          method: 'GET'
        }).then(function successCallback(response) {
          /*  */
          if (!Object.keys(response.data).length > 0) {
            response.data = null;
          }
          return response.data;
        }, function errorCallback(response) {
          //TODO: Handle error
          return null;
        });
      },
      updateRecipe: function(recipeId, recipe) {
        var defer = $q.defer();
        return $http({
          url: EndpointService.getURL('updateRecipe', recipeId),
          method: 'PUT',
          data: {
            category: recipe.category,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
            title: recipe.title
          }
        }).then(function successCallback(response) {
          /*  */
          if (!Object.keys(response.data).length > 0) {
            response.data = null;
          }
          return response.data;
        }, function errorCallback(response) {
          //TODO: Handle error
          return null;
        });
      }
    };
  }]);