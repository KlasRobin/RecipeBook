'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:RecipecontrollerCtrl
 * @description
 * # RecipecontrollerCtrl
 * Controller of the yeomanTestApp
 */
angular.module('recipeBookApp')
  .controller('RecipeCtrl', ['$scope', '$rootScope', '$location', 'RecipeService', function($scope, $rootScope, $location, RecipeService) {

    /* Get logged in user from rootscope */
    $scope.user = $rootScope.loggedInUser;
    
    $scope.recipies = [];
    $scope.categories = [];

    $scope.newRecipe = {};
    $scope.ingredients = [];

    /* Route back to login not logged in */
    if ($scope.user == undefined) {
      $location.path('/');
    }

    /* Get recipies from server */
    if ($rootScope.loggedInUser) {
      RecipeService.getRecipiesByAuthor($scope.user.id).then(function(data) {
        $scope.recipies = data;
      });
    }

    /* Get categories from server*/
    RecipeService.getCategories().then(function(data) {
      $scope.categories = data;
    });

    $scope.addIngredient = function() {
      $scope.ingredients.push("");
    }

    $scope.removeIngredient = function(index) {
      $scope.ingredients.splice(index, 1);
    }

    /* Post recipie to backend service */
    $scope.postRecipe = function() {
      var temp = "";
      /* Loop through ingredients and create comma seperated string */
      for (var i = $scope.ingredients.length - 1; i >= 0; i--) {
        temp += $scope.ingredients[i];
        if (i !== 0) {
          temp += ',';
        }
      }
      /* Replace ingredients array with ingredients string */
      $scope.newRecipe.ingredients = temp;
      /* Post recipe to backend service */
      RecipeService.postRecipe($scope.newRecipe).then(function(data) {
        updateList();
        $scope.clearForm();
        $('#newRecipeModal').modal('hide');
      });
    };

    /* Remove recipe from backend service */
    $scope.removeRecipe = function(recipeId) {
      RecipeService.deleteRecipe(recipeId).then(function(data) {
        updateList();
      });
    };

    /* Clear add new recipe form */
    $scope.clearForm = function() {
      $scope.newRecipe = {};
      $scope.ingredients = [];
    };

    /* Route to recipe single view */
    $scope.goToRecipe = function(id) {
      $location.path('/recipeBook/' + id);
    };

    /* Update category filter with picked filter */
    $scope.updateCategoryFilter = function(filter) {
      if (filter === 'all') {
        $scope.catFilter = "";
      } else {
        $scope.catFilter = filter;
      }
    };

    /* Get list from backend service */
    var updateList = function() {
      RecipeService.getRecipiesByAuthor($scope.user.id).then(function(data) {
        $scope.recipies = data;
      });
    };

  }]);