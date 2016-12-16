'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:SinglerecipeCtrl
 * @description
 * # SinglerecipeCtrl
 * Controller of the yeomanTestApp
 */
angular.module('recipeBookApp')
  .controller('SinglerecipeCtrl', function($scope, $routeParams, RecipeService, $location) {

    $scope.recipeId = $routeParams.id;
    $scope.showEdit = false;

    RecipeService.getRecipe($scope.recipeId).then(function(data) {
      $scope.recipe = data;
      var ingredients = $scope.recipe.ingredients.split(',');
      $scope.recipe.ingredients = ingredients;
    });

    RecipeService.getCategories().then(function(data) {
      $scope.categories = data;
    });

    $scope.editRecipe = function() {
      $scope.tempRecipe = angular.copy($scope.recipe);
      $scope.tempIngredients = angular.copy($scope.recipe.ingredients);
      $scope.showEdit = !$scope.showEdit;
    };

    $scope.closeEdit = function() {
      $scope.showEdit = false;
    };

    $scope.addIngredient = function() {
      $scope.tempIngredients.push("");
    };

    $scope.removeIngredient = function(index) {
      $scope.tempIngredients.splice(index, 1);
    };

    $scope.goBack = function() {
      $location.path('/recipeBook');
    };

    $scope.updateRecipe = function() {
      var temp = "";
      for (var i = $scope.tempIngredients.length - 1; i >= 0; i--) {
        temp += $scope.tempIngredients[i];
        if (i !== 0) {
          temp += ',';
        }
      }
      $scope.tempRecipe.ingredients = temp;

      RecipeService.updateRecipe($scope.tempRecipe.recipeId, $scope.tempRecipe).then(function(data) {
        swal({
            title: "Ditt recept är uppdaterat!",
            type: "success",
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: true,
            timer: 1000
          });
        $scope.recipe = data;
        var ingredients = $scope.recipe.ingredients.split(',');
        $scope.recipe.ingredients = ingredients;
        $scope.showEdit = false;
      });
    };


  });