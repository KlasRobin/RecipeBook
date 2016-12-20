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

    /* Get recipe id from route param*/
    $scope.recipeId = $routeParams.id;
    
    /* Edit form control variable */
    $scope.showEdit = false;

    /* Get recipe from backend service */
    RecipeService.getRecipe($scope.recipeId).then(function(data) {
      $scope.recipe = data;
      var ingredients = $scope.recipe.ingredients.split(',');
      $scope.recipe.ingredients = ingredients;
    });

    /* Get categories from backend service */
    RecipeService.getCategories().then(function(data) {
      $scope.categories = data;
    });

    /* Show edit form*/
    $scope.editRecipe = function() {
      $scope.tempRecipe = angular.copy($scope.recipe);
      $scope.tempRecipe.category = null;
      $scope.tempIngredients = angular.copy($scope.recipe.ingredients);
      $scope.showEdit = !$scope.showEdit;
    };

    /* Close edit form */
    $scope.closeEdit = function() {
      $scope.showEdit = false;
    };

    /* Add ingredient to array*/
    $scope.addIngredient = function() {
      $scope.tempIngredients.push("");
    };

    $scope.removeIngredient = function(index) {
      $scope.tempIngredients.splice(index, 1);
    };

    /* Route back to recipebook*/
    $scope.goBack = function() {
      $location.path('/recipeBook');
    };

    /* Update recipe in backend service*/
    $scope.updateRecipe = function() {

      /* Replace ingredients array with comma seperated string*/
      var temp = "";
      for (var i = $scope.tempIngredients.length - 1; i >= 0; i--) {
        temp += $scope.tempIngredients[i];
        if (i !== 0) {
          temp += ',';
        }
      }
      $scope.tempRecipe.ingredients = temp;

      /* Update recipe in backend service */
      RecipeService.updateRecipe($scope.tempRecipe.recipeId, $scope.tempRecipe).then(function(data) {
        /* Show sweet alert confirmation*/
        swal({
            title: "Ditt recept är uppdaterat!",
            type: "success",
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: true,
            timer: 1000
          });
        /* Update recipe in view */
        $scope.recipe = data;
        /* Replace comma seperated list with array */
        var ingredients = $scope.recipe.ingredients.split(',');
        $scope.recipe.ingredients = ingredients;
        /* Hide edit form */
        $scope.showEdit = false;
      });
    };


  });